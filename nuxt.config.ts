import tailwindcss from '@tailwindcss/vite';

const SITE_URL = 'https://www.arturbomtempo.dev';
const GITHUB_CONTRIBUTIONS_CACHE_IN_SECONDS = 60 * 60 * 6;

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/color-mode',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        'nuxt-security',
    ],
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            link: [
                { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'manifest', href: '/site.webmanifest' },
            ],
            meta: [
                { name: 'author', content: 'Artur Bomtempo Colen' },
                { name: 'theme-color', content: '#0d0d0d' },
            ],
        },
    },
    site: {
        url: SITE_URL,
        name: 'Artur Bomtempo',
    },
    runtimeConfig: {
        public: {
            contactFormEndpoint: 'https://formsubmit.co/ajax/arturbcolen@gmail.com',
        },
    },
    nitro: {
        compressPublicAssets: true,
        prerender: {
            crawlLinks: true,
            routes: ['/', '/en', '/es'],
            ignore: ['/_vercel'],
        },
    },
    routeRules: {
        '/api/github/contributions': {
            swr: GITHUB_CONTRIBUTIONS_CACHE_IN_SECONDS,
        },
        '/**': {
            headers: {
                'Permissions-Policy':
                    'camera=(), display-capture=(), fullscreen=(), geolocation=(), microphone=()',
                'Cross-Origin-Opener-Policy': 'same-origin',
            },
        },
        '/og/**': {
            security: {
                headers: {
                    crossOriginResourcePolicy: 'cross-origin',
                },
            },
        },
    },
    security: {
        rateLimiter: false,
        removeLoggers: false,
        sri: false,
        headers: {
            contentSecurityPolicy: {
                'base-uri': ["'none'"],
                'default-src': ["'self'"],
                'connect-src': ["'self'", 'https://formsubmit.co'],
                'font-src': ["'self'"],
                'form-action': ["'self'"],
                'frame-ancestors': ["'none'"],
                'img-src': ["'self'", 'data:'],
                'manifest-src': ["'self'"],
                'object-src': ["'none'"],
                'script-src-attr': ["'none'"],
                'script-src': ["'self'", "'nonce-{{nonce}}'"],
                'style-src': ["'self'", "'unsafe-inline'"],
                'upgrade-insecure-requests': true,
            },
            crossOriginEmbedderPolicy: 'credentialless',
            referrerPolicy: 'strict-origin-when-cross-origin',
            strictTransportSecurity: {
                maxAge: 63072000,
                includeSubdomains: true,
                preload: true,
            },
            xFrameOptions: 'DENY',
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        baseUrl: SITE_URL,
        strategy: 'prefix_except_default',
        defaultLocale: 'pt',
        detectBrowserLanguage: false,
        bundle: {
            runtimeOnly: true,
        },
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
    image: {
        format: ['avif', 'webp'],
        quality: 80,
        screens: {
            'avatar-sm': 48,
            'avatar-md': 96,
            'avatar-lg': 160,
            'lightbox-thumb': 192,
            'mosaic-tile': 208,
            'talk-thumb': 288,
            xs: 320,
            card: 384,
            'mosaic-half': 416,
            'talk-thumb-2x': 576,
            sm: 640,
            md: 768,
            'mosaic-full': 832,
            cover: 896,
            lg: 1024,
            xl: 1280,
            '2xl': 1536,
            'mosaic-full-2x': 1664,
            'cover-2x': 1920,
        },
    },
    fonts: {
        families: [
            {
                name: 'Inter',
                provider: 'google',
                weights: [400, 500, 600],
                styles: ['normal'],
                subsets: ['latin'],
            },
            {
                name: 'JetBrains Mono',
                provider: 'google',
                weights: [400, 500, 700],
                styles: ['normal'],
                subsets: ['latin'],
            },
            {
                name: 'Geist',
                provider: 'google',
                weights: [400, 500, 600, 700],
                styles: ['normal'],
                subsets: ['latin'],
                preload: true,
            },
        ],
    },
});
