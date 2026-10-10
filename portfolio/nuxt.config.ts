import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@nuxtjs/i18n', '@nuxtjs/color-mode', '@nuxt/fonts'],
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
                { rel: 'apple-touch-icon', href: '/favicon.png' },
            ],
            meta: [{ name: 'author', content: 'Artur Bomtempo Colen' }],
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        baseUrl: 'https://www.arturbomtempo.dev',
        strategy: 'prefix_except_default',
        defaultLocale: 'pt',
        detectBrowserLanguage: false,
        locales: [
            { code: 'pt', language: 'pt-BR', name: 'Português', file: 'pt.json' },
            { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
            { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
        ],
    },
    colorMode: {
        preference: 'system',
        fallback: 'dark',
        classSuffix: '',
        storageKey: 'theme',
    },
    fonts: {
        families: [
            { name: 'Inter', provider: 'google', weights: [400, 500, 600], styles: ['normal'] },
            {
                name: 'Geist',
                provider: 'google',
                weights: [400, 500, 600, 700],
                styles: ['normal'],
            },
        ],
    },
});
