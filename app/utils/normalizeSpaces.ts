const SPECIAL_SPACES = /[   ]/g;

export function normalizeSpaces(text: string) {
    return text.replace(SPECIAL_SPACES, ' ');
}
