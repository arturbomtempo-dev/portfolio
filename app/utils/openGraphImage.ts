export const OPEN_GRAPH_IMAGE_WIDTH_IN_PX = 1200;
export const OPEN_GRAPH_IMAGE_HEIGHT_IN_PX = 630;

export function getLocaleOpenGraphImagePath(locale: string) {
    return `/og/${locale}.jpg`;
}

export function getProjectOpenGraphImagePath(projectId: string) {
    return `/og/projects/${projectId}.jpg`;
}

export function getTalkOpenGraphImagePath(talkId: string) {
    return `/og/talks/${talkId}.jpg`;
}
