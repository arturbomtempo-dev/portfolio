import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { defineNuxtModule } from '@nuxt/kit';

const VERCEL_PRESET_NAME = 'vercel';

interface VercelRoute {
    src?: string;
    dest?: string;
    status?: number;
    handle?: string;
    headers?: Record<string, string>;
    continue?: boolean;
}

interface VercelBuildOutputConfig {
    routes?: VercelRoute[];
}

function isHeaderOnlyRoute(route: VercelRoute) {
    return Boolean(route.headers) && !route.dest && !route.status && !route.handle;
}

async function markHeaderRoutesAsContinue(configPath: string) {
    const config: VercelBuildOutputConfig = JSON.parse(await readFile(configPath, 'utf8'));

    config.routes = config.routes?.map((route) =>
        isHeaderOnlyRoute(route) ? { ...route, continue: true } : route
    );

    await writeFile(configPath, JSON.stringify(config, null, 2));
}

export default defineNuxtModule({
    meta: {
        name: 'vercel-header-routes-continue',
    },
    setup(_options, nuxt) {
        nuxt.hook('nitro:init', (nitro) => {
            if (nitro.options.preset !== VERCEL_PRESET_NAME) {
                return;
            }

            nitro.hooks.hook('compiled', () =>
                markHeaderRoutesAsContinue(join(nitro.options.output.dir, 'config.json'))
            );
        });
    },
});
