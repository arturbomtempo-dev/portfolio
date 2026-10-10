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

| Concern         | Choice                                                                                  |
| --------------- | --------------------------------------------------------------------------------------- |
| Framework       | Nuxt 4 (`app/` directory structure)                                                     |
| UI              | Vue 3 Single File Components with `<script setup lang="ts">`                            |
| Language        | TypeScript everywhere                                                                   |
| Styling         | Tailwind CSS v4 via the official `@tailwindcss/vite` plugin                             |
| Routing         | Nuxt file-based routing (`app/pages`)                                                   |
| i18n            | `@nuxtjs/i18n` (pt-BR default, en, es)                                                  |
| Theme           | `@nuxtjs/color-mode` (dark/light, follows system by default)                            |
| Icons           | `@lucide/vue` (official Lucide components for Vue 3) and `simple-icons` for brand logos |
| Fonts           | `@nuxt/fonts` (Inter and Geist, self-hosted at build time)                              |
| Headless UI     | `reka-ui` for accessible primitives (select, dialog, etc.)                              |
| Animations      | `tw-animate-css` (`animate-in`, `fade-in-0`, `zoom-in-95`…)                             |
| Class merging   | `cn()` (`clsx` + `tailwind-merge`) in `app/utils/cn.ts`                                 |
| Formatting      | Prettier (`npm run format`)                                                             |
| Type checking   | `vue-tsc` via `npm run typecheck`                                                       |
| Package manager | npm (lockfile committed)                                                                |

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

## Site URL

The production site is served at **https://www.arturbomtempo.dev**. It is configured as `i18n.baseUrl` in `nuxt.config.ts` and used to build absolute `canonical`, `hreflang` and `og:url` links. For a different environment (such as a preview deployment), override it with the `NUXT_PUBLIC_I18N_BASE_URL` environment variable instead of editing the config. Never commit `.env` files.

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
│   │   ├── profile.ts
│   │   ├── about/
│   │   │   ├── pt.ts
│   │   │   ├── en.ts
│   │   │   └── es.ts
│   │   └── projects/
│   │       ├── pt.ts
│   │       ├── en.ts
│   │       └── es.ts
│   ├── layouts/
│   │   └── default.vue
│   ├── middleware/
│   ├── pages/
│   │   ├── index.vue
│   │   ├── about.vue
│   │   ├── projects/
│   │   │   ├── index.vue
│   │   │   └── [id].vue
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
├── modules/
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
| `app/middleware`          | Route middleware. Global ones end with `.global.ts` and run on every navigation.                                                                       |
| `i18n/locales`            | Translation messages, one JSON file per locale. The only place where user-facing text is written.                                                      |
| `modules`                 | Local Nuxt modules, registered automatically. Only for build-level integration (Vite plugins, hooks), never for app logic.                             |
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

### Reusable UI components and class overrides

Components in `components/ui` follow the shadcn-vue pattern: they accept a `class` prop and merge it with their own classes through `cn()`, so a caller can override any default class predictably (for example `hover:bg-primary/10` replacing the variant's `hover:bg-accent`):

```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface Props {
    class?: HTMLAttributes['class'];
}

const props = defineProps<Props>();

const classes = computed(() => cn('rounded-md px-4', props.class));
</script>
```

Never rely on plain class concatenation to override a Tailwind class; without `cn()` the winning class depends on stylesheet order.

Available UI components (check them before creating a new one):

| Component        | Purpose                                                                                                                                                                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UiBaseButton`   | Button or link (`to`, internal or external) with `primary`, `outline` and `ghost` variants and `sm`, `md`, `lg`, `icon` sizes.                                                                                                               |
| `UiBaseCard`     | Glass card (`surface-card`). Renders any tag or component through `as` (a `NuxtLink` for cards that are links). The hover lift (`surface-card-hoverable`) is on by default; pass `:is-hoverable="false"` for cards that are not interactive. |
| `UiTechBadge`    | Rounded technology pill (`tech-badge`), `text-sm` by default; pass `class="text-xs"` for the compact version used in cards.                                                                                                                  |
| `UiBaseDialog`   | Accessible modal (`reka-ui`) with overlay, animations and a translated close button. Controlled by `v-model:open`.                                                                                                                           |
| `UiBaseCarousel` | Embla carousel with keyboard support, previous/next buttons and optional adaptive height. Slides via scoped slot.                                                                                                                            |
| `UiPageHeader`   | Page title (`h1`) and introduction paragraph at the top of every page. `description-class` adjusts the paragraph width (`max-w-3xl` by default) and `class` the spacing below it (`mb-16` by default).                                       |
| `UiFilterTabs`   | Group of toggle buttons (`aria-pressed`) used to filter a listing, bound with `v-model`. Option icons come from the `icon` scoped slot.                                                                                                      |
| `UiBrandIcon`    | Renders a brand logo from `simple-icons` (`:icon="siGithub"`) with the same sizing classes as Lucide icons.                                                                                                                                  |
| `UiBackLink`     | "Back to …" link with arrow and animated underline (`back-link`), used at the top of detail pages.                                                                                                                                           |

### Dialogs

- Dialogs are only for secondary, short-lived information (such as the about page highlights). Primary content that someone may want to share or that search engines should index, such as a project, gets **its own route** instead (`/projects/[id]`).

- Keep the dialog's data while it closes: store the selection (preferably an index into the localized content) separately from the `open` state, so the closing animation still shows the content and a locale switch updates an open dialog.
- Every dialog needs a `DialogTitle` (and a `DialogDescription` when there is a subtitle) from `reka-ui`, for screen readers.

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
- External links (live demos, repositories) are real links, not buttons that call `window.open`: use `UiBaseButton` (or `NuxtLink`) with the full URL in `to` and `target="_blank"`. `NuxtLink` detects external URLs and adds `rel="noopener noreferrer"` automatically.
- Every page starts with `UiPageHeader` for its `h1` and introduction. Detail pages start with `UiBackLink` to their listing instead.
- When a route has children (a listing and its detail pages), use a folder with `index.vue` and `[id].vue` (`pages/projects/index.vue`, `pages/projects/[id].vue`). Do not keep a `projects.vue` next to a `projects/` folder, because Nuxt would treat it as a parent route that must render `<NuxtPage>`.
- Listing items link to their detail page with a real `<NuxtLink>` (stretched over the card), so the detail pages are crawlable and prerendered.

### Detail pages

- Detail data comes from the same content composable as the listing (`useProjectsContent()`), looked up by the route `id`. Ids are identical in every locale, so `/projects/portfolio`, `/en/projects/portfolio` and `/es/projects/portfolio` show the same item, and switching the locale keeps the user on it.
- Set complete SEO meta for each item: title with the item name, `description`, `ogImage` (the item image), `ogType: 'article'` and `twitterCard: 'summary_large_image'`, so shared links show a rich preview.
- When the `id` does not exist, render a translated not-found state (`ProjectsProjectNotFound`) with a link back to the listing, return a real **404** status with `setResponseStatus(404)` and set `robots: 'noindex, nofollow'`.
- Opening a detail page scrolls to the top; the browser back button restores the listing's scroll position (default Nuxt behavior, do not override it).

### Listings with filters

- Filters live in the URL query (`/contents?type=video`), not only in component state, so a filtered view can be shared, survives a reload and is rendered on the server. The default filter is omitted from the URL.
- Read the query through a `computed` with getter and setter; the setter calls `navigateTo({ query }, { replace: true })` so filtering does not pile up history entries. Invalid values fall back to the default filter.
- Use `UiFilterTabs` for the buttons, so every filterable listing (contents, talks) looks and behaves the same.

### External content cards

- A card that points to an external page is a link as a whole: `UiBaseCard` with `:as="NuxtLink"`, the full URL in `to` and `target="_blank"`.
- Remote images can disappear (expired signed URLs, deleted posts). Cards with remote thumbnails show a fallback (gradient with the content type icon) when the image fails, handling both the `error` event and images that already failed before hydration (`complete && naturalWidth === 0` on mount).
- Dates are stored as ISO strings (`2025-11-18`) and displayed with `formatDate(date, localeProperties.language)` inside a `<time datetime>` element.
- Icons next to text that can wrap (titles) use `shrink-0`, so a long title never squeezes the icon.

### Navigation active state

- The active state of the main navigation is computed in `useNavigation()` (`isActive`), not by `router-link-active`, because detail pages (`/projects/[id]`) are sibling routes of their listing. The home item matches only its exact path; the other sections also match their nested paths, so "Projects" stays highlighted on a project page.
- Navigation links expose it as `data-active`, styled with `data-active:text-foreground` and by the `link-underline` utility.
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
- Always write the **canonical Tailwind v4 form** of a class, as suggested by the Tailwind CSS IntelliSense extension (`suggestCanonicalClasses`). The editor must show no Tailwind warnings:
    - Prefer scale values over arbitrary ones whenever they exist: `max-w-350` instead of `max-w-[1400px]`, `w-21.25` instead of `w-[85px]`, `top-1/2` instead of `top-[50%]`. Arbitrary values (`[...]`) are only for values that have no scale equivalent (`max-h-[85vh]`, `w-[calc(100%-2rem)]`).
    - Use `size-*` when width and height are equal (`size-4`, not `h-4 w-4`), and the line-height modifier for text (`text-lg/relaxed`).
    - Use the v4 syntax for CSS variables (`h-(--reka-select-trigger-height)`), boolean data attributes (`data-highlighted:`, `data-disabled:`) and arbitrary properties (`transform-[rotate(0)_scale(1)]`).
    - Do not repeat what a custom utility already sets (`glass-card` already includes the border, so no extra `border-b`), and never put two classes that set the same property under the same variant on one element.
- Shared custom utilities (`glass-card`, `glow-text`, `link-underline`) are declared with `@utility` in `main.css` and used like any Tailwind class.

### Visual parity with the React version

The Nuxt version must look **exactly** like the React version. After migrating anything visual, compare both side by side (dark and light themes, desktop and mobile, hover and open states). The React project uses Tailwind v3 and the Nuxt project uses Tailwind v4, so watch for these differences:

- `container` behaves differently. Use `mx-auto w-full max-w-[1400px]` plus explicit horizontal padding.
- `rotate-*` and `scale-*` use the individual `rotate`/`scale` CSS properties in v4, which rasterize slightly differently from v3's `transform`. When an element has a resting transform that must match the React version (such as the theme toggle icons), use `[transform:rotate(0)_scale(1)]`.
- shadcn's `[&_svg]:size-4` in buttons overrides the icon's own size classes. `UiBaseButton` keeps this rule, so icons inside buttons are always 16px.
- Links rendered inside `<li>` must be blockified (`li` with `flex`) to keep the same vertical alignment as the React flex children.
- `space-y-*` changed: v3 adds `margin-top` to the following siblings, v4 adds `margin-bottom` to the previous ones, and a child's own `mb-*` class wins over it. Inside **flex** containers (where margins do not collapse) this changes the spacing; use explicit margins (`mt-1.5`) to reproduce the React result.
- In v3, `@layer components` classes such as React's `project-card` lose to utilities only by source order and specificity; in v4 cascade layers make utilities always win. Recreate such classes as a single `@utility` (`surface-card`, `tech-badge`) that encodes the **final** computed result of the React cascade, including the `.light` overrides.
- The React version loaded Inter and Geist only in the `normal` style, so italic text is synthesized by the browser. `@nuxt/fonts` is configured with `styles: ['normal']` to keep the same rendering; do not add italic font files.

## Interactivity

- **Every clickable element must show `cursor: pointer`.** Tailwind v4 removed the pointer cursor from buttons, so `main.css` restores it for `button`, `[role='button']` and `[role='option']`. Links get it from the browser.
- Any other element that becomes clickable (a `div` with a click handler, a custom card, a headless UI primitive with a different role) must add `cursor-pointer` explicitly. Prefer a real `<button>` or `<NuxtLink>` instead of a clickable `div`.
- **Clickable cards** use the stretched button pattern, because headings are not allowed inside a `<button>`: the card is `relative cursor-pointer`, and the button lives inside the heading and covers the whole card with `after:absolute after:inset-0`. Keyboard focus is shown on that pseudo-element (`focus-visible:after:ring-2`). See `AboutAchievementCard` and `AboutTimelineItem`.
- Disabled controls keep the default cursor.
- Hover effects signal interactivity. Do not add hover effects (lift, border highlight, glow) to elements that do nothing when hovered or clicked, such as the testimonial cards inside the carousel.
- Every interactive element must be reachable by keyboard and show a visible focus state (`focus-visible:ring-*`).

## Theme

- Dark and light themes are handled by `@nuxtjs/color-mode`, which adds a `dark` or `light` class to `<html>` before the page paints (no theme flash).
- The default preference follows the operating system, falling back to dark. The user's choice is stored under the `theme` key.
- `:root` holds the dark palette and `.light` overrides it in `main.css`. Every new color token must be defined for both themes.
- Use the `dark:` variant for theme-specific styles; it is bound to the `dark` class.
- Read or change the theme only through `useColorMode()`.

## Internationalization

- Locales: `pt` (pt-BR, **default**, served without prefix), `en` (`/en`) and `es` (`/es`). The URL is the source of truth for the active locale, which is the most SEO-friendly strategy (`prefix_except_default`).
- Templates and scripts never contain hardcoded visible text.

### UI messages (`i18n/`) vs content data (`app/data/`)

Translated text lives in two places on purpose. They are two different layers, not duplicates:

|              | `i18n/locales/<locale>.json`                                                                                                | `app/data/<module>/<locale>.ts`                                                                  |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| What         | **UI messages**: the interface copy (navigation, buttons, section titles, labels, `aria-label`s, SEO meta, dialog headings) | **Content**: the portfolio's own data (projects, achievements, testimonials, timeline, contents) |
| Shape        | Short strings by key, with interpolation (`{year}`)                                                                         | Typed collections of objects (`Achievement[]`), with images, links and icon components           |
| Read with    | `t('about.title')`                                                                                                          | A content composable (`useAboutContent()`)                                                       |
| Loaded       | Lazily by `@nuxtjs/i18n`, only the active locale                                                                            | Bundled with the page that uses it                                                               |
| Changes when | The interface changes                                                                                                       | The portfolio content changes                                                                    |

Rule of thumb: if the text is part of the **interface** and would exist even with no content (a button, a heading, a label), it is a UI message. If it is an **item of a list** that describes the portfolio, it is content data.

Why not merge them:

- `i18n/locales/` is the convention of `@nuxtjs/i18n` v10: locale files are resolved from the root `i18n/` folder (`restructureDir`, which cannot be disabled from v11 on) and lazy-loaded per locale, served to both server and client. Do not move, rename or disable it.
- vue-i18n compiles every message: characters such as `|`, `@`, `{` and `}` have special meaning, and arrays of objects, image URLs or icon components do not belong there. Long content would have to be escaped and read with `tm()`/`rt()`.
- Content is typed by TypeScript interfaces, which catches a missing field in one translation at type-check time.

The React version kept both layers in the same `content.<locale>.ts` file (the `ui` object next to the data arrays); the Nuxt version only separates them.

If the content grows (for example many projects or articles with long text), the next step is to move `app/data` to Nuxt Content collections, not into the locale JSON files.

### UI messages

- Every UI message lives in `i18n/locales/<locale>.json` and is read with `t('key')`.
- A new key must be added to **all three** locale files in the same change.
- Keys are in English, camelCase, grouped by module and mirroring the component structure: `header.*`, `nav.*`, `footer.*`, `home.*`, `home.seo.*`.
- Interpolate dynamic values with named parameters: `t('footer.rights', { year })`.
- `|` is the pluralization separator in vue-i18n. To show a literal pipe, escape it as `{'|'}`.

### Switching locales

- Switch locales with `setLocale(code)`; list them with `locales` from `useI18n()`.
- Switching the locale must feel like the React version: only the texts change, without remounting the page, replaying enter animations or scrolling. This is done by two pieces that must be kept:
    - `app.vue` passes `useLocaleAgnosticRouteKey()` as the `NuxtPage` `page-key`, so `/` and `/en` share the same component instance.
    - `app/middleware/preserve-scroll-on-locale-switch.global.ts` disables scroll-to-top when only the locale changed.
- UI state that should survive a locale switch (such as the mobile menu) must watch `useLocaleAgnosticRouteKey()` instead of `route.fullPath`.

### Content data

- Content lives in typed per-locale files, `app/data/<module>/<locale>.ts` (one complete object per locale, so each translation can be edited independently), and is read through a composable that picks the current locale:

```ts
const ABOUT_CONTENT_BY_LOCALE: Record<LocaleCode, AboutContent> = {
    pt: ABOUT_CONTENT_PT,
    en: ABOUT_CONTENT_EN,
    es: ABOUT_CONTENT_ES,
};

export function useAboutContent() {
    const { locale } = useI18n();

    return computed(() => ABOUT_CONTENT_BY_LOCALE[locale.value]);
}
```

- The `LocaleCode` type comes from `app/types/locale.ts`; never redeclare the locale union by hand.
- Optional fields are omitted when there is no value. Never use placeholders such as `'#'` or empty strings (the React version used `liveUrl: '#'`); the type marks them as optional (`liveUrl?: string`) and the component renders the related UI only when the value exists.
- The three locale files of a module must keep the same structure and the same number of items. Icons are stored as Lucide components imported from `@lucide/vue` (`icon: Trophy`), typed as `LucideIcon`, exactly like the React version did with `lucide-react`.

## Icons

- Icons come from **`@lucide/vue`**, the official Lucide package for Vue 3 (the Vue counterpart of `lucide-react`, and the successor of the deprecated `lucide-vue-next`). Do not add SVG files to the project or use another icon library.
- Import each icon by name from the package, as a component. Imports are tree-shaken, so only the icons used end up in the bundle:

```vue
<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
</script>

<template>
    <ArrowRight class="h-4 w-4" />
</template>
```

- Use the canonical icon names (`CircleCheck`), not the legacy aliases (`CheckCircle2`).
- When an icon is data (an achievement, a tech category), store the component itself and type it as `LucideIcon`; render it with `<component :is="item.icon" />`.
- Size icons with Tailwind classes (`h-4 w-4`). Inside `UiBaseButton` they are forced to 16px by `[&_svg]:size-4`, as in shadcn.
- Lucide 1.x no longer ships brand icons (GitHub, LinkedIn…). Brand logos come from `simple-icons`, the source recommended by Lucide, rendered with `UiBrandIcon`:

```vue
<script setup lang="ts">
import { siGithub } from 'simple-icons';
</script>

<template>
    <UiBrandIcon :icon="siGithub" class="size-4" />
</template>
```

- Decorative icons inside a labelled control need no extra label; icon-only buttons must have a translated `aria-label` or an `sr-only` text.

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
- `.npmrc` disables the automatic audit and funding messages during install, because the remaining advisories (`braces`, `node-forge` and `simple-git` through `@nuxt/devtools` 3) have no stable fix published and only affect build and development tooling. Run `npm audit` manually whenever dependencies are updated, and remove `audit=false` once the report is clean.
- Do not install beta or prerelease versions of dependencies.
- Packages imported directly in our code must be declared in `package.json`, even if they already come as a transitive dependency (for example `@nuxt/kit` used in `modules/`).

## Local modules

`modules/components-alias-dep-scan.ts` fixes an incompatibility between Vite 8's dependency scan and `@nuxtjs/i18n`: the scan cannot resolve Nuxt's `#components` alias inside packages that declare their own `imports` field. The module marks `#components` as external **only during the scan**, so pre-bundling works and the real resolution is still done by Nuxt. Remove it once Nuxt or `@nuxtjs/i18n` fixes the issue upstream (check by deleting it and running `npm run dev` with an empty `node_modules/.cache`).

## Migration from React

When migrating a feature from the React version (`../src`):

1. Find the React page in `../src/pages/<name>` and its components in `../src/components`.
2. Create the route in `app/pages`, with `useSeoMeta`. Move the page's texts from `../src/data/content.{pt,en,es}.ts` (the `ui` object) into the three locale files, and its data arrays into `app/data/<module>/<locale>.ts`. Generate these files from the React sources instead of retyping them, so no content is lost or altered.
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
| `lucide-react`              | `@lucide/vue` (same component API, see [Icons](#icons))     |
| `cn()` from `@/lib/utils`   | `cn()` from `app/utils/cn.ts` (auto-imported)               |
| `tailwindcss-animate`       | `tw-animate-css` (same class names)                         |
| shadcn/ui (`components/ui`) | Own components in `components/ui`, created only when needed |

5. Bring over only what is used. The React project contains many unused shadcn components; do not port them.
6. Remove comments and `TODO`s found in the React code; they must not reach the Nuxt version.
