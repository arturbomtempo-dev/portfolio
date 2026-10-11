import type { RouteLocationNormalizedLoaded } from 'vue-router';

export function useLocaleAgnosticRouteKey() {
    const getRouteBaseName = useRouteBaseName();

    return (route: RouteLocationNormalizedLoaded) =>
        `${String(getRouteBaseName(route) ?? route.path)}:${JSON.stringify(route.params)}`;
}
