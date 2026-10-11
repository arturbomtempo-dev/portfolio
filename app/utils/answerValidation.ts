import type { ConceptDefinition } from '~/types/blackbox';

const AFFIRMATIVE_ANSWERS = ['y', 'yes', 's', 'sim', 'si'];

export function normalizeAnswer(answer: string) {
    return answer
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/^["'`]+|["'`.,;!?]+$/g, '')
        .trim();
}

export function matchesAcceptedAnswer(answer: string, acceptedAnswers: string[]) {
    const normalizedAnswer = normalizeAnswer(answer);

    return acceptedAnswers.some((accepted) => normalizeAnswer(accepted) === normalizedAnswer);
}

function escapeRegExp(text: string) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function containsKeyword(normalizedAnswer: string, keyword: string) {
    const pattern = new RegExp(
        `(^|[^a-z0-9_])${escapeRegExp(normalizeAnswer(keyword))}($|[^a-z0-9_])`
    );

    return pattern.test(normalizedAnswer);
}

export function findMatchedConcepts(answer: string, concepts: ConceptDefinition[]) {
    const normalizedAnswer = normalizeAnswer(answer);

    return concepts
        .filter((concept) =>
            concept.keywords.some((keyword) => containsKeyword(normalizedAnswer, keyword))
        )
        .map((concept) => concept.id);
}

export function isAffirmativeAnswer(answer: string) {
    return AFFIRMATIVE_ANSWERS.includes(normalizeAnswer(answer));
}
