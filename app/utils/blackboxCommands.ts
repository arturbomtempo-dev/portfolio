import type {
    CommandContext,
    CommandEffects,
    CommandResult,
    GameState,
    MissionChallenge,
    TerminalOutput,
    TerminalSegment,
    TerminalTone,
} from '~/types/blackbox';
import { findMatchedConcepts, matchesAcceptedAnswer } from './answerValidation';
import { parseCommandLine, splitOptions } from './commandParser';
import { decodeJwt, verifyHs256 } from './jwtInspector';
import {
    collectEvidence,
    getFocusChallenge,
    getOpenChallenges,
    getUnlockedBy,
    hasRequiredEvidence,
    isMissionComplete,
    resolveAutomaticChallenges,
    solveChallenge,
} from './missionProgress';
import {
    createVirtualFileSystem,
    findPaths,
    getBaseName,
    grepContent,
    isDirectory,
    isFile,
    listDirectory,
    listFilesInside,
    resolvePath,
    type VirtualFileSystem,
} from './virtualFileSystem';

export const BLACKBOX_COMMANDS = [
    'help',
    'ls',
    'cd',
    'pwd',
    'cat',
    'grep',
    'find',
    'jwt',
    'status',
    'hint',
    'submit',
    'clear',
    'reset',
    'exit',
] as const;

export const MAX_COMMAND_LENGTH = 300;

type CommandName = (typeof BLACKBOX_COMMANDS)[number];

interface HandlerResult {
    output: TerminalOutput;
    state?: GameState;
    effects?: CommandEffects;
    evidence?: string[];
}

type CommandHandler = (
    args: string[],
    context: CommandContext,
    fileSystem: VirtualFileSystem
) => HandlerResult | Promise<HandlerResult>;

const MAX_HINT_LEVEL = 3;
const PROGRESS_BAR_WIDTH = 12;
const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_SECOND = 1000;
const JSON_INDENTATION = 2;

function line(text: string, tone: TerminalTone = 'default', isBold = false): TerminalSegment[] {
    return [{ text, tone, isBold }];
}

function blankLine(): TerminalSegment[] {
    return [];
}

function isCommandName(name: string): name is CommandName {
    return (BLACKBOX_COMMANDS as readonly string[]).includes(name);
}

function getFileContent(context: CommandContext, path: string, fileSystem: VirtualFileSystem) {
    return context.copy.documents[path] ?? fileSystem.files.get(path)?.content ?? '';
}

function formatDuration(milliseconds: number) {
    const totalSeconds = Math.max(0, Math.floor(milliseconds / MILLISECONDS_PER_SECOND));
    const minutes = Math.floor(totalSeconds / SECONDS_PER_MINUTE);
    const seconds = totalSeconds % SECONDS_PER_MINUTE;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function getElapsedTime(state: GameState, now: number) {
    return state.startedAt ? formatDuration((state.completedAt ?? now) - state.startedAt) : '00:00';
}

function missingOperand(context: CommandContext, command: CommandName): HandlerResult {
    return {
        output: [
            line(
                context.t('blackbox.errors.missingOperand', {
                    command,
                    usage: context.t(`blackbox.usage.${command}`),
                }),
                'error'
            ),
        ],
    };
}

function pathError(context: CommandContext, key: string, command: string, path: string) {
    return line(context.t(`blackbox.errors.${key}`, { command, path }), 'error');
}

function unknownOptionError(context: CommandContext, command: string, option: string) {
    return {
        output: [line(context.t('blackbox.errors.unknownOption', { command, option }), 'error')],
    };
}

function getInvalidOption(options: string[], allowed: string[]) {
    return options
        .flatMap((option) =>
            option.startsWith('--')
                ? [option]
                : option
                      .slice(1)
                      .split('')
                      .map((flag) => `-${flag}`)
        )
        .find((option) => !allowed.includes(option));
}

function highlightMatches(text: string, pattern: string, isCaseInsensitive: boolean) {
    const segments: TerminalSegment[] = [];
    const haystack = isCaseInsensitive ? text.toLowerCase() : text;
    const needle = isCaseInsensitive ? pattern.toLowerCase() : pattern;
    let cursor = 0;
    let matchIndex = haystack.indexOf(needle);

    while (needle && matchIndex !== -1) {
        if (matchIndex > cursor) {
            segments.push({ text: text.slice(cursor, matchIndex) });
        }

        segments.push({
            text: text.slice(matchIndex, matchIndex + needle.length),
            tone: 'warning',
            isBold: true,
        });
        cursor = matchIndex + needle.length;
        matchIndex = haystack.indexOf(needle, cursor);
    }

    if (cursor < text.length) {
        segments.push({ text: text.slice(cursor) });
    }

    return segments;
}

function showHelp(_args: string[], context: CommandContext): HandlerResult {
    const usageWidth = Math.max(
        ...BLACKBOX_COMMANDS.map((command) => context.t(`blackbox.usage.${command}`).length)
    );

    return {
        output: [
            line(context.t('blackbox.help.title'), 'accent', true),
            blankLine(),
            ...BLACKBOX_COMMANDS.map((command) => [
                {
                    text: `  ${context.t(`blackbox.usage.${command}`).padEnd(usageWidth + 3)}`,
                    tone: 'command' as const,
                },
                { text: context.t(`blackbox.commands.${command}`), tone: 'muted' as const },
            ]),
            blankLine(),
            line(context.t('blackbox.help.hiddenInPlainSight'), 'warning'),
            line(context.t('blackbox.help.start'), 'muted'),
        ],
    };
}

function printWorkingDirectory(_args: string[], context: CommandContext): HandlerResult {
    return { output: [line(context.state.cwd, 'path')] };
}

function listEntries(
    args: string[],
    context: CommandContext,
    fileSystem: VirtualFileSystem
): HandlerResult {
    const { options, operands } = splitOptions(args);
    const invalidOption = getInvalidOption(options, ['-a', '-l']);

    if (invalidOption) {
        return unknownOptionError(context, 'ls', invalidOption);
    }

    const shouldIncludeHidden = options.some((option) => option.includes('a'));
    const targets = operands.length ? operands : ['.'];
    const output: TerminalOutput = [];

    targets.forEach((target) => {
        const path = resolvePath(target, context.state.cwd, context.mission.homeDirectory);

        if (isFile(fileSystem, path)) {
            output.push(line(getBaseName(path)));
            return;
        }

        if (!isDirectory(fileSystem, path)) {
            output.push(pathError(context, 'noSuchPath', 'ls', target));
            return;
        }

        if (targets.length > 1) {
            output.push(line(`${target}:`, 'path'));
        }

        const entries = listDirectory(fileSystem, path, shouldIncludeHidden);

        if (entries.length) {
            output.push(
                entries.flatMap((entry, entryIndex) => [
                    ...(entryIndex ? [{ text: '   ' }] : []),
                    {
                        text: entry.isDirectory ? `${entry.name}/` : entry.name,
                        tone: entry.isDirectory
                            ? ('directory' as const)
                            : entry.isHidden
                              ? ('muted' as const)
                              : ('default' as const),
                        isBold: entry.isDirectory,
                    },
                ])
            );
        }
    });

    return { output };
}

function changeDirectory(
    args: string[],
    context: CommandContext,
    fileSystem: VirtualFileSystem
): HandlerResult {
    const [target = '~'] = args;
    const path = resolvePath(target, context.state.cwd, context.mission.homeDirectory);

    if (isFile(fileSystem, path)) {
        return { output: [pathError(context, 'notDirectory', 'cd', target)] };
    }

    if (!isDirectory(fileSystem, path)) {
        return { output: [pathError(context, 'noSuchPath', 'cd', target)] };
    }

    return { output: [], state: { ...context.state, cwd: path } };
}

function readFiles(
    args: string[],
    context: CommandContext,
    fileSystem: VirtualFileSystem
): HandlerResult {
    const { operands } = splitOptions(args);

    if (!operands.length) {
        return missingOperand(context, 'cat');
    }

    const output: TerminalOutput = [];
    const evidence: string[] = [];

    operands.forEach((target) => {
        const path = resolvePath(target, context.state.cwd, context.mission.homeDirectory);

        if (isDirectory(fileSystem, path)) {
            output.push(pathError(context, 'isDirectory', 'cat', target));
            return;
        }

        const file = fileSystem.files.get(path);

        if (!file) {
            output.push(pathError(context, 'noSuchPath', 'cat', target));
            return;
        }

        getFileContent(context, path, fileSystem)
            .split('\n')
            .forEach((contentLine) => output.push(line(contentLine)));

        if (file.evidence) {
            evidence.push(file.evidence);
        }
    });

    return { output, evidence };
}

function searchContents(
    args: string[],
    context: CommandContext,
    fileSystem: VirtualFileSystem
): HandlerResult {
    const { options, operands } = splitOptions(args);
    const invalidOption = getInvalidOption(options, ['-i', '-r', '-n']);

    if (invalidOption) {
        return unknownOptionError(context, 'grep', invalidOption);
    }

    const [pattern, ...targets] = operands;

    if (!pattern || !targets.length) {
        return missingOperand(context, 'grep');
    }

    const flags = options.join('');
    const isCaseInsensitive = flags.includes('i');
    const isRecursive = flags.includes('r');
    const shouldShowLineNumbers = flags.includes('n');
    const output: TerminalOutput = [];
    const evidence: string[] = [];
    const files: string[] = [];

    targets.forEach((target) => {
        const path = resolvePath(target, context.state.cwd, context.mission.homeDirectory);

        if (isFile(fileSystem, path)) {
            files.push(path);
        } else if (isDirectory(fileSystem, path)) {
            if (isRecursive) {
                files.push(...listFilesInside(fileSystem, path));
            } else {
                output.push(pathError(context, 'grepDirectory', 'grep', target));
            }
        } else {
            output.push(pathError(context, 'noSuchPath', 'grep', target));
        }
    });

    const shouldPrefixPath = files.length > 1;
    let matchCount = 0;

    files.forEach((path) => {
        const matches = grepContent(
            getFileContent(context, path, fileSystem),
            pattern,
            isCaseInsensitive
        );

        matchCount += matches.length;
        matches.forEach((match) => {
            output.push([
                ...(shouldPrefixPath ? [{ text: `${path}:`, tone: 'path' as const }] : []),
                ...(shouldShowLineNumbers
                    ? [{ text: `${match.lineNumber}:`, tone: 'success' as const }]
                    : []),
                ...highlightMatches(match.line, pattern, isCaseInsensitive),
            ]);
        });

        context.mission.grepEvidence
            .filter((rule) => rule.path === path)
            .filter((rule) =>
                matches.some((match) =>
                    match.line.toLowerCase().includes(rule.requiredMatch.toLowerCase())
                )
            )
            .forEach((rule) => evidence.push(rule.evidence));
    });

    if (files.length && !matchCount) {
        output.push(line(context.t('blackbox.grep.noMatches'), 'muted'));
    }

    return { output, evidence };
}

function findFiles(
    args: string[],
    context: CommandContext,
    fileSystem: VirtualFileSystem
): HandlerResult {
    const nameOptionIndex = args.indexOf('-name');
    const namePattern = nameOptionIndex === -1 ? undefined : args[nameOptionIndex + 1];

    if (nameOptionIndex !== -1 && !namePattern) {
        return missingOperand(context, 'find');
    }

    const remainingArgs = args.filter(
        (_, index) =>
            nameOptionIndex === -1 || (index !== nameOptionIndex && index !== nameOptionIndex + 1)
    );
    const invalidOption = remainingArgs.find((arg) => arg.startsWith('-'));

    if (invalidOption) {
        return unknownOptionError(context, 'find', invalidOption);
    }

    const [target = '.'] = remainingArgs;
    const startPath = resolvePath(target, context.state.cwd, context.mission.homeDirectory);

    if (!isDirectory(fileSystem, startPath)) {
        return { output: [pathError(context, 'noSuchPath', 'find', target)] };
    }

    const paths = findPaths(fileSystem, startPath, namePattern);

    return {
        output: paths.length
            ? paths.map((path) => line(path, isDirectory(fileSystem, path) ? 'directory' : 'path'))
            : [line(context.t('blackbox.find.noMatches'), 'muted')],
    };
}

function formatJson(value: Record<string, unknown>) {
    return JSON.stringify(value, null, JSON_INDENTATION).split('\n');
}

function formatTimestamp(value: unknown) {
    return typeof value === 'number'
        ? new Date(value * MILLISECONDS_PER_SECOND).toISOString()
        : undefined;
}

async function inspectToken(
    args: string[],
    context: CommandContext,
    fileSystem: VirtualFileSystem
): Promise<HandlerResult> {
    const [action, target] = args;

    if ((action !== 'decode' && action !== 'verify') || !target) {
        return missingOperand(context, 'jwt');
    }

    const path = resolvePath(target, context.state.cwd, context.mission.homeDirectory);
    const isMissionToken = path === context.mission.jwt.path;
    const token = isFile(fileSystem, path) ? getFileContent(context, path, fileSystem) : target;

    if (isDirectory(fileSystem, path)) {
        return { output: [pathError(context, 'isDirectory', 'jwt', target)] };
    }

    const decoded = decodeJwt(token);

    if (!decoded) {
        return { output: [line(context.t('blackbox.jwt.invalid'), 'error')] };
    }

    if (action === 'decode') {
        const issuedAt = formatTimestamp(decoded.payload.iat);
        const expiresAt = formatTimestamp(decoded.payload.exp);

        return {
            output: [
                line(context.t('blackbox.jwt.header'), 'accent', true),
                ...formatJson(decoded.header).map((jsonLine) => line(jsonLine, 'info')),
                blankLine(),
                line(context.t('blackbox.jwt.payload'), 'accent', true),
                ...formatJson(decoded.payload).map((jsonLine) => line(jsonLine, 'info')),
                ...(issuedAt ? [line(`  iat → ${issuedAt}`, 'muted')] : []),
                ...(expiresAt ? [line(`  exp → ${expiresAt}`, 'muted')] : []),
                blankLine(),
                line(context.t('blackbox.jwt.signature'), 'accent', true),
                line(decoded.signature, 'muted'),
                blankLine(),
                line(context.t('blackbox.jwt.decodeNote'), 'warning'),
            ],
            evidence: isMissionToken ? [context.mission.jwt.evidenceOnDecode] : [],
        };
    }

    const keyId = typeof decoded.header.kid === 'string' ? decoded.header.kid : '?';

    if (keyId !== context.mission.jwt.keyId) {
        return { output: [line(context.t('blackbox.jwt.unknownKey', { keyId }), 'error')] };
    }

    const isValid = await verifyHs256(decoded, context.mission.jwt.signingKey);

    return {
        output: [
            line(context.t('blackbox.jwt.verifying', { keyId }), 'muted'),
            isValid
                ? line(context.t('blackbox.jwt.validSignature'), 'success', true)
                : line(context.t('blackbox.jwt.invalidSignature'), 'error', true),
            line(
                context.t(isValid ? 'blackbox.jwt.validNote' : 'blackbox.jwt.invalidNote'),
                'muted'
            ),
        ],
        evidence: isMissionToken ? [context.mission.jwt.evidenceOnVerify] : [],
    };
}

function getChallengeTitle(context: CommandContext, challenge: MissionChallenge) {
    return context.copy.challenges[challenge.id]?.title ?? challenge.id;
}

function showStatus(_args: string[], context: CommandContext): HandlerResult {
    const { mission, state, t, copy } = context;
    const total = mission.challenges.length;
    const solvedCount = state.solved.length;
    const filled = Math.round((solvedCount / total) * PROGRESS_BAR_WIDTH);
    const progressBar = `${'█'.repeat(filled)}${'░'.repeat(PROGRESS_BAR_WIDTH - filled)}`;
    const evidenceTotal = Object.keys(copy.evidenceLabels).length;

    const challengeLines = mission.challenges.flatMap((challenge): TerminalOutput => {
        const challengeCopy = copy.challenges[challenge.id];
        const isSolved = state.solved.includes(challenge.id);
        const isOpen =
            !isSolved &&
            challenge.dependencies.every((dependency) => state.solved.includes(dependency));

        if (isSolved) {
            return [
                [
                    { text: '  [✓] ', tone: 'success' },
                    { text: challengeCopy?.title ?? challenge.id },
                    { text: ` · ${t('blackbox.status.done')}`, tone: 'muted' },
                ],
            ];
        }

        if (isOpen) {
            return [
                [
                    { text: '  [>] ', tone: 'warning', isBold: true },
                    { text: challengeCopy?.title ?? challenge.id, isBold: true },
                    { text: ` · ${t('blackbox.status.open')}`, tone: 'muted' },
                ],
                line(`      ${challengeCopy?.question ?? challengeCopy?.objective ?? ''}`, 'muted'),
            ];
        }

        return [
            [
                { text: '  [ ] ', tone: 'muted' },
                { text: t('blackbox.status.locked'), tone: 'muted' },
            ],
        ];
    });

    return {
        output: [
            line(`${mission.incidentId} · ${copy.title}`, 'accent', true),
            [
                { text: `${t('blackbox.status.progress')}  `, tone: 'muted' },
                { text: progressBar, tone: 'success' },
                { text: `  ${solvedCount}/${total}` },
            ],
            [
                { text: `${t('blackbox.status.evidence')} `, tone: 'muted' },
                { text: `${state.evidence.length}/${evidenceTotal}` },
                { text: `  ·  ${t('blackbox.status.hints')} `, tone: 'muted' },
                { text: String(state.hintsUsed) },
                { text: `  ·  ${t('blackbox.status.time')} `, tone: 'muted' },
                { text: getElapsedTime(state, context.now) },
            ],
            blankLine(),
            line(t('blackbox.status.objectives'), 'accent'),
            ...challengeLines,
            ...(state.evidence.length
                ? [
                      blankLine(),
                      line(t('blackbox.status.collected'), 'accent'),
                      ...state.evidence.map((id) => [
                          { text: '  ◆ ', tone: 'evidence' as const },
                          { text: copy.evidenceLabels[id] ?? id },
                      ]),
                  ]
                : []),
        ],
    };
}

function giveHint(_args: string[], context: CommandContext): HandlerResult {
    const { state, t } = context;
    const challenge = getFocusChallenge(context.mission, state);

    if (!challenge) {
        return { output: [line(t('blackbox.hint.complete'), 'muted')] };
    }

    const challengeCopy = context.copy.challenges[challenge.id];
    const currentLevel = state.hintLevels[challenge.id] ?? 0;
    const nextLevel = Math.min(currentLevel + 1, MAX_HINT_LEVEL);
    const hint = challengeCopy?.hints[nextLevel - 1] ?? '';
    const isNewHint = nextLevel > currentLevel;

    return {
        output: [
            line(
                t('blackbox.hint.title', {
                    level: nextLevel,
                    total: MAX_HINT_LEVEL,
                    title: getChallengeTitle(context, challenge),
                }),
                'warning',
                true
            ),
            line(hint),
            ...(isNewHint ? [] : [line(t('blackbox.hint.noMore'), 'muted')]),
        ],
        state: {
            ...state,
            hintLevels: { ...state.hintLevels, [challenge.id]: nextLevel },
            hintsUsed: state.hintsUsed + (isNewHint ? 1 : 0),
        },
    };
}

function showOpenQuestions(context: CommandContext): HandlerResult {
    const questions = getOpenChallenges(context.mission, context.state).filter(
        (challenge) => challenge.answer.kind !== 'auto'
    );

    if (!questions.length) {
        return { output: [line(context.t('blackbox.submit.nothingOpen'), 'muted')] };
    }

    return {
        output: [
            line(context.t('blackbox.submit.usage'), 'muted'),
            blankLine(),
            line(context.t('blackbox.submit.openQuestions'), 'accent'),
            ...questions.map((challenge) => [
                { text: '  > ', tone: 'warning' as const },
                { text: context.copy.challenges[challenge.id]?.question ?? '' },
            ]),
        ],
    };
}

function isAnswerMatching(challenge: MissionChallenge, answer: string, context: CommandContext) {
    if (challenge.answer.kind === 'exact') {
        return matchesAcceptedAnswer(answer, challenge.answer.accepted);
    }

    if (challenge.answer.kind === 'concepts') {
        const matched = findMatchedConcepts(answer, context.mission.concepts);

        return challenge.answer.required.every((concept) => matched.includes(concept));
    }

    return false;
}

function describeConcepts(context: CommandContext, conceptIds: string[]) {
    return conceptIds.map((id) => context.copy.conceptLabels[id] ?? id).join(', ');
}

function submitAnswer(args: string[], context: CommandContext): HandlerResult {
    const { mission, state, t, now } = context;
    const answer = args.join(' ').trim();

    if (isMissionComplete(mission, state)) {
        return { output: [line(t('blackbox.submit.complete'), 'muted')] };
    }

    if (!answer) {
        return showOpenQuestions(context);
    }

    const answerable = getOpenChallenges(mission, state).filter(
        (challenge) => challenge.answer.kind !== 'auto'
    );
    const matchingChallenge = answerable.find((challenge) =>
        isAnswerMatching(challenge, answer, context)
    );

    if (matchingChallenge && !hasRequiredEvidence(state, matchingChallenge)) {
        return { output: [line(t('blackbox.submit.noEvidence'), 'warning')] };
    }

    if (matchingChallenge) {
        const matchedConcepts = findMatchedConcepts(answer, mission.concepts);
        const bonusConcepts =
            matchingChallenge.answer.kind === 'concepts'
                ? matchingChallenge.answer.bonus.filter((concept) =>
                      matchedConcepts.includes(concept)
                  )
                : [];

        return {
            output: bonusConcepts.length
                ? [
                      line(
                          t('blackbox.progress.bonus', {
                              concept: describeConcepts(context, bonusConcepts),
                          }),
                          'info'
                      ),
                  ]
                : [],
            state: {
                ...solveChallenge(state, matchingChallenge.id, now),
                bonusConcepts: [...new Set([...state.bonusConcepts, ...bonusConcepts])],
            },
        };
    }

    const conceptChallenge = answerable.find(
        (challenge) => challenge.answer.kind === 'concepts' && challenge.answer.required.length > 1
    );

    if (conceptChallenge?.answer.kind === 'concepts') {
        const matched = findMatchedConcepts(answer, mission.concepts);
        const found = conceptChallenge.answer.required.filter((concept) =>
            matched.includes(concept)
        );
        const missing = conceptChallenge.answer.required.filter(
            (concept) => !matched.includes(concept)
        );

        if (found.length) {
            return {
                output: [
                    line(
                        t('blackbox.submit.partial', {
                            found: describeConcepts(context, found),
                            missing: describeConcepts(context, missing),
                        }),
                        'warning'
                    ),
                ],
            };
        }
    }

    return { output: [line(t('blackbox.submit.incorrect'), 'error')] };
}

const COMMAND_HANDLERS: Record<CommandName, CommandHandler> = {
    help: showHelp,
    ls: listEntries,
    cd: changeDirectory,
    pwd: printWorkingDirectory,
    cat: readFiles,
    grep: searchContents,
    find: findFiles,
    jwt: inspectToken,
    status: showStatus,
    hint: giveHint,
    submit: submitAnswer,
    clear: () => ({ output: [], effects: { shouldClear: true } }),
    reset: (_args, context) => ({
        output: [line(context.t('blackbox.reset.confirm'), 'warning')],
        effects: { shouldConfirmReset: true },
    }),
    exit: (_args, context) => ({
        output: [line(context.t('blackbox.exit.message'), 'muted')],
        effects: { shouldExit: true },
    }),
};

function describeProgress(
    context: CommandContext,
    previousState: GameState,
    nextState: GameState,
    newEvidence: string[]
) {
    const { mission, copy, t } = context;
    const output: TerminalOutput = newEvidence.map((id) => [
        { text: '◆ ', tone: 'evidence' },
        {
            text: t('blackbox.progress.evidence', { label: copy.evidenceLabels[id] ?? id }),
            tone: 'evidence',
        },
    ]);
    const newlySolved = nextState.solved.filter((id) => !previousState.solved.includes(id));

    newlySolved.forEach((challengeId) => {
        const challengeCopy = copy.challenges[challengeId];

        output.push(
            blankLine(),
            [
                { text: '✓ ', tone: 'success', isBold: true },
                {
                    text: t('blackbox.progress.solved', {
                        title: challengeCopy?.title ?? challengeId,
                    }),
                    tone: 'success',
                    isBold: true,
                },
            ],
            line(challengeCopy?.success ?? '', 'default')
        );

        getUnlockedBy(mission, nextState, challengeId).forEach((unlocked) => {
            const unlockedCopy = copy.challenges[unlocked.id];

            output.push([
                { text: '→ ', tone: 'warning' },
                {
                    text: t('blackbox.progress.unlocked', {
                        title: unlockedCopy?.title ?? unlocked.id,
                    }),
                    tone: 'warning',
                },
                {
                    text: unlockedCopy?.question ? ` · ${unlockedCopy.question}` : '',
                    tone: 'muted',
                },
            ]);
        });
    });

    return output;
}

export async function runCommand(input: string, context: CommandContext): Promise<CommandResult> {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
        return { output: [], state: context.state, effects: {} };
    }

    if (trimmedInput.length > MAX_COMMAND_LENGTH) {
        return {
            output: [
                line(
                    context.t('blackbox.errors.inputTooLong', { max: MAX_COMMAND_LENGTH }),
                    'error'
                ),
            ],
            state: context.state,
            effects: {},
        };
    }

    const { name, args } = parseCommandLine(trimmedInput);
    const startedState: GameState = {
        ...context.state,
        commandsRun: context.state.commandsRun + 1,
        startedAt: context.state.startedAt ?? context.now,
    };

    if (!isCommandName(name)) {
        return {
            output: [line(context.t('blackbox.errors.notFound', { command: name }), 'error')],
            state: startedState,
            effects: {},
        };
    }

    const fileSystem = createVirtualFileSystem(context.mission.directories, context.mission.files);
    const handlerContext: CommandContext = { ...context, state: startedState };
    const result = await COMMAND_HANDLERS[name](args, handlerContext, fileSystem);
    const { state: stateWithEvidence, newEvidence } = collectEvidence(
        result.state ?? startedState,
        result.evidence ?? []
    );
    const { state: resolvedState } = resolveAutomaticChallenges(
        context.mission,
        stateWithEvidence,
        context.now
    );
    const hasCompleted =
        !isMissionComplete(context.mission, context.state) &&
        isMissionComplete(context.mission, resolvedState);
    const finalState = hasCompleted
        ? { ...resolvedState, completedAt: context.now }
        : resolvedState;

    return {
        output: [
            ...result.output,
            ...describeProgress(handlerContext, startedState, finalState, newEvidence),
        ],
        state: finalState,
        effects: { ...result.effects, hasCompleted },
    };
}
