const NUXT_IMAGE_ERROR_HANDLER =
    / onerror="this\.setAttribute\((?:&#39;|')data-error(?:&#39;|'), 1\)"/g;

function stripImageErrorHandlers(chunk: string) {
    return chunk.replace(NUXT_IMAGE_ERROR_HANDLER, '');
}

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html) => {
        html.body = html.body.map(stripImageErrorHandlers);
    });
});
