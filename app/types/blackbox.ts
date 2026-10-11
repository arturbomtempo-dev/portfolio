export type TerminalTone =
    | 'default'
    | 'muted'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'accent'
    | 'command'
    | 'path'
    | 'directory'
    | 'evidence';

export interface TerminalSegment {
    text: string;
    tone?: TerminalTone;
    isBold?: boolean;
}

export interface TerminalLine {
    id: number;
    segments: TerminalSegment[];
    isCommand?: boolean;
}

export type TerminalOutput = TerminalSegment[][];

export type DifficultyLevel = 1 | 2 | 3;

export type AnswerRule =
    | { kind: 'auto' }
    | { kind: 'exact'; accepted: string[] }
    | { kind: 'concepts'; required: string[]; bonus: string[] };

export interface ConceptDefinition {
    id: string;
    keywords: string[];
}

export interface MissionFile {
    path: string;
    content: string;
    evidence?: string;
    isHidden?: boolean;
}

export interface MissionChallenge {
    id: string;
    dependencies: string[];
    requiredEvidence: string[];
    answer: AnswerRule;
    difficulty: DifficultyLevel;
}

export interface JwtFixture {
    path: string;
    evidenceOnDecode: string;
    evidenceOnVerify: string;
    signingKey: string;
    keyId: string;
}

export interface MissionDefinition {
    id: string;
    incidentId: string;
    hostname: string;
    username: string;
    homeDirectory: string;
    directories: string[];
    files: MissionFile[];
    challenges: MissionChallenge[];
    concepts: ConceptDefinition[];
    grepEvidence: { path: string; evidence: string; requiredMatch: string }[];
    jwt: JwtFixture;
}

export interface ChallengeCopy {
    title: string;
    objective: string;
    question?: string;
    success: string;
    hints: [string, string, string];
    skills: string[];
}

export interface MissionCopy {
    title: string;
    subtitle: string;
    bootLines: TerminalOutput;
    introLines: TerminalOutput;
    documents: Record<string, string>;
    evidenceLabels: Record<string, string>;
    challenges: Record<string, ChallengeCopy>;
    conceptLabels: Record<string, string>;
    report: {
        summary: string;
        cause: string;
        fix: string;
    };
}

export interface GameState {
    version: number;
    cwd: string;
    evidence: string[];
    solved: string[];
    hintLevels: Record<string, number>;
    hintsUsed: number;
    commandsRun: number;
    bonusConcepts: string[];
    startedAt?: number;
    completedAt?: number;
}

export type PendingConfirmation = 'reset' | undefined;

export interface CommandEffects {
    shouldClear?: boolean;
    shouldExit?: boolean;
    shouldConfirmReset?: boolean;
    hasCompleted?: boolean;
}

export interface CommandResult {
    output: TerminalOutput;
    state: GameState;
    effects: CommandEffects;
}

export type Translate = (key: string, named?: Record<string, unknown>) => string;

export interface CommandContext {
    state: GameState;
    mission: MissionDefinition;
    copy: MissionCopy;
    t: Translate;
    now: number;
}
