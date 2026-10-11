interface CurtainOrigin {
    x: number;
    y: number;
}

export function useBlackboxEntry() {
    const origin = useState<CurtainOrigin | undefined>('blackbox-entry-origin', () => undefined);
    const localePath = useLocalePath();

    async function openBlackbox() {
        await navigateTo(localePath('/blackbox'));
        origin.value = undefined;
    }

    function enter(x: number, y: number) {
        if (prefersReducedMotion()) {
            openBlackbox();
            return;
        }

        origin.value = { x, y };
    }

    return { origin, enter, openBlackbox };
}
