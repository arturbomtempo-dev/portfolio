<script setup lang="ts">
import {
    advanceCodeLine,
    createCodeLines,
    getCenterFade,
    getPointerInfluence,
    type CodeLine,
    type CodeRainBounds,
} from '~/utils/codeRain';

interface PointerPosition {
    x: number;
    y: number;
}

interface CodeRainColors {
    text: string;
    accent: string;
}

const MAX_DEVICE_PIXEL_RATIO = 2;
const FRAME_INTERVAL_IN_MS = 1000 / 40;
const MAX_ELAPSED_SECONDS = 0.1;
const POINTER_RADIUS_IN_PX = 190;
const POINTER_PUSH_IN_PX = 34;
const POINTER_HIGHLIGHT = 0.5;
const SPOTLIGHT_RADIUS_IN_PX = 260;
const SPOTLIGHT_OPACITY = 0.07;
const CODE_FONT_FAMILY = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";

const colorMode = useColorMode();
const canvas = useTemplateRef('canvas');

let context: CanvasRenderingContext2D | null = null;
let lines: CodeLine[] = [];
let bounds: CodeRainBounds = { width: 0, height: 0 };
let colors: CodeRainColors = { text: '', accent: '' };
let pointer: PointerPosition | null = null;
let animationFrame = 0;
let lastFrameTime = 0;
let isVisible = true;
let isReducedMotion = false;
let resizeObserver: ResizeObserver | null = null;
let intersectionObserver: IntersectionObserver | null = null;
const textWidthCache = new Map<string, number>();

function readColors(): CodeRainColors {
    const styles = getComputedStyle(document.documentElement);

    return {
        text: styles.getPropertyValue('--foreground').trim(),
        accent: styles.getPropertyValue('--primary').trim(),
    };
}

function measureText(line: CodeLine) {
    const key = `${line.fontSize}:${line.text}`;
    const cached = textWidthCache.get(key);

    if (cached !== undefined) {
        return cached;
    }

    const width = context?.measureText(line.text).width ?? 0;

    textWidthCache.set(key, width);

    return width;
}

function getPointerOffset(line: CodeLine, centerX: number) {
    if (!pointer) {
        return { influence: 0, offsetX: 0 };
    }

    const influence = getPointerInfluence(
        Math.hypot(centerX - pointer.x, line.y - pointer.y),
        POINTER_RADIUS_IN_PX
    );
    const direction = centerX >= pointer.x ? 1 : -1;

    return { influence, offsetX: direction * influence * POINTER_PUSH_IN_PX };
}

function drawSpotlight() {
    if (!context || !pointer) {
        return;
    }

    const gradient = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        SPOTLIGHT_RADIUS_IN_PX
    );

    gradient.addColorStop(0, colors.accent);
    gradient.addColorStop(1, 'transparent');
    context.globalAlpha = SPOTLIGHT_OPACITY;
    context.fillStyle = gradient;
    context.fillRect(0, 0, bounds.width, bounds.height);
}

function drawFrame(elapsedSeconds: number) {
    if (!context) {
        return;
    }

    context.clearRect(0, 0, bounds.width, bounds.height);
    drawSpotlight();

    lines = lines.map((line) => {
        context!.font = `${line.fontSize}px ${CODE_FONT_FAMILY}`;

        const centerX = line.x + line.offsetX + measureText(line) / 2;
        const { influence, offsetX } = getPointerOffset(line, centerX);
        const isHighlighted = line.isAccent || influence > 0;

        context!.globalAlpha =
            (line.opacity + influence * POINTER_HIGHLIGHT) * getCenterFade(centerX, line.y, bounds);
        context!.fillStyle = isHighlighted ? colors.accent : colors.text;
        context!.fillText(line.text, line.x + line.offsetX, line.y);

        return advanceCodeLine(line, elapsedSeconds, bounds, offsetX);
    });

    context.globalAlpha = 1;
}

function animate(time: number) {
    animationFrame = requestAnimationFrame(animate);

    if (time - lastFrameTime < FRAME_INTERVAL_IN_MS) {
        return;
    }

    const elapsedSeconds = Math.min((time - lastFrameTime) / 1000, MAX_ELAPSED_SECONDS);

    lastFrameTime = time;
    drawFrame(lastFrameTime ? elapsedSeconds : 0);
}

function start() {
    if (isReducedMotion || animationFrame || !isVisible || document.hidden) {
        return;
    }

    lastFrameTime = performance.now();
    animationFrame = requestAnimationFrame(animate);
}

function stop() {
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
}

function resize() {
    const element = canvas.value;

    if (!element || !context) {
        return;
    }

    const pixelRatio = Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO);

    bounds = { width: element.clientWidth, height: element.clientHeight };
    element.width = Math.round(bounds.width * pixelRatio);
    element.height = Math.round(bounds.height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.textBaseline = 'middle';
    lines = createCodeLines(bounds);
    drawFrame(0);
}

function handlePointerMove(event: PointerEvent) {
    if (event.pointerType !== 'mouse' || !canvas.value) {
        return;
    }

    const rect = canvas.value.getBoundingClientRect();

    pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
}

function clearPointer() {
    pointer = null;
}

function handleVisibilityChange() {
    if (document.hidden) {
        stop();
    } else {
        start();
    }
}

watch(
    () => colorMode.value,
    async () => {
        await nextTick();
        colors = readColors();
        drawFrame(0);
    }
);

onMounted(async () => {
    const element = canvas.value;

    context = element?.getContext('2d') ?? null;

    if (!element || !context) {
        return;
    }

    isReducedMotion = prefersReducedMotion();
    colors = readColors();
    resize();

    await document.fonts.load(`12px ${CODE_FONT_FAMILY}`).catch(() => []);
    textWidthCache.clear();
    drawFrame(0);

    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(element);
    intersectionObserver = new IntersectionObserver(([entry]) => {
        isVisible = entry?.isIntersecting ?? true;

        if (isVisible) {
            start();
        } else {
            stop();
        }
    });
    intersectionObserver.observe(element);

    if (!isReducedMotion) {
        window.addEventListener('pointermove', handlePointerMove, { passive: true });
        document.documentElement.addEventListener('pointerleave', clearPointer);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    start();
});

onBeforeUnmount(() => {
    stop();
    resizeObserver?.disconnect();
    intersectionObserver?.disconnect();
    window.removeEventListener('pointermove', handlePointerMove);
    document.documentElement.removeEventListener('pointerleave', clearPointer);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
});
</script>

<template>
    <canvas
        ref="canvas"
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 size-full motion-safe:animate-in motion-safe:fade-in-0 motion-safe:duration-1000"
    />
</template>
