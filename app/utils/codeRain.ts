export interface CodeLine {
    text: string;
    x: number;
    y: number;
    speed: number;
    fontSize: number;
    opacity: number;
    isAccent: boolean;
    offsetX: number;
}

export interface CodeRainBounds {
    width: number;
    height: number;
}

export const CODE_SNIPPETS = [
    'const app = createApp()',
    'npm run build',
    'git commit -m "feat: ship it"',
    '<template>',
    'export default defineNuxtConfig({})',
    'async function fetchData() {',
    'return response.json()',
    'SELECT * FROM projects;',
    '@GetMapping("/api/talks")',
    'docker compose up -d',
    'interface Project { id: string }',
    'useState(() => [])',
    'public record User(String name) {}',
    'for (const node of graph.nodes)',
    'git push origin main',
    'await prisma.user.findMany()',
    'def solve(graph):',
    'if (!isValid) throw new Error()',
    'dotnet run --project Api',
    'console.log("hello, world")',
    'transition: all 0.3s ease;',
    'Route::get("/", fn() => view())',
    'pnpm add @nuxt/image',
    'const [state, setState] = useState()',
    'dijkstra(graph, source)',
    'cy.get("[data-test]").click()',
    '</>',
    '{ }',
    '=>',
    '0101 1010',
];

const AREA_PER_LINE_IN_PX = 32000;
const MIN_LINE_COUNT = 12;
const MAX_LINE_COUNT = 48;
const MIN_FONT_SIZE_IN_PX = 11;
const FONT_SIZE_RANGE_IN_PX = 4;
const MIN_SPEED_IN_PX_PER_SECOND = 9;
const SPEED_RANGE_IN_PX_PER_SECOND = 22;
const MIN_OPACITY = 0.07;
const OPACITY_RANGE = 0.11;
const ACCENT_PROBABILITY = 0.22;
const RESPAWN_MARGIN_IN_PX = 24;
const OFFSET_EASING = 0.12;
const CHARACTER_WIDTH_RATIO = 0.6;

export function getCodeLineCount({ width, height }: CodeRainBounds) {
    const count = Math.round((width * height) / AREA_PER_LINE_IN_PX);

    return Math.min(Math.max(count, MIN_LINE_COUNT), MAX_LINE_COUNT);
}

function pickSnippet(random: () => number) {
    return CODE_SNIPPETS[Math.floor(random() * CODE_SNIPPETS.length)] ?? CODE_SNIPPETS[0]!;
}

export function createCodeLine(
    { width, height }: CodeRainBounds,
    random: () => number,
    startAtTop = false
): CodeLine {
    const depth = random();
    const text = pickSnippet(random);
    const fontSize = Math.round(MIN_FONT_SIZE_IN_PX + depth * FONT_SIZE_RANGE_IN_PX);
    const estimatedWidth = text.length * fontSize * CHARACTER_WIDTH_RATIO;

    return {
        text,
        x: random() * Math.max(width - estimatedWidth, 0),
        y: startAtTop ? -RESPAWN_MARGIN_IN_PX - random() * height * 0.3 : random() * height,
        speed: MIN_SPEED_IN_PX_PER_SECOND + depth * SPEED_RANGE_IN_PX_PER_SECOND,
        fontSize,
        opacity: MIN_OPACITY + depth * OPACITY_RANGE,
        isAccent: random() < ACCENT_PROBABILITY,
        offsetX: 0,
    };
}

export function createCodeLines(bounds: CodeRainBounds, random: () => number = Math.random) {
    return Array.from({ length: getCodeLineCount(bounds) }, () => createCodeLine(bounds, random));
}

export function getPointerInfluence(distance: number, radius: number) {
    if (distance >= radius) {
        return 0;
    }

    const proximity = 1 - distance / radius;

    return proximity * proximity;
}

export function advanceCodeLine(
    line: CodeLine,
    elapsedSeconds: number,
    bounds: CodeRainBounds,
    targetOffsetX: number,
    random: () => number = Math.random
): CodeLine {
    const y = line.y + line.speed * elapsedSeconds;

    if (y - RESPAWN_MARGIN_IN_PX > bounds.height) {
        return createCodeLine(bounds, random, true);
    }

    return {
        ...line,
        y,
        offsetX: line.offsetX + (targetOffsetX - line.offsetX) * OFFSET_EASING,
    };
}

const MIN_CENTER_FADE = 0.12;
const CENTER_FADE_WIDTH_RATIO = 0.42;
const CENTER_FADE_HEIGHT_RATIO = 0.36;

export function getCenterFade(x: number, y: number, { width, height }: CodeRainBounds) {
    const normalizedX = (x - width / 2) / (width * CENTER_FADE_WIDTH_RATIO);
    const normalizedY = (y - height / 2) / (height * CENTER_FADE_HEIGHT_RATIO);
    const distance = Math.min(Math.hypot(normalizedX, normalizedY), 1);

    return MIN_CENTER_FADE + (1 - MIN_CENTER_FADE) * distance;
}
