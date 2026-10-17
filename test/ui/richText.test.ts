import { describe, expect, it } from 'vitest';
import { parseRichText } from '~/utils/richText';

describe('parseRichText', () => {
    it('splits paragraphs on blank lines', () => {
        expect(parseRichText('First paragraph.\n\nSecond paragraph.')).toEqual([
            [{ type: 'paragraph', text: 'First paragraph.' }],
            [{ type: 'paragraph', text: 'Second paragraph.' }],
        ]);
    });

    it('turns lines starting with a dash into a list after its introduction', () => {
        expect(parseRichText('Main topics:\n- Routing\n- State management')).toEqual([
            [
                { type: 'paragraph', text: 'Main topics:' },
                { type: 'list', items: ['Routing', 'State management'] },
            ],
        ]);
    });

    it('keeps hyphens inside sentences and words as text', () => {
        expect(parseRichText('A full-stack app - built in 2024.')).toEqual([
            [{ type: 'paragraph', text: 'A full-stack app - built in 2024.' }],
        ]);
    });

    it('keeps single line breaks inside a paragraph and ignores empty text', () => {
        expect(parseRichText('Line one\nLine two')).toEqual([
            [{ type: 'paragraph', text: 'Line one\nLine two' }],
        ]);
        expect(parseRichText('  \n\n ')).toEqual([]);
    });

    it('parses a full description with a closing paragraph', () => {
        const sections = parseRichText('Intro.\n\nFeatures:\n- One\n- Two\n\nClosing.');

        expect(sections).toHaveLength(3);
        expect(sections[1]).toEqual([
            { type: 'paragraph', text: 'Features:' },
            { type: 'list', items: ['One', 'Two'] },
        ]);
    });
});
