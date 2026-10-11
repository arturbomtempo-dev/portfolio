import { addVitePlugin, defineNuxtModule } from '@nuxt/kit';

const COMPONENTS_ALIAS = '#components';

function isDependencyScan(resolveOptions: object) {
    return 'scan' in resolveOptions && resolveOptions.scan === true;
}

export default defineNuxtModule({
    meta: {
        name: 'components-alias-dep-scan',
    },
    setup() {
        addVitePlugin({
            name: 'components-alias-dep-scan',
            enforce: 'pre',
            resolveId(id, _importer, resolveOptions) {
                if (id === COMPONENTS_ALIAS && isDependencyScan(resolveOptions)) {
                    return { id, external: true };
                }
            },
        });
    },
});
