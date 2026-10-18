import { describe, expect, it } from 'vitest';
import { createPersonStructuredData } from '~/utils/structuredData';

const structuredData = createPersonStructuredData({
    siteUrl: 'https://www.arturbomtempo.dev',
    siteName: 'Artur Bomtempo',
    name: 'Artur Bomtempo',
    jobTitle: 'Software Engineer',
    description: 'Software Engineer portfolio.',
    imagePath: '/images/profile/artur-bomtempo.webp',
    languageTag: 'en-US',
    profileUrls: ['https://github.com/arturbomtempo-dev'],
});

describe('createPersonStructuredData', () => {
    it('describes the owner as a schema.org Person with absolute URLs', () => {
        expect(structuredData['@graph'][0]).toMatchObject({
            '@type': 'Person',
            '@id': 'https://www.arturbomtempo.dev/#person',
            jobTitle: 'Software Engineer',
            image: 'https://www.arturbomtempo.dev/images/profile/artur-bomtempo.webp',
            sameAs: ['https://github.com/arturbomtempo-dev'],
        });
    });

    it('links the WebSite to the Person as its author', () => {
        expect(structuredData['@graph'][1]).toMatchObject({
            '@type': 'WebSite',
            inLanguage: 'en-US',
            author: { '@id': 'https://www.arturbomtempo.dev/#person' },
        });
    });
});
