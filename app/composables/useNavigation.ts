import type { NavigationItem } from '~/types/navigation';

const NAVIGATION_ROUTES = [
    { labelKey: 'nav.home', path: '/', includesNestedRoutes: false },
    { labelKey: 'nav.about', path: '/about', includesNestedRoutes: true },
    { labelKey: 'nav.projects', path: '/projects', includesNestedRoutes: true },
    { labelKey: 'nav.contents', path: '/contents', includesNestedRoutes: true },
    { labelKey: 'nav.contact', path: '/contact', includesNestedRoutes: true },
] as const;

export function useNavigation() {
    const { t } = useI18n();
    const localePath = useLocalePath();
    const route = useRoute();

    function isCurrentRoute(to: string, includesNestedRoutes: boolean) {
        return route.path === to || (includesNestedRoutes && route.path.startsWith(`${to}/`));
    }

    const items = computed<NavigationItem[]>(() =>
        NAVIGATION_ROUTES.map(({ labelKey, path, includesNestedRoutes }) => {
            const to = localePath(path);

            return {
                label: t(labelKey),
                to,
                isActive: isCurrentRoute(to, includesNestedRoutes),
            };
        })
    );

    return { items };
}
