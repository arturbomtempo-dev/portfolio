# AGENTS.md

Guidelines for anyone (human or AI agent) working on this codebase. Read this file before making changes and follow it strictly. When a rule here conflicts with a personal habit or a generic best practice, this file wins.

## Project overview

Personal portfolio of Artur Bomtempo, built with **Nuxt 4**, **Vue 3**, **TypeScript** and **Tailwind CSS v4**.

The site was rewritten from a React + Vite version, which is no longer in the working tree (it remains in the git history). The Nuxt project lives at the repository root.

Main goals:

- **SEO**: server-rendered / prerendered HTML with proper meta tags on every page.
- **Professionalism**: a conventional, predictable structure that any Nuxt developer recognizes.
- **Growth**: adding a new page or section must be cheap and must not require restructuring existing code.

## Tech stack

| Concern         | Choice                                                                             |
| --------------- | ---------------------------------------------------------------------------------- |
| Framework       | Nuxt 4 (`app/` directory structure)                                                |
| UI              | Vue 3 Single File Components with `<script setup lang="ts">`                       |
| Language        | TypeScript everywhere                                                              |
| Styling         | Tailwind CSS v4 via the official `@tailwindcss/vite` plugin                        |
| Routing         | Nuxt file-based routing (`app/pages`)                                              |
| i18n            | `@nuxtjs/i18n` (pt-BR default, en, es)                                             |
| Theme           | `@nuxtjs/color-mode` (dark/light, follows system by default)                       |
| Icons           | `@lucide/vue` (official Lucide components) and `@tabler/icons-vue` for brand logos |
| Fonts           | `@nuxt/fonts` (Inter and Geist, self-hosted at build time)                         |
| Images          | `@nuxt/image` (`NuxtImg`: AVIF/WebP, responsive `srcset`)                          |
| SEO             | `@nuxtjs/sitemap` and `@nuxtjs/robots` (driven by the `site` config)               |
| Security        | `nuxt-security` (CSP, HSTS and other security headers)                             |
| Headless UI     | `reka-ui` for accessible primitives (dialog)                                       |
| Animations      | `tw-animate-css` (`animate-in`, `fade-in-0`, `zoom-in-95`…)                        |
| Class merging   | `cn()` (`clsx` + `tailwind-merge`) in `app/utils/cn.ts`                            |
| Formatting      | Prettier (`npm run format`)                                                        |
| Type checking   | `vue-tsc` via `npm run typecheck`                                                  |
| Package manager | npm (lockfile committed)                                                           |

## Commands

```bash
npm install
npm run dev
npm run build
npm run generate
npm run preview
npm run typecheck
npm run format
npm run images:prepare
```

Run `npm run typecheck` and `npm run format` before considering any task done.

## Site URL

The production site is served at **https://www.arturbomtempo.dev**. It is the `SITE_URL` constant in `nuxt.config.ts`, used both as `site.url` (sitemap, robots, absolute `og:image` URLs) and as `i18n.baseUrl`, and used to build absolute `canonical`, `hreflang` and `og:url` links. For a different environment (such as a preview deployment), override it with the `NUXT_PUBLIC_I18N_BASE_URL` and `NUXT_SITE_URL` environment variables instead of editing the config. Never commit `.env` files.

## Architecture

The project follows the standard **Nuxt 4 directory structure**, with components grouped by **module** (the page or domain they belong to). This is the most common layout in production Nuxt projects: it relies on Nuxt conventions (auto-imports, file-based routing, layouts) instead of inventing a custom one, and it scales by adding folders, not by rewriting.

```
.
├── app/
│   ├── app.vue
│   ├── error.vue
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
│   │   ├── about/
│   │   │   └── index.vue
│   │   ├── projects/
│   │   │   ├── index.vue
│   │   │   └── [id].vue
│   │   ├── contents/
│   │   │   └── index.vue
│   │   ├── contact/
│   │   │   └── index.vue
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
├── scripts/
├── nuxt.config.ts
├── vercel.json
└── package.json
```

The tree above is the target shape. Create folders only when they are actually needed.

### Responsibilities of each folder

| Folder                    | Responsibility                                                                                                                                                                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app/pages`               | Routes. Every route is a folder with an `index.vue` (`about/index.vue` → `/about`), plus dynamic files next to it (`projects/[id].vue`). Pages stay **thin**: they set SEO meta, select data and compose module components. No large markup blocks here. |
| `app/layouts`             | Page shells (header, footer, main wrapper). `default.vue` is applied automatically.                                                                                                                                                                      |
| `app/components/<module>` | Components that belong to a single page or domain (`home`, `about`, `projects`, `contents`, `contact`).                                                                                                                                                  |
| `app/components/ui`       | Generic, reusable building blocks with no business knowledge (buttons, cards, badges, inputs).                                                                                                                                                           |
| `app/components/layout`   | Pieces used by layouts (header, footer, navigation, theme toggle).                                                                                                                                                                                       |
| `app/composables`         | Reusable stateful logic, always named `useSomething` (`useTheme`, `useNavigation`). Auto-imported.                                                                                                                                                       |
| `app/utils`               | Pure, stateless helper functions. Auto-imported.                                                                                                                                                                                                         |
| `app/data`                | Static content of the portfolio (projects, experience, education, contents).                                                                                                                                                                             |
| `app/types`               | Shared TypeScript types and interfaces.                                                                                                                                                                                                                  |
| `app/assets`              | Files processed by the build (CSS, fonts, images imported from code).                                                                                                                                                                                    |
| `app/middleware`          | Route middleware. Global ones end with `.global.ts` and run on every navigation.                                                                                                                                                                         |
| `i18n/locales`            | Translation messages, one JSON file per locale. The only place where user-facing text is written.                                                                                                                                                        |
| `scripts`                 | Node scripts run by hand through npm scripts (`images:prepare`). Never imported by the app.                                                                                                                                                              |
| `modules`                 | Local Nuxt modules, registered automatically. Only for build-level integration (Vite plugins, hooks), never for app logic.                                                                                                                               |
| `public`                  | Files served as-is from the site root: favicons, `site.webmanifest`, images (`images/<folder>/`) and Open Graph images (`og/`).                                                                                                                          |

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
- Never import compiler macros (`defineProps`, `defineEmits`, `defineModel`, `defineSlots`, `withDefaults`) from `'vue'`; they are global in `<script setup>` and importing them makes the compiler warn on every `npm run dev`. Watch out for editor quick fixes that add these imports automatically.
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

| Component                    | Purpose                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UiBaseButton`               | Button or link (`to`, internal or external) with `primary` (main action), `outline-primary` (secondary action next to a primary one, and inactive filters), `outline` (neutral controls such as carousel arrows) and `ghost` variants, and `sm`, `md`, `lg`, `icon` sizes. Hover styles belong to the variants: do not override `bg-*`/`hover:*` colors per usage, so every button behaves the same; only layout classes (`w-full`, `group` for icon animations) are passed by callers. |
| `UiBaseCard`                 | Glass card (`surface-card`). Renders any tag or component through `as` (a `NuxtLink` for cards that are links). The hover lift (`surface-card-hoverable`) is on by default; pass `:is-hoverable="false"` for cards that are not interactive.                                                                                                                                                                                                                                            |
| `UiTechBadge`                | Rounded technology pill (`tech-badge`), `text-sm` by default; pass `class="text-xs"` for the compact version used in cards.                                                                                                                                                                                                                                                                                                                                                             |
| `UiBaseDialog`               | Accessible modal (`reka-ui`) with overlay, animations and a translated close button. Controlled by `v-model:open`.                                                                                                                                                                                                                                                                                                                                                                      |
| `UiBaseCarousel`             | Embla carousel with keyboard support, previous/next buttons and optional adaptive height. Slides via scoped slot.                                                                                                                                                                                                                                                                                                                                                                       |
| `UiPageHeader`               | Page title (`h1`) and introduction paragraph at the top of every page. `description-class` adjusts the paragraph width (`max-w-3xl` by default) and `class` the spacing below it (`mb-16` by default).                                                                                                                                                                                                                                                                                  |
| `UiFilterTabs`               | Group of toggle buttons (`aria-pressed`) used to filter a listing, bound with `v-model`. Option icons come from the `icon` scoped slot.                                                                                                                                                                                                                                                                                                                                                 |
| `UiErrorState`               | Error card (big glowing status code, title, description, requested path and an `actions` slot) used by `error.vue` and by "not found" states of detail pages.                                                                                                                                                                                                                                                                                                                           |
| `UiFormField`                | Label, field slot and translated error message (`role="alert"`), wired with `aria-describedby`. The slot exposes `fieldId`, `errorId` and `isInvalid`.                                                                                                                                                                                                                                                                                                                                  |
| `UiTextInput` / `UiTextArea` | shadcn-style text fields bound with `v-model`; `is-invalid` switches to the error border (`FIELD_INVALID_CLASSES`).                                                                                                                                                                                                                                                                                                                                                                     |
| `UiBackLink`                 | "Back to …" link with arrow and animated underline (`back-link`), used at the top of detail pages.                                                                                                                                                                                                                                                                                                                                                                                      |

### Dialogs

- Dialogs are only for secondary, short-lived information (such as the about page highlights). Primary content that someone may want to share or that search engines should index, such as a project, gets **its own route** instead (`/projects/[id]`).

- Keep the dialog's data while it closes: store the selection (preferably an index into the localized content) separately from the `open` state, so the closing animation still shows the content and a locale switch updates an open dialog.
- Every dialog needs a `DialogTitle` (and a `DialogDescription` when there is a subtitle) from `reka-ui`, for screen readers.
- Dialogs are not part of the first render: render them as lazy components (`<LazyAboutDetailsDialog>`) behind a `hasOpenedDialog` flag that becomes `true` on the first open, so `reka-ui` and the dialog code are only downloaded when needed.

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

- Global defaults (favicons, manifest, author, `theme-color`) belong in `app.head` inside `nuxt.config.ts`. Site-wide Open Graph defaults (`og:site_name`, default `og:image` per locale with its size, type and translated alt, `twitter:card`) are set once in `app.vue`; pages only override what is specific to them. The `lang` attribute, `hreflang` alternates and `og:locale` are generated by `useLocaleHead` in `app.vue`; do not set them by hand.
- Use `<NuxtLink>` for every internal link, never `<a href>`.
- External links (live demos, repositories) are real links, not buttons that call `window.open`: use `UiBaseButton` (or `NuxtLink`) with the full URL in `to` and `target="_blank"`. `NuxtLink` detects external URLs and adds `rel="noopener noreferrer"` automatically.
- Every page starts with `UiPageHeader` for its `h1` and introduction. Detail pages start with `UiBackLink` to their listing instead.
- **Every page is a folder with an `index.vue`**, just like components: `pages/about/index.vue`, `pages/contents/index.vue`. The only exceptions are the home page (`pages/index.vue`, which is already the root folder's `index.vue`) and the catch-all `pages/[...slug].vue`. The URL and the route name are the same as with a flat file (`/about`, route `about`).
    - Why: consistency with the component structure, and a section can gain child routes later (`/contents/[slug]`) just by adding a file next to `index.vue`, without moving or renaming anything. This is what `projects/` already does with `index.vue` and `[id].vue`.
    - Never create a flat file next to a folder with the same name (`projects.vue` + `projects/`): Nuxt would treat it as a parent route that must render `<NuxtPage>`.
    - Every `.vue` file inside `pages/` becomes a route. Do not put helper components, composables or types inside page folders; they belong to `components/<module>`, `composables` and `types`.
- Listing items link to their detail page with a real `<NuxtLink>` (stretched over the card), so the detail pages are crawlable and prerendered.

### Detail pages

- Detail data comes from the same content composable as the listing (`useProjectsContent()`), looked up by the route `id`. Ids are identical in every locale, so `/projects/portfolio`, `/en/projects/portfolio` and `/es/projects/portfolio` show the same item, and switching the locale keeps the user on it.
- Set complete SEO meta for each item: title with the item name, `description`, `ogImage` (`getProjectOpenGraphImagePath(id)`, an absolute URL built with `useSiteConfig().url`) with `ogImageAlt`, `ogType: 'article'` and `twitterCard: 'summary_large_image'`, so shared links show a rich preview.
- When the `id` does not exist, render a translated not-found state built with `UiErrorState` (`ProjectsProjectNotFound`), with the listing as the primary action and the home page as the secondary one. Return a real **404** status with `setResponseStatus(404)` and set `robots: 'noindex, nofollow'`.
- Opening a detail page scrolls to the top; the browser back button restores the listing's scroll position (default Nuxt behavior, do not override it).

### Forms

- Validation schemas are written with **Zod 4**, inside a `computed` so their messages come from `t()` and update when the locale changes.
- Forms use the `useSchemaForm(schema, initialValues)` composable: it validates on submit and, after the first submit, revalidates on every change. It returns `values`, `errors` (first message per field), `isSubmitting`, `handleSubmit` and `reset`.
- Fields are built with `UiFormField` + `UiTextInput`/`UiTextArea`. Every field has an `id`, a `<label for>`, `name`, the right `autocomplete` and `aria-describedby` pointing to its error. Forms use `novalidate`, since validation and messages are ours.
- While submitting, the submit button is disabled and shows a "sending" label. On success, show a success toast and reset the form; on any failure (HTTP error, network error or a negative response from the service), show an error toast and **keep** what the user typed.
- User feedback for asynchronous actions uses toasts from `vue-sonner` (`import { toast } from 'vue-sonner'`). The `Toaster` is mounted once in the default layout (`LayoutAppToaster`), following the site theme.

### Contact form (FormSubmit)

- Messages are sent from the browser to FormSubmit's AJAX endpoint, configured in `runtimeConfig.public.contactFormEndpoint` (override with `NUXT_PUBLIC_CONTACT_FORM_ENDPOINT`). This works on any hosting, including static output.
- The payload includes FormSubmit options (`_captcha`, `_template`, `_subject`) and the `_honey` honeypot field, a hidden input that bots fill and FormSubmit discards.
- A submission is only successful when FormSubmit answers `success: "true"`; it can answer HTTP 200 with `success: "false"` (for example when the form is not activated).
- FormSubmit answers with a JSON body but a **`Content-Type: text/html`** header. `$fetch` picks the parser from that header, so the request must set `responseType: 'json'`; without it the response is a raw string, `success` is `undefined` and a delivered message is reported as an error.
- Never send real messages while testing. Intercept requests to `formsubmit.co` (Playwright `page.route`) and fake the responses **exactly as FormSubmit sends them** (status 200, `text/html; charset=UTF-8`, JSON body with `success` as the string `"true"` or `"false"`). To check the real service without e-mailing the owner, point `NUXT_PUBLIC_CONTACT_FORM_ENDPOINT` to an address on the reserved `example.com` domain: FormSubmit answers `success: "false"` (activation needed) and nothing is delivered.

### Listings with filters

- Filters live in the URL query (`/contents?type=video`), not only in component state, so a filtered view can be shared, survives a reload and is rendered on the server. The default filter is omitted from the URL.
- Read the query through a `computed` with getter and setter; the setter calls `navigateTo({ query }, { replace: true })` so filtering does not pile up history entries. Invalid values fall back to the default filter.
- Use `UiFilterTabs` for the buttons, so every filterable listing (contents, talks) looks and behaves the same.

### External content cards

- A card that points to an external page is a link as a whole: `UiBaseCard` with `:as="NuxtLink"`, the full URL in `to` and `target="_blank"`.
- Thumbnails are stored locally in `public/images/contents/` (never hotlink third-party images such as LinkedIn's signed URLs, which expire). The card still shows a fallback (gradient with the content type icon) on the image `error` event.
- Dates are stored as ISO strings (`2025-11-18`) and displayed with `formatDate(date, localeProperties.language)` inside a `<time datetime>` element.
- Icons next to text that can wrap (titles) use `shrink-0`, so a long title never squeezes the icon.

### Navigation active state

- The active state of the main navigation is computed in `useNavigation()` (`isActive`), not by `router-link-active`, because detail pages (`/projects/[id]`) are sibling routes of their listing. The home item matches only its exact path; the other sections also match their nested paths, so "Projects" stays highlighted on a project page.
- Navigation links expose it as `data-active`, styled with `data-active:text-foreground` and by the `link-underline` utility.
- Always pass internal paths through `useLocalePath()` (`:to="localePath('/about')"`) so the current locale prefix is kept.
- Use semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`) and a single `h1` per page.
- Every image needs a meaningful `alt` text.
- Errors are rendered by **`app/error.vue`**, inside the default layout (header and footer stay available). It handles every status: 404 shows "page not found" with the requested path and actions to the home page and the projects; any other status shows "something went wrong" with "try again" (`reloadNuxtApp`) and "back to home". It sets a translated title and `robots: 'noindex, nofollow'`.
- Leave the error page with buttons that call `clearError({ redirect: localePath(path) })`; links of the header and the language switcher also work, because navigating clears the error.
- Unknown URLs are caught by **`app/pages/[...slug].vue`**, which throws `createError({ statusCode: 404, fatal: true })` in `<script setup>` and has an empty `<template>`. Because the catch-all exists for every locale (`/en/...`, `/es/...`), the 404 page is rendered in the language of the URL and the router does not warn about unmatched paths. Do not replace it with `definePageMeta({ validate })` or a route middleware with `abortNavigation`: both make Nuxt log `NUXT_E1005` on every direct visit to a missing page.
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

### Design decisions

- The layout container is `mx-auto w-full max-w-350` plus explicit horizontal padding (Tailwind v4 `container` has no centering or padding).
- `UiBaseButton` keeps shadcn's `[&_svg]:size-4`, so icons inside buttons are always 16px.
- Card styles that combine many properties (`surface-card`, `tech-badge`) are single `@utility` classes in `main.css`, including their `.light` overrides. Utilities passed in templates always win over them (cascade layers).
- Third-party CSS that is not in a cascade layer (such as `vue-sonner`) always wins over Tailwind v4 utilities, whatever their specificity. Style those components through their CSS variables first (`--normal-bg`, `--normal-text`, `--normal-border` on the toaster) and use the important modifier (`text-muted-foreground!`) only where no variable exists.
- The palette colors `red-500`, `red-600`, `blue-500` and `pink-500` are redefined in `@theme` with their Tailwind v3 (hex) values. Prefer semantic tokens (`destructive`) for new code.
- Inter and Geist are loaded only in the `normal` style; italic text is synthesized by the browser. Do not add italic font files.
- After any visual change, check dark and light themes, desktop and mobile, and hover, focus and open states.

## Performance

The target is Lighthouse 100 on desktop and as close as possible on mobile, with accessibility, best practices and SEO at 100 on every page.

### Images

- Every image is local: `public/images/<folder>/<slug>.webp` (`profile`, `testimonials`, `projects`, `contents`). Data files reference them by path (`/images/projects/portfolio.webp`). Never hotlink remote images.
- Add new images in any format to the right folder and run `npm run images:prepare`: it converts them to WebP with a maximum width per folder, deletes the originals and creates the missing project Open Graph images (`public/og/projects/<id>.jpg`, 1200×630).
- Render images with `NuxtImg`, always with `width`, `height` (no layout shift) and `alt`. It serves AVIF/WebP in the right size: with the IPX provider locally and Vercel Image Optimization on Vercel (detected automatically).
- Responsive images use `sizes` with **breakpoint-prefixed** keys (`sizes="sm:90vw md:45vw lg:340px"`). An unprefixed value produces broken `1w`/`2w` candidates. Fixed-size images (avatars) use `densities="x1 x2"` instead.
- Only images visible in the first viewport (hero avatar, project cover, first row of cards) are `loading="eager"` with `fetchpriority="high"` (or `:preload="{ fetchPriority: 'high' }"` for the single LCP image). Everything else is `loading="lazy"`.
- Generated widths come from `image.screens` in `nuxt.config.ts`; Vercel only serves widths listed there. When an image needs a new rendered size, add it to `screens` instead of accepting a much larger snapped width.

### JavaScript and CSS

- Keep the global layout light: everything in the header, footer and `app.vue` is downloaded on every page. Do not add heavy libraries there; `LayoutLanguageSelect` is a small custom disclosure menu instead of `reka-ui`'s select for this reason.
- Components that are not needed for the first render are lazy: `LazyLayoutMobileMenu`, dialogs (see [Dialogs](#dialogs)) and the toaster (`<ClientOnly><LazyLayoutAppToaster /></ClientOnly>`, which also loads the `vue-sonner` CSS only then).
- Fonts are self-hosted by `@nuxt/fonts` with the `latin` subset only. Only Geist (headings, LCP text) is preloaded.
- Do not try `hydrate-on-*` lazy hydration or `features.inlineStyles` for small components: both were measured here and did not help.

### Measuring

- Measure against the production build (`npm run build` then `node .output/server/index.mjs`), never against `npm run dev`.
- Run Lighthouse (mobile and desktop) for every page and axe in **both themes**. On localhost, the simulated mobile FCP (~1.8 s) is a Lantern floor, not a real problem.

## Accessibility

- New color combinations should meet WCAG AA contrast (4.5:1 for normal text) in both themes. The only accepted exception is the brand green (`hsl(145 63% 43%)` with white text on buttons, and as text on the light background), kept as the brand color by the owner's choice; axe reports it as `color-contrast`. Do not darken it or change its foreground without asking.
- Headings follow the document order with no skipped levels: one `h1` per page (`UiPageHeader`), then `h2` for sections and card titles, `h3` inside them.
- Apart from the brand green contrast above, axe must report 0 violations on every page in dark and light themes.

## SEO and Open Graph

- `@nuxtjs/sitemap` generates `sitemap_index.xml` with one sitemap per locale (`__sitemap__/pt.xml`…) from the prerendered routes, with `hreflang` alternates. `@nuxtjs/robots` generates `robots.txt` pointing to it. Do not add them to `public/` nor to `nitro.prerender.routes` (that would create a folder instead of the file).
- Pages that must not be indexed (errors, unknown project) set `robots: 'noindex, nofollow'`; they are left out of the sitemap automatically.
- Open Graph images are static 1200×630 JPEGs in `public/og/`: one per locale (`og/pt.jpg`, `og/en.jpg`, `og/es.jpg`, used by every page) and one per project (`og/projects/<id>.jpg`). Paths are built with the helpers in `app/utils/openGraphImage.ts`. A new project needs its OG image (`npm run images:prepare` creates it from the cover).

## Security

Security headers are set by `nuxt-security` and by `routeRules` in `nuxt.config.ts`, for both the Node server and Vercel.

- **Content Security Policy**: `default-src 'self'`, scripts only from `'self'` plus hashes (prerendered pages) or a nonce (server responses), no inline event handlers, no objects, no framing, `connect-src` limited to `'self'` and `https://formsubmit.co`. `'unsafe-inline'` is allowed only for styles (Vue and color-mode set inline styles).
- Using a new third-party service means adding its origin to the narrowest directive (`connect-src` for APIs, `img-src` for images, `frame-src` for embeds). Never relax `script-src` or `default-src`, and never add `'unsafe-eval'`.
- `'strict-dynamic'` and SRI (`sri: false`) are disabled on purpose: SRI breaks the font preload (integrity mismatch) and, without it, `'strict-dynamic'` would block Nuxt's own chunks.
- Code that compiles functions at runtime breaks the CSP. Zod is configured with `z.config({ jitless: true })` in the contact form for this reason.
- Other headers: HSTS (2 years, subdomains, preload), `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Cross-Origin-Opener-Policy: same-origin`, `Cross-Origin-Embedder-Policy: credentialless` and a restrictive `Permissions-Policy`. `/og/**` sends `Cross-Origin-Resource-Policy: cross-origin` so social networks can fetch the previews.
- Headers that must reach Vercel are declared in `routeRules` (global `'/**'`) so Nitro writes them to the Vercel output config.
- The rate limiter is disabled (static site, no API routes) and `removeLoggers` is off (it triggers a build warning and there are no `console` calls to remove).
- The site sets no cookies and stores only the theme in `localStorage`.

## Deployment

- The site is deployed on **Vercel**. Import the repository with the default settings (Root Directory is the repository root); `vercel.json` pins what would otherwise be detected:
    - `framework: "nuxtjs"`, `installCommand: "npm ci"` (exact lockfile) and `buildCommand: "npm run build"`. Nitro detects Vercel and writes `.vercel/output` (Build Output API) by itself, so there is no `outputDirectory`.
    - `regions: ["gru1"]` (São Paulo) for the server function, close to the main audience. It only serves non-prerendered URLs (the 404 fallback).
    - `github.silent` avoids a bot comment on every commit and pull request.
- Headers, redirects and rewrites are **never** written in `vercel.json`: they belong to `routeRules` / `security` in `nuxt.config.ts`, which Nitro turns into the Vercel routing config. Keeping them in one place avoids rules that conflict or silently override each other. Never add an SPA rewrite to `/index.html`; it would hide every 404.
- Domains (`www.arturbomtempo.dev` as primary, the apex redirecting to it) are configured in the Vercel dashboard, not in code.
- Every page is prerendered (`crawlLinks` from `/`, `/en` and `/es`) and public assets are precompressed. Unknown URLs fall back to the server function, which renders the translated 404.
- Images are optimized by Vercel Image Optimization (`/_vercel/image`), ignored by the prerender crawler.
- `.vercel` (local build output) is git-ignored.
- After every deploy, check one page in each locale, a project page, a 404, the security headers and send one real message through the contact form.

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

If the content grows (for example many projects or articles with long text), the next step is to move `app/data` to Nuxt Content collections, not into the locale JSON files.

### UI messages

- Every UI message lives in `i18n/locales/<locale>.json` and is read with `t('key')`.
- A new key must be added to **all three** locale files in the same change.
- Keys are in English, camelCase, grouped by module and mirroring the component structure: `header.*`, `nav.*`, `footer.*`, `home.*`, `home.seo.*`.
- Interpolate dynamic values with named parameters: `t('footer.rights', { year })`.
- `|` is the pluralization separator in vue-i18n. To show a literal pipe, escape it as `{'|'}`.
- `@` starts a linked message in vue-i18n. To show a literal at sign (such as in an e-mail placeholder), escape it as `{'@'}`: `"seu{'@'}email.com"`.

### Switching locales

- Switch locales with `setLocale(code)`; list them with `locales` from `useI18n()`.
- Switching the locale must be seamless: only the texts change, without remounting the page, replaying enter animations or scrolling. This is done by two pieces that must be kept:
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
- Optional fields are omitted when there is no value. Never use placeholders such as `'#'` or empty strings; the type marks them as optional (`liveUrl?: string`) and the component renders the related UI only when the value exists.
- **Every piece of content must exist in all three languages.** The three locale files of a module must keep the same structure, the same number of items **in the same order**, and the same number of entries in every inner list (details, activities, technologies). Adding, removing or reordering an item is always done in `pt`, `en` and `es` in the same change.
- Fields that are not translated (`id`, images, URLs, dates, `type`, `platform`, people's names and technology names) must be identical in the three files; only the human-readable text changes. Keep proper names written the same way (`Express.js`, `Thiago Porto`).
- When a source text already exists in another language (such as an article originally published in English), use its original title in that locale. Icons are stored as Lucide components imported from `@lucide/vue` (`icon: Trophy`), typed as `LucideIcon`.

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
- Lucide 1.x no longer ships brand icons (GitHub, LinkedIn…). Brand logos come from **`@tabler/icons-vue`** (MIT), whose outline style (2px stroke on a 24px grid) matches Lucide. Import them by name, like Lucide icons:

```vue
<script setup lang="ts">
import { IconBrandGithub } from '@tabler/icons-vue';
</script>

<template>
    <IconBrandGithub class="size-4" />
</template>
```

- Do not use other icon libraries (`simple-icons` lacks LinkedIn and only has filled logos; Material Design Icons are filled too).
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

| Item                     | Convention        | Example                                |
| ------------------------ | ----------------- | -------------------------------------- |
| Component folders        | PascalCase        | `ProjectCard/`                         |
| Module folders           | lowercase         | `projects/`                            |
| Page folders and layouts | kebab-case        | `pages/about/index.vue`, `default.vue` |
| Composables              | camelCase + `use` | `useTheme.ts`                          |
| Utils and data files     | camelCase         | `formatDate.ts`                        |
| Variables and functions  | camelCase         | `selectedFilter`                       |
| Constants                | UPPER_SNAKE_CASE  | `MAX_FEATURED_PROJECTS`                |
| Types and interfaces     | PascalCase        | `Project`, `ContentType`               |
| Booleans                 | `is/has/should`   | `isActive`, `hasGithubUrl`             |

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

`modules/vercel-header-routes-continue.ts` runs only with the `vercel` preset. Nitro writes `routeRules` headers to `.vercel/output/config.json` as routes without `continue: true`, so a matched header route would stop routing before the static files and the 404 fallback function. The module adds `continue: true` to routes that only set headers. Remove it once Nitro does this itself (check the generated `config.json` after `NITRO_PRESET=vercel npm run build`).
