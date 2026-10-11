import type { GameState, MissionChallenge, MissionDefinition } from '~/types/blackbox';

export const GAME_STATE_VERSION = 1;

export function createInitialGameState(mission: MissionDefinition): GameState {
    return {
        version: GAME_STATE_VERSION,
        cwd: mission.homeDirectory,
        evidence: [],
        solved: [],
        hintLevels: {},
        hintsUsed: 0,
        commandsRun: 0,
        bonusConcepts: [],
    };
}

export function isChallengeUnlocked(state: GameState, challenge: MissionChallenge) {
    return challenge.dependencies.every((dependency) => state.solved.includes(dependency));
}

export function hasRequiredEvidence(state: GameState, challenge: MissionChallenge) {
    return challenge.requiredEvidence.every((evidence) => state.evidence.includes(evidence));
}

export function getOpenChallenges(mission: MissionDefinition, state: GameState) {
    return mission.challenges.filter(
        (challenge) => !state.solved.includes(challenge.id) && isChallengeUnlocked(state, challenge)
    );
}

export function getFocusChallenge(mission: MissionDefinition, state: GameState) {
    return getOpenChallenges(mission, state)[0];
}

export function isMissionComplete(mission: MissionDefinition, state: GameState) {
    return mission.challenges.every((challenge) => state.solved.includes(challenge.id));
}

export function collectEvidence(state: GameState, evidenceIds: string[]) {
    const newEvidence = [...new Set(evidenceIds)].filter((id) => !state.evidence.includes(id));

    return {
        state: newEvidence.length
            ? { ...state, evidence: [...state.evidence, ...newEvidence] }
            : state,
        newEvidence,
    };
}

export function solveChallenge(state: GameState, challengeId: string, now: number) {
    return { ...state, solved: [...state.solved, challengeId], startedAt: state.startedAt ?? now };
}

export function getUnlockedBy(mission: MissionDefinition, state: GameState, challengeId: string) {
    return mission.challenges.filter(
        (challenge) =>
            challenge.dependencies.includes(challengeId) &&
            !state.solved.includes(challenge.id) &&
            isChallengeUnlocked(state, challenge)
    );
}

export function resolveAutomaticChallenges(
    mission: MissionDefinition,
    state: GameState,
    now: number
) {
    let currentState = state;
    const solvedIds: string[] = [];
    let hasProgress = true;

    while (hasProgress) {
        const nextChallenge = getOpenChallenges(mission, currentState).find(
            (challenge) =>
                challenge.answer.kind === 'auto' && hasRequiredEvidence(currentState, challenge)
        );

        hasProgress = Boolean(nextChallenge);

        if (nextChallenge) {
            currentState = solveChallenge(currentState, nextChallenge.id, now);
            solvedIds.push(nextChallenge.id);
        }
    }

    return { state: currentState, solvedIds };
}

function isStringArray(value: unknown): value is string[] {
    return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function isOptionalNumber(value: unknown) {
    return value === undefined || typeof value === 'number';
}

export function restoreGameState(raw: unknown, mission: MissionDefinition): GameState | undefined {
    if (typeof raw !== 'object' || raw === null) {
        return undefined;
    }

    const candidate = raw as Partial<GameState>;
    const challengeIds = mission.challenges.map((challenge) => challenge.id);
    const isValid =
        candidate.version === GAME_STATE_VERSION &&
        typeof candidate.cwd === 'string' &&
        isStringArray(candidate.evidence) &&
        isStringArray(candidate.solved) &&
        isStringArray(candidate.bonusConcepts) &&
        typeof candidate.hintLevels === 'object' &&
        candidate.hintLevels !== null &&
        typeof candidate.hintsUsed === 'number' &&
        typeof candidate.commandsRun === 'number' &&
        isOptionalNumber(candidate.startedAt) &&
        isOptionalNumber(candidate.completedAt);

    if (!isValid) {
        return undefined;
    }

    const validState = candidate as GameState;
    const solved = validState.solved.filter((id) => challengeIds.includes(id));
    const isDependencyChainValid = solved.every((id) => {
        const challenge = mission.challenges.find((item) => item.id === id);

        return challenge?.dependencies.every((dependency) => solved.includes(dependency));
    });

    return isDependencyChainValid ? { ...validState, solved } : undefined;
}
