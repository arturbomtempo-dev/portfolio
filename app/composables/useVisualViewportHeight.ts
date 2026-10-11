export function useVisualViewportHeight() {
    const height = ref<number>();

    function updateHeight() {
        height.value = window.visualViewport?.height;
    }

    onMounted(() => {
        updateHeight();
        window.visualViewport?.addEventListener('resize', updateHeight);
    });

    onBeforeUnmount(() => {
        window.visualViewport?.removeEventListener('resize', updateHeight);
    });

    return height;
}
