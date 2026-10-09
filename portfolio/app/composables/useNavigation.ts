import type { NavigationItem } from '~/types/navigation';

const NAVIGATION_ROUTES = [
    { labelKey: 'nav.home', path: '/' },
    { labelKey: 'nav.about', path: '/about' },
    { labelKey: 'nav.projects', path: '/projects' },
    { labelKey: 'nav.contents', path: '/contents' },
    { labelKey: 'nav.contact', path: '/contact' },
] as const;

export function useNavigation() {
    const { t } = useI18n();
    const localePath = useLocalePath();

    const items = computed<NavigationItem[]>(() =>
        NAVIGATION_ROUTES.map(({ labelKey, path }) => ({
            label: t(labelKey),
            to: localePath(path),
        }))
    );

    return { items };
}
