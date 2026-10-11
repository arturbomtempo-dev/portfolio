const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export function prefersReducedMotion() {
    return import.meta.client && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}
