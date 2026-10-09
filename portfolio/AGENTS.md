# AGENTS.md

Guidelines for anyone (human or AI agent) working on this codebase. Read this file before making changes and follow it strictly. When a rule here conflicts with a personal habit or a generic best practice, this file wins.

## Project overview

Personal portfolio of Artur Bomtempo, built with **Nuxt 4**, **Vue 3**, **TypeScript** and **Tailwind CSS v4**.

The project is being migrated from a React + Vite version that still lives at the repository root (`../src`). That folder is the **reference for content, behavior and visual design** during the migration. Do not edit, move or delete anything outside this `portfolio/` folder unless explicitly asked.

Main goals of the Nuxt version:

- **SEO**: server-rendered / prerendered HTML with proper meta tags on every page.
- **Professionalism**: a conventional, predictable structure that any Nuxt developer recognizes.
- **Growth**: adding a new page or section must be cheap and must not require restructuring existing code.

## Tech stack

| Concern         | Choice                                                       |
| --------------- | ------------------------------------------------------------ |
| Framework       | Nuxt 4 (`app/` directory structure)                          |
| UI              | Vue 3 Single File Components with `<script setup lang="ts">` |
| Language        | TypeScript everywhere                                        |
| Styling         | Tailwind CSS v4 via the official `@tailwindcss/vite` plugin  |
| Routing         | Nuxt file-based routing (`app/pages`)                        |
| i18n            | `@nuxtjs/i18n` (pt-BR default, en, es)                       |
| Theme           | `@nuxtjs/color-mode` (dark/light, follows system by default) |
| Icons           | `@nuxt/icon` with the Lucide collection (`lucide:*`)         |
| Fonts           | `@nuxt/fonts` (Inter and Geist, self-hosted at build time)   |
| Headless UI     | `reka-ui` for accessible primitives (select, dialog, etc.)   |
| Formatting      | Prettier (`npm run format`)                                  |
| Type checking   | `vue-tsc` via `npm run typecheck`                            |
| Package manager | npm (lockfile committed)                                     |

## Commands

```bash
npm install
npm run dev
npm run build
npm run generate
npm run preview
npm run typecheck
npm run format
```

Run `npm run typecheck` and `npm run format` before considering any task done.

## Environment variables

| Variable                    | Purpose                                                                     |
| --------------------------- | --------------------------------------------------------------------------- |
| `NUXT_PUBLIC_I18N_BASE_URL` | Public site URL, used to build absolute `hreflang` and canonical SEO links. |

Copy `.env.example` to `.env` for local development. Never commit `.env`.

## Architecture

The project follows the standard **Nuxt 4 directory structure**, with components grouped by **module** (the page or domain they belong to). This is the most common layout in production Nuxt projects: it relies on Nuxt conventions (auto-imports, file-based routing, layouts) instead of inventing a custom one, and it scales by adding folders, not by rewriting.

```
portfolio/
├── app/
│   ├── app.vue
│   ├── assets/
│   │   └── css/
│   │       └── main.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TheHeader/
│   │   │   │   └── index.vue
│   │   │   └── TheFooter/
│   │   │       └── index.vue
│   │   ├── ui/
│   │   │   ├── BaseButton/
│   │   │   │   └── index.vue
│   │   │   └── BaseCard/
│   │   │       └── index.vue
│   │   ├── home/
│   │   │   ├── HeroSection/
│   │   │   │   └── index.vue
│   │   │   └── FeaturedProjects/
│   │   │       └── index.vue
│   │   ├── about/
│   │   ├── projects/
│   │   ├── contents/
│   │   └── contact/
│   ├── composables/
│   ├── data/
│   ├── layouts/
│   │   └── default.vue
│   ├── pages/
│   │   ├── index.vue
│   │   ├── about.vue
│   │   ├── projects.vue
│   │   ├── contents.vue
│   │   ├── contact.vue
│   │   └── [...slug].vue
│   ├── types/
│   └── utils/
├── i18n/
│   └── locales/
│       ├── pt.json
│       ├── en.json
│       └── es.json
├── public/
├── nuxt.config.ts
└── package.json
```

The tree above is the target shape. Create folders only when they are actually needed.

### Responsibilities of each folder

| Folder                    | Responsibility                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `app/pages`               | Routes. Each file is a route. Pages stay **thin**: they set SEO meta, fetch or select data and compose module components. No large markup blocks here. |
| `app/layouts`             | Page shells (header, footer, main wrapper). `default.vue` is applied automatically.                                                                    |
| `app/components/<module>` | Components that belong to a single page or domain (`home`, `about`, `projects`, `contents`, `contact`).                                                |
| `app/components/ui`       | Generic, reusable building blocks with no business knowledge (buttons, cards, badges, inputs).                                                         |
| `app/components/layout`   | Pieces used by layouts (header, footer, navigation, theme toggle).                                                                                     |
| `app/composables`         | Reusable stateful logic, always named `useSomething` (`useTheme`, `useNavigation`). Auto-imported.                                                     |
| `app/utils`               | Pure, stateless helper functions. Auto-imported.                                                                                                       |
| `app/data`                | Static content of the portfolio (projects, experience, education, contents).                                                                           |
| `app/types`               | Shared TypeScript types and interfaces.                                                                                                                |
| `app/assets`              | Files processed by the build (CSS, fonts, images imported from code).                                                                                  |
| `i18n/locales`            | Translation messages, one JSON file per locale. The only place where user-facing text is written.                                                      |
| `public`                  | Files served as-is from the site root (favicon, `robots.txt`, OG images).                                                                              |

### Where does a new component go?

1. Used by **only one page/module** → `app/components/<module>/<ComponentName>/index.vue`.
2. Used by **two or more modules** and has no business logic → `app/components/ui/`.
3. Part of the **site shell** (header, footer, navigation) → `app/components/layout/`.

When a module component starts being reused elsewhere, move it to `ui/` (generalizing its props) instead of importing it across modules.

## Components

### Folder-per-component

Every component lives in its own folder, named in **PascalCase**, with an `index.vue` entry point:

```
app/components/home/HeroSection/index.vue
```

This keeps room for colocated files that belong only to that component (for example a local `types.ts`) without polluting the module folder.

### Naming and auto-import

Nuxt auto-imports components and builds the name from the path: module folder + component folder. `index.vue` is ignored in the name.

| File                                            | Usage in templates        |
| ----------------------------------------------- | ------------------------- |
| `app/components/home/HeroSection/index.vue`     | `<HomeHeroSection />`     |
| `app/components/projects/ProjectCard/index.vue` | `<ProjectsProjectCard />` |
| `app/components/ui/BaseButton/index.vue`        | `<UiBaseButton />`        |
| `app/components/layout/TheHeader/index.vue`     | `<LayoutTheHeader />`     |

Rules:

- Never import project components manually; rely on auto-import. Third-party primitives (such as `reka-ui`) are imported explicitly from their package.
- Module folders are lowercase (`home`, `projects`); component folders are PascalCase.
- Do not repeat the module name inside the component name when it adds nothing (`projects/ProjectCard` is fine because "card of a project" is the real name; `home/HomeHero` is not).
- Use multi-word component names (Vue style guide), e.g. `HeroSection`, not `Hero`.

### Component structure

Use this order inside every SFC:

```vue
<script setup lang="ts">
interface Props {
    title: string;
    highlighted?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    highlighted: false,
});

const emit = defineEmits<{
    select: [id: string];
}>();
</script>

<template>
    <article :class="['rounded-xl border p-6', props.highlighted && 'border-primary']">
        <h3 class="text-lg font-semibold">{{ props.title }}</h3>
    </article>
</template>
```

- Always `<script setup lang="ts">`. No Options API.
- Props and emits are typed with TypeScript generics (`defineProps<Props>()`, `defineEmits<{...}>()`).
- `<script>` first, `<template>` second, `<style>` last and only if Tailwind is genuinely not enough.
- Keep components small and focused. If a template grows past what fits comfortably on screen, extract subcomponents.
- Components receive data through props; they do not reach into global data files on their own unless they are the module's top-level section.

## Pages, routing and SEO

- Routes are defined only by files in `app/pages`. Never create a manual router.
- Every page **must** declare its SEO metadata with `useSeoMeta` (title, description and Open Graph fields), using translated messages passed as getters so they update when the locale changes:

```vue
<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
    title: () => t('projects.seo.title'),
    description: () => t('projects.seo.description'),
    ogTitle: () => t('projects.seo.ogTitle'),
    ogDescription: () => t('projects.seo.ogDescription'),
});
</script>
```

- Global defaults (favicon, author) belong in `app.head` inside `nuxt.config.ts`. The `lang` attribute, `hreflang` alternates and `og:locale` are generated by `useLocaleHead` in `app.vue`; do not set them by hand.
- Use `<NuxtLink>` for every internal link, never `<a href>`.
- Always pass internal paths through `useLocalePath()` (`:to="localePath('/about')"`) so the current locale prefix is kept.
- Use semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`) and a single `h1` per page.
- Every image needs a meaningful `alt` text.
- The 404 page is handled by `app/pages/[...slug].vue` (or `app/error.vue` for real errors).
- Routes temporarily disabled (such as `talks`) are simply not created as pages until they are ready. Do not leave commented-out routes.

## Styling

- Tailwind CSS v4 is configured through the official Vite plugin in `nuxt.config.ts`. There is **no** `tailwind.config.js`; theme customization (colors, fonts, radius) is done with `@theme` inside `app/assets/css/main.css`.
- Prefer Tailwind utility classes in templates. Create custom CSS classes only for patterns repeated across many components, and define them in `main.css`.
- Design tokens (colors, shadows, gradients) are CSS variables in `main.css`. Do not hardcode hex/hsl colors in components.
- Mobile first: write base classes for small screens and add `sm:`, `md:`, `lg:` for larger ones.
- Shared custom utilities (`glass-card`, `glow-text`, `link-underline`) are declared with `@utility` in `main.css` and used like any Tailwind class.

## Theme

- Dark and light themes are handled by `@nuxtjs/color-mode`, which adds a `dark` or `light` class to `<html>` before the page paints (no theme flash).
- The default preference follows the operating system, falling back to dark. The user's choice is stored under the `theme` key.
- `:root` holds the dark palette and `.light` overrides it in `main.css`. Every new color token must be defined for both themes.
- Use the `dark:` variant for theme-specific styles; it is bound to the `dark` class.
- Read or change the theme only through `useColorMode()`.

## Internationalization

- Locales: `pt` (pt-BR, **default**, served without prefix), `en` (`/en`) and `es` (`/es`). The URL is the source of truth for the active locale, which is the most SEO-friendly strategy (`prefix_except_default`).
- Every user-facing string lives in `i18n/locales/<locale>.json`. Templates and scripts never contain hardcoded visible text; they use `t('key')`.
- A new key must be added to **all three** locale files in the same change.
- Keys are in English, camelCase, grouped by module and mirroring the component structure: `header.*`, `nav.*`, `footer.*`, `home.*`, `home.seo.*`.
- Interpolate dynamic values with named parameters: `t('footer.rights', { year })`.
- `|` is the pluralization separator in vue-i18n. To show a literal pipe, escape it as `{'|'}`.
- Switch locales with `setLocale(code)`; list them with `locales` from `useI18n()`.
- Content that is not UI copy but data (projects, experience, contents) stays in `app/data` and is localized there when migrated.

## Icons

- Use `<Icon name="lucide:<icon-name>" />`. Icon names are the kebab-case Lucide names (`lucide:user`, `lucide:chevron-down`).
- Icons are bundled at build time; do not load icons from external CDNs.
- Decorative icons inside a labelled control need no extra label; icon-only buttons must have a translated `aria-label`.

## Code conventions

### Language

- **All code is written in English**: variable, function, component, file, folder, type, CSS class and commit names.
- **Only text visible to the user is translated**, with Brazilian Portuguese (pt-BR) as the primary language: labels, headings, paragraphs, button texts, `alt` and `aria-label` texts, SEO titles and descriptions. This text lives in the locale files, never in components (see [Internationalization](#internationalization)).

```ts
const projectList = getFeaturedProjects();
```

```vue
<UiBaseButton>{{ t('projects.viewProject') }}</UiBaseButton>
```

### No comments

Code must not contain comments of any kind: no line comments, block comments, JSDoc, HTML comments in templates, `TODO`s or commented-out code.

Code must explain itself through:

- **Descriptive names**: `isMobileMenuOpen` instead of `open`, `formatPublishDate` instead of `fmt`.
- **Small functions** with a single responsibility, whose name states what they do.
- **Named constants** instead of magic values: `const HEADER_HEIGHT_IN_PX = 64`.
- **Types** that document the shape of the data.

If you feel a comment is necessary, rename or extract code until it is not. Pending work is tracked in issues, never in `TODO` comments. Unused code is deleted, not commented out (git keeps the history).

### TypeScript

- No `any`. Use precise types, `unknown` plus narrowing, or generics.
- Use `interface` for object shapes and `type` for unions and aliases.
- Shared types live in `app/types`; types used by a single component stay in that component.

### Naming

| Item                    | Convention        | Example                    |
| ----------------------- | ----------------- | -------------------------- |
| Component folders       | PascalCase        | `ProjectCard/`             |
| Module folders          | lowercase         | `projects/`                |
| Pages and layouts       | kebab-case        | `not-found.vue`            |
| Composables             | camelCase + `use` | `useTheme.ts`              |
| Utils and data files    | camelCase         | `formatDate.ts`            |
| Variables and functions | camelCase         | `selectedFilter`           |
| Constants               | UPPER_SNAKE_CASE  | `MAX_FEATURED_PROJECTS`    |
| Types and interfaces    | PascalCase        | `Project`, `ContentType`   |
| Booleans                | `is/has/should`   | `isActive`, `hasGithubUrl` |

### Formatting

Prettier is the single source of truth (`.prettierrc`): 4 spaces, single quotes, semicolons, trailing commas (es5), 100 columns. Never format by hand against it.

## Dependencies

- Prefer Nuxt built-ins and official modules before adding a library.
- Every new dependency must be justified by a real need; avoid packages that duplicate what Nuxt, Vue or Tailwind already do.
- Keep `nuxt`, `vue` and `vue-router` aligned with the versions Nuxt itself requires.
- `package.json` contains:
    - `allowScripts`: packages explicitly approved to run install scripts (npm blocks them by default). Approve new ones with `npm install-scripts approve <pkg> --no-allow-scripts-pin` after reviewing what the script does.
    - `overrides`: forced transitive versions that fix security advisories or deprecations in the dependency tree (`@simple-git/argv-parser`, `glob`, and `esbuild` scoped to `fontless`). Remove an override as soon as the upstream package ships the fix on its own.
- Run `npm audit` when updating dependencies and review the result.

## Migration from React

When migrating a feature from the React version (`../src`):

1. Find the React page in `../src/pages/<name>` and its components in `../src/components`.
2. Create the route in `app/pages`, with `useSeoMeta`. Move the page's texts from `../src/data/content.{pt,en,es}.ts` (the `ui` object) into the three locale files.
3. Split the page into module components under `app/components/<module>/<ComponentName>/index.vue`.
4. Translate React patterns to Vue/Nuxt equivalents:

| React                       | Nuxt / Vue                                                  |
| --------------------------- | ----------------------------------------------------------- |
| `react-router-dom` routes   | Files in `app/pages`                                        |
| `<Link to>`                 | `<NuxtLink to>`                                             |
| `useState`                  | `ref` / `reactive`                                          |
| `useMemo`                   | `computed`                                                  |
| `useEffect`                 | `watch`, `watchEffect`, `onMounted`                         |
| Context providers + hooks   | Composables (`useState` from Nuxt for shared state)         |
| `useLanguage` / `t.home.x`  | `useI18n()` / `t('home.x')`                                 |
| `useTheme`                  | `useColorMode()`                                            |
| Radix UI                    | `reka-ui`                                                   |
| `className`                 | `class`                                                     |
| Conditional JSX             | `v-if` / `v-else`                                           |
| `array.map` in JSX          | `v-for` with `:key`                                         |
| `lucide-react`              | `<Icon name="lucide:..." />` from `@nuxt/icon`              |
| shadcn/ui (`components/ui`) | Own components in `components/ui`, created only when needed |

5. Bring over only what is used. The React project contains many unused shadcn components; do not port them.
6. Remove comments and `TODO`s found in the React code; they must not reach the Nuxt version.
