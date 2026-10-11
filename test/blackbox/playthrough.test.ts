import { describe, expect, it } from 'vitest';
import { BLACKBOX_COPY_EN } from '~/data/blackbox/en';
import { BLACKBOX_COPY_ES } from '~/data/blackbox/es';
import { BLACKBOX_MISSION } from '~/data/blackbox/mission';
import { BLACKBOX_COPY_PT } from '~/data/blackbox/pt';
import type { CommandResult, GameState, MissionCopy } from '~/types/blackbox';
import { runCommand } from '~/utils/blackboxCommands';
import { createInitialGameState, isMissionComplete } from '~/utils/missionProgress';

function translate(key: string, named?: Record<string, unknown>) {
    return named ? `${key} ${JSON.stringify(named)}` : key;
}

function outputText(result: CommandResult) {
    return result.output.map((line) => line.map((segment) => segment.text).join('')).join('\n');
}

function createSession() {
    let state: GameState = createInitialGameState(BLACKBOX_MISSION);
    let now = 1_000;

    return {
        get state() {
            return state;
        },
        async run(input: string) {
            now += 5_000;
            const result = await runCommand(input, {
                state,
                mission: BLACKBOX_MISSION,
                copy: BLACKBOX_COPY_EN,
                t: translate,
                now,
            });

            state = result.state;

            return result;
        },
    };
}

describe('investigation playthrough', () => {
    it('can be completed from start to finish', async () => {
        const session = createSession();

        await session.run('cat README.txt');
        expect(session.state.solved).toEqual([]);

        const recon = await session.run('cat /incident/report.txt');
        expect(session.state.solved).toContain('recon');
        expect(outputText(recon)).toContain('blackbox.progress.solved');

        await session.run('grep export /services/gateway/access.log');
        expect(session.state.evidence).toContain('accessLog');
        await session.run('submit r-5c19e2');
        expect(session.state.solved).toContain('requestTrace');

        await session.run('cat /deploy/deployment.log');
        await session.run('submit 03:05:12');
        expect(session.state.solved).toContain('deployWindow');

        await session.run('jwt decode /incident/evidence/token.jwt');
        await session.run('grep 7f3c91 /services/auth/issued.log');
        const verification = await session.run('jwt verify /incident/evidence/token.jwt');
        expect(outputText(verification)).toContain('blackbox.jwt.invalidSignature');
        await session.run('submit the role claim was changed');
        expect(session.state.solved).toContain('tokenForgery');

        await session.run('cat /services/gateway/config.yaml');
        const conclusion = await session.run(
            'submit the debug profile disabled signature verification and trusted token claims; re-enable verify_signature'
        );

        expect(conclusion.effects.hasCompleted).toBe(true);
        expect(isMissionComplete(BLACKBOX_MISSION, session.state)).toBe(true);
        expect(session.state.completedAt).toBeDefined();
        expect(session.state.bonusConcepts).toContain('claimAuthorization');
    });

    it('does not accept a correct answer without the supporting evidence', async () => {
        const session = createSession();

        await session.run('cat /incident/report.txt');
        const result = await session.run('submit r-5c19e2');

        expect(outputText(result)).toContain('blackbox.submit.noEvidence');
        expect(session.state.solved).not.toContain('requestTrace');
    });

    it('does not accept answers for locked objectives', async () => {
        const session = createSession();

        const result = await session.run('submit r-5c19e2');

        expect(outputText(result)).toContain('blackbox.submit.incorrect');
        expect(session.state.solved).toEqual([]);
    });

    it('explains which concept is missing in a partial conclusion', async () => {
        const session = createSession();
        const commands = [
            'cat /incident/report.txt',
            'cat /services/gateway/access.log',
            'submit r-5c19e2',
            'cat /deploy/deployment.log',
            'submit v3.8.0',
            'jwt decode /incident/evidence/token.jwt',
            'jwt verify /incident/evidence/token.jwt',
            'cat /services/auth/issued.log',
            'submit role',
            'cat /services/gateway/config.yaml',
        ];

        for (const command of commands) {
            await session.run(command);
        }

        const result = await session.run('submit it was the debug profile');

        expect(outputText(result)).toContain('blackbox.submit.partial');
        expect(session.state.solved).not.toContain('rootCause');
    });

    it('gives progressive hints for the current objective', async () => {
        const session = createSession();

        const first = await session.run('hint');
        await session.run('hint');
        await session.run('hint');
        const fourth = await session.run('hint');

        expect(outputText(first)).toContain(BLACKBOX_COPY_EN.challenges.recon!.hints[0]);
        expect(outputText(fourth)).toContain('blackbox.hint.noMore');
        expect(session.state.hintsUsed).toBe(3);
    });

    it('handles invalid input without changing progress', async () => {
        const session = createSession();

        expect(outputText(await session.run('rm -rf /'))).toContain('blackbox.errors.notFound');
        expect(outputText(await session.run('cat /etc/passwd'))).toContain(
            'blackbox.errors.noSuchPath'
        );
        expect(outputText(await session.run('cd /incident/report.txt'))).toContain(
            'blackbox.errors.notDirectory'
        );
        expect(outputText(await session.run('cat /incident'))).toContain(
            'blackbox.errors.isDirectory'
        );
        expect(outputText(await session.run('ls -z'))).toContain('blackbox.errors.unknownOption');
        expect(outputText(await session.run('<img src=x onerror=alert(1)>'))).toContain(
            'blackbox.errors.notFound'
        );
        expect(outputText(await session.run('x'.repeat(301)))).toContain(
            'blackbox.errors.inputTooLong'
        );
        expect(session.state.solved).toEqual([]);
    });

    it('keeps progress when the screen is cleared', async () => {
        const session = createSession();

        await session.run('cat /incident/report.txt');
        const result = await session.run('clear');

        expect(result.effects.shouldClear).toBe(true);
        expect(session.state.solved).toContain('recon');
    });
});

describe('mission content', () => {
    const copies: Record<string, MissionCopy> = {
        pt: BLACKBOX_COPY_PT,
        en: BLACKBOX_COPY_EN,
        es: BLACKBOX_COPY_ES,
    };

    it.each(Object.entries(copies))('has complete %s copy for every challenge', (_, copy) => {
        BLACKBOX_MISSION.challenges.forEach((challenge) => {
            const challengeCopy = copy.challenges[challenge.id];

            expect(challengeCopy).toBeDefined();
            expect(challengeCopy?.hints).toHaveLength(3);
            expect(challengeCopy?.skills.length).toBeGreaterThan(0);

            if (challenge.answer.kind !== 'auto') {
                expect(challengeCopy?.question).toBeTruthy();
            }
        });
    });

    it.each(Object.entries(copies))('labels every evidence in %s', (_, copy) => {
        const evidenceIds = [
            ...BLACKBOX_MISSION.files.flatMap((file) => (file.evidence ? [file.evidence] : [])),
            BLACKBOX_MISSION.jwt.evidenceOnDecode,
            BLACKBOX_MISSION.jwt.evidenceOnVerify,
        ];

        expect(Object.keys(copy.evidenceLabels).sort()).toEqual([...new Set(evidenceIds)].sort());
    });

    it.each(Object.entries(copies))('provides every localized document in %s', (_, copy) => {
        const emptyFiles = BLACKBOX_MISSION.files
            .filter((file) => !file.content)
            .map((file) => file.path);

        expect(Object.keys(copy.documents).sort()).toEqual(emptyFiles.sort());
    });
});
