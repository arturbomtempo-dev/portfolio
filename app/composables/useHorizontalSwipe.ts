interface HorizontalSwipeOptions {
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
    isEnabled?: () => boolean;
}

const SWIPE_THRESHOLD_IN_PX = 50;

export function useHorizontalSwipe({
    onSwipeLeft,
    onSwipeRight,
    isEnabled = () => true,
}: HorizontalSwipeOptions) {
    let swipeStartX: number | undefined;
    let hasJustSwiped = false;

    function startSwipe(event: PointerEvent) {
        hasJustSwiped = false;
        swipeStartX = isEnabled() && event.pointerType !== 'mouse' ? event.clientX : undefined;
    }

    function finishSwipe(event: PointerEvent) {
        if (swipeStartX === undefined) {
            return;
        }

        const distance = event.clientX - swipeStartX;

        swipeStartX = undefined;

        if (Math.abs(distance) < SWIPE_THRESHOLD_IN_PX) {
            return;
        }

        hasJustSwiped = true;

        if (distance > 0) {
            onSwipeRight();
        } else {
            onSwipeLeft();
        }
    }

    function cancelSwipe() {
        swipeStartX = undefined;
    }

    function isSwipeClick() {
        const wasSwipe = hasJustSwiped;

        hasJustSwiped = false;

        return wasSwipe;
    }

    return { startSwipe, finishSwipe, cancelSwipe, isSwipeClick };
}
