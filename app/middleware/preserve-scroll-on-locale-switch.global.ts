export default defineNuxtRouteMiddleware((to, from) => {
    const getRouteKey = useLocaleAgnosticRouteKey();

    if (getRouteKey(to) === getRouteKey(from)) {
        to.meta.scrollToTop = false;
    }
});
