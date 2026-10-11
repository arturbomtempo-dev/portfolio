import { describe, expect, it } from 'vitest';
import { BLACKBOX_MISSION } from '~/data/blackbox/mission';
import {
    findMatchedConcepts,
    isAffirmativeAnswer,
    matchesAcceptedAnswer,
    normalizeAnswer,
} from '~/utils/answerValidation';
import { parseCommandLine } from '~/utils/commandParser';
import { completeCommandLine, formatPromptPath } from '~/utils/commandCompletion';
import { decodeJwt, verifyHs256 } from '~/utils/jwtInspector';
import { createInitialGameState, restoreGameState } from '~/utils/missionProgress';
import {
    createVirtualFileSystem,
    findPaths,
    listDirectory,
    resolvePath,
} from '~/utils/virtualFileSystem';

const HOME = BLACKBOX_MISSION.homeDirectory;
const ORIGINAL_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImhhbC0yMDI2LTAxIn0.eyJzdWIiOiJndWVzdC03NzgxIiwicm9sZSI6InZpZXdlciIsImp0aSI6IjdmM2M5MSIsImlzcyI6ImhhbGN5b24tYXV0aCIsImlhdCI6MTc3MzQ1OTUyNCwiZXhwIjoxNzczNDYzMTI0fQ.4UlWSGiZITfpxpvIC9w0csXGmkkzHR3abggfobZwieA';

function getMissionToken() {
    return BLACKBOX_MISSION.files.find((file) => file.path === BLACKBOX_MISSION.jwt.path)!.content;
}

describe('virtual file system', () => {
    const fileSystem = createVirtualFileSystem(
        BLACKBOX_MISSION.directories,
        BLACKBOX_MISSION.files
    );

    it('resolves relative, absolute and home paths', () => {
        expect(resolvePath('', '/incident', HOME)).toBe(HOME);
        expect(resolvePath('~', '/incident', HOME)).toBe(HOME);
        expect(resolvePath('~/notes.txt', '/', HOME)).toBe(`${HOME}/notes.txt`);
        expect(resolvePath('evidence', '/incident', HOME)).toBe('/incident/evidence');
        expect(resolvePath('../deploy/./deployment.log', '/incident', HOME)).toBe(
            '/deploy/deployment.log'
        );
    });

    it('never resolves above the root', () => {
        expect(resolvePath('../../../../etc/passwd', '/incident', HOME)).toBe('/etc/passwd');
        expect(fileSystem.files.has('/etc/passwd')).toBe(false);
    });

    it('hides dotfiles unless requested', () => {
        const visible = listDirectory(fileSystem, HOME, false).map((entry) => entry.name);
        const all = listDirectory(fileSystem, HOME, true).map((entry) => entry.name);

        expect(visible).not.toContain('.bash_history');
        expect(all).toContain('.bash_history');
    });

    it('finds files by glob pattern', () => {
        expect(findPaths(fileSystem, '/', '*.yaml')).toEqual([
            '/archive/gateway-config-v3.7.2.yaml',
            '/services/gateway/config.yaml',
        ]);
    });
});

describe('jwt inspector', () => {
    it('decodes the tampered token without validating it', () => {
        const decoded = decodeJwt(getMissionToken());

        expect(decoded?.payload.role).toBe('admin');
        expect(decoded?.header.kid).toBe(BLACKBOX_MISSION.jwt.keyId);
    });

    it('rejects the tampered signature and accepts the original token', async () => {
        const tampered = decodeJwt(getMissionToken())!;
        const original = decodeJwt(ORIGINAL_TOKEN)!;

        expect(await verifyHs256(tampered, BLACKBOX_MISSION.jwt.signingKey)).toBe(false);
        expect(await verifyHs256(original, BLACKBOX_MISSION.jwt.signingKey)).toBe(true);
    });

    it('returns undefined for malformed tokens', () => {
        expect(decodeJwt('not.a.token')).toBeUndefined();
        expect(decodeJwt('abc')).toBeUndefined();
    });
});

describe('answer validation', () => {
    it('normalizes case, accents, quotes and punctuation', () => {
        expect(normalizeAnswer('  "R-5C19E2."  ')).toBe('r-5c19e2');
        expect(normalizeAnswer('Configuração')).toBe('configuracao');
        expect(matchesAcceptedAnswer('v3.8.0', ['3.8.0', 'v3.8.0'])).toBe(true);
    });

    it('recognizes concepts in the three languages', () => {
        const concepts = BLACKBOX_MISSION.concepts;

        expect(
            findMatchedConcepts('o perfil debug desligou a verificação de assinatura', concepts)
        ).toEqual(expect.arrayContaining(['signatureCheck', 'debugProfile']));
        expect(
            findMatchedConcepts('the debug profile disabled signature checks', concepts)
        ).toEqual(expect.arrayContaining(['signatureCheck', 'debugProfile']));
        expect(findMatchedConcepts('el perfil debug desactivó la firma', concepts)).toEqual(
            expect.arrayContaining(['signatureCheck', 'debugProfile'])
        );
        expect(findMatchedConcepts('roles everywhere', concepts)).not.toContain('roleClaim');
    });

    it('accepts confirmations in the three languages', () => {
        expect(['sim', 'yes', 'si', 'S', 'y'].every(isAffirmativeAnswer)).toBe(true);
        expect(isAffirmativeAnswer('no')).toBe(false);
    });
});

describe('command line helpers', () => {
    it('parses quoted arguments', () => {
        expect(parseCommandLine('find / -name "*.yaml"')).toEqual({
            name: 'find',
            args: ['/', '-name', '*.yaml'],
        });
        expect(parseCommandLine('SUBMIT  the role claim ')).toEqual({
            name: 'submit',
            args: ['the', 'role', 'claim'],
        });
    });

    it('completes commands and paths', () => {
        const commands = ['help', 'hint', 'cat'];

        expect(completeCommandLine('ca', HOME, BLACKBOX_MISSION, commands)).toBe('cat ');
        expect(completeCommandLine('h', HOME, BLACKBOX_MISSION, commands)).toBe('h');
        expect(completeCommandLine('cat /incident/re', HOME, BLACKBOX_MISSION, commands)).toBe(
            'cat /incident/report.txt'
        );
    });

    it('shows the home directory as ~ in the prompt', () => {
        expect(formatPromptPath(HOME, HOME)).toBe('~');
        expect(formatPromptPath('/incident', HOME)).toBe('/incident');
    });
});

describe('progress restoration', () => {
    it('restores a valid saved state', () => {
        const state = {
            ...createInitialGameState(BLACKBOX_MISSION),
            solved: ['recon'],
            evidence: ['report'],
        };

        expect(restoreGameState(JSON.parse(JSON.stringify(state)), BLACKBOX_MISSION)).toEqual(
            state
        );
    });

    it('rejects corrupted or impossible states', () => {
        const initial = createInitialGameState(BLACKBOX_MISSION);

        expect(restoreGameState(null, BLACKBOX_MISSION)).toBeUndefined();
        expect(restoreGameState({ ...initial, version: 99 }, BLACKBOX_MISSION)).toBeUndefined();
        expect(restoreGameState({ ...initial, evidence: 'all' }, BLACKBOX_MISSION)).toBeUndefined();
        expect(
            restoreGameState({ ...initial, solved: ['rootCause'] }, BLACKBOX_MISSION)
        ).toBeUndefined();
    });
});
