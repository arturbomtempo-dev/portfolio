export type RichTextBlock = { type: 'paragraph'; text: string } | { type: 'list'; items: string[] };

export type RichTextSection = RichTextBlock[];

const SECTION_SEPARATOR = /\n\s*\n/;
const LIST_ITEM_PREFIX = /^\s*-\s+/;

function isListItem(line: string) {
    return LIST_ITEM_PREFIX.test(line);
}

function parseSection(section: string): RichTextSection {
    const blocks: RichTextSection = [];

    for (const line of section.split('\n')) {
        const lastBlock = blocks.at(-1);

        if (isListItem(line)) {
            const item = line.replace(LIST_ITEM_PREFIX, '').trim();

            if (lastBlock?.type === 'list') {
                lastBlock.items.push(item);
            } else {
                blocks.push({ type: 'list', items: [item] });
            }
        } else if (line.trim()) {
            if (lastBlock?.type === 'paragraph') {
                lastBlock.text = `${lastBlock.text}\n${line.trim()}`;
            } else {
                blocks.push({ type: 'paragraph', text: line.trim() });
            }
        }
    }

    return blocks;
}

export function parseRichText(text: string): RichTextSection[] {
    return text
        .split(SECTION_SEPARATOR)
        .map(parseSection)
        .filter((section) => section.length > 0);
}
