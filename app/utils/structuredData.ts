interface PersonStructuredDataInput {
    siteUrl: string;
    siteName: string;
    name: string;
    jobTitle: string;
    description: string;
    imagePath: string;
    languageTag: string;
    profileUrls: string[];
}

export function createPersonStructuredData({
    siteUrl,
    siteName,
    name,
    jobTitle,
    description,
    imagePath,
    languageTag,
    profileUrls,
}: PersonStructuredDataInput) {
    const personId = `${siteUrl}/#person`;

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': personId,
                name,
                jobTitle,
                description,
                url: siteUrl,
                image: `${siteUrl}${imagePath}`,
                sameAs: profileUrls,
            },
            {
                '@type': 'WebSite',
                '@id': `${siteUrl}/#website`,
                name: siteName,
                url: siteUrl,
                inLanguage: languageTag,
                author: { '@id': personId },
            },
        ],
    };
}
