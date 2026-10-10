export type ContentType = 'video' | 'article' | 'newsletter';

export type ContentFilter = 'all' | ContentType;

export interface ContentItem {
    type: ContentType;
    title: string;
    description: string;
    thumbnail: string;
    url: string;
    platform: string;
    date: string;
}
