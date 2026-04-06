# Copilot Instructions — Mokse Website

## Project Overview

This is the **Mokse** nonprofit website — an organization dedicated to empowering justice-impacted individuals through education, consulting, and advocacy. The site is built with **Next.js (App Router)**, **Chakra UI v3**, and **TypeScript**, containerized with Docker and backed by MongoDB and the Notion API.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.1 (App Router, React Server Components) |
| UI Library | Chakra UI v3 (`@chakra-ui/react ^3.34.0`) with `defaultSystem` |
| Language | TypeScript 5 (strict mode, ESNext target) |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"` in globals.css) |
| Theme | next-themes 0.4.6 (`attribute="class"`, wrapped in `ColorModeProvider`) |
| Icons | `react-icons` (primarily `react-icons/fa`); custom registry in `components/ui/icons/` |
| Fonts | Google Fonts via `next/font/google`: **Poppins** (headings), **Open Sans** (body/nav) |
| Database | MongoDB 7 (containerized, connected via `MONGODB_URI`) |
| CMS/Data | Notion API (`@notionhq/client`) for resources database |
| Package Manager | npm (lockfileVersion 3 `package-lock.json`) |
| Node version | 20 (Alpine in Docker; recommended 20+ locally) |

> **Tailwind Typography is NOT installed.** `prose*` classes will not work. Use Chakra UI components and props for all text styling.

---

## Repository Layout

```
.
├── app/
│   ├── (Pages)/               # Route group — page routes (no URL effect)
│   │   ├── about/page.tsx
│   │   ├── admin/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── programs/
│   │   │   ├── navigators-network/page.tsx
│   │   │   └── stop-the-stigma/page.tsx
│   │   ├── resources/page.tsx  (+ sub-files: Navigators.tsx, Networks.tsx, Calendar.tsx)
│   │   └── services/page.tsx
│   ├── (API Routes)/api/       # Route group — API handlers
│   │   ├── blog/[year]/[month]/[day]/route.ts
│   │   ├── contact/route.ts    (POST — currently logs to console, email TODO)
│   │   ├── notion/database/route.ts
│   │   └── search/route.ts
│   ├── globals.css             (only: @import "tailwindcss")
│   ├── layout.tsx              (root layout — Open Sans font, Provider wrapper)
│   ├── loading.tsx
│   ├── page.tsx                (homepage)
│   └── provider.tsx            (ChakraProvider + ColorModeProvider)
├── components/
│   ├── about/team-member-card.tsx
│   ├── common/footer.tsx
│   ├── common/navbar.tsx
│   ├── common/iconbutton.tsx
│   ├── contact/contact-form.tsx
│   ├── home/feature-card.tsx
│   ├── page-builder/template.tsx   ← reusable page layout components
│   ├── search/search-bar-card.tsx
│   ├── services/{faq-item,service-card,support-card}.tsx
│   └── ui/
│       ├── breakpoints.tsx     (useDeviceSize hook via Chakra useBreakpointValue)
│       ├── color-mode.tsx      (useColorMode, useColorModeValue, ColorModeButton)
│       ├── fonts.ts            (poppins, openSans, geistSans, geistMono exports)
│       ├── icons/
│       │   ├── icon-registry.ts  (maps IconName strings to react-icons components)
│       │   ├── icon.tsx          (<Icon name="..." size={} color={} />)
│       │   └── index.ts
│       ├── toaster.tsx
│       └── tooltip.tsx
├── data/                        # Static/typed data arrays
│   ├── contact.tsx
│   ├── empowerment.tsx
│   ├── get-involved.tsx
│   ├── services.ts              (services[], supportOptions[], faqItems[])
│   └── team.ts                  (executiveBoard[], teamMembers[])
├── public/assets/               # Images organized by section
├── docker/mongo/init/           # MongoDB init scripts (creates appuser)
├── Dockerfile                   (multi-stage: base / deps / builder / runner / dev)
├── docker-compose.yml
└── .env.example
```

---

## Essential Conventions

### 1. Page Files — `"use client"` at top
All page files and most components use `"use client"`. Server Components are the exception.

### 2. Import Aliases
- `@/*` resolves to the repo root (e.g. `@/components/ui/icons/icon`).
- Chakra UI and Next.js components are aliased to avoid collisions:
  ```tsx
  import NextLink from "next/link";
  import NextImage from "next/image";
  import { Link as ChakraLink, Image as ChakraImage } from "@chakra-ui/react";
  ```

### 3. Responsive Layout Pattern
Use the `checkDeviceSize` / `useDeviceSize` hook from `components/ui/breakpoints`:
```tsx
import checkDeviceSize from "@/components/ui/breakpoints";
// or
import useDeviceSize from "@/components/ui/breakpoints";

// In navbar.tsx pattern:
const deviceSize = useDeviceSize();
const notMobileDevice = deviceSize !== "base" && deviceSize !== "sm";

// In page.tsx / footer.tsx pattern (checkDeviceSize returns the breakpoint string):
const notMobileDevice = checkDeviceSize(); // truthy for non-mobile breakpoints
```
Pages render separate desktop and mobile JSX branches based on this flag.

### 4. Color Mode
```tsx
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";
const { colorMode, toggleColorMode } = useColorMode();
// Chakra prop-based theming:
_light={{ color: "white" }}
```
The ThemeProvider uses `attribute="class"` (class-based dark mode).

### 5. Icons
Add new icons to `components/ui/icons/icon-registry.ts` and use them via the `<Icon>` component:
```tsx
import { Icon } from "@/components/ui/icons/icon";
<Icon name="Facebook" size={6} color="teal.focusRing" />
```
Available icon names are the keys of `iconRegistry` (typed as `IconName`). All icons come from `react-icons/fa`.

### 6. Fonts
```tsx
import { poppins, openSans } from "@/components/ui/fonts";
// Usage:
<Text className={poppins.className}>Heading text</Text>
<Text className={openSans.className}>Body text</Text>
// Or as CSS variable:
<Text className={poppins.variable}>…</Text>
```

### 7. Primary Color
`teal.focusRing` is the site's primary teal accent. Use `teal.solid` for solid background sections.

### 8. Page Layout Components (`components/page-builder/template.tsx`)
Use these composable layout builders for new pages:
```tsx
import { PageBuilder, HeaderTemplate, BodyTemplate, SectionTemplate, LinkBuilder } from "@/components/page-builder/template";

<PageBuilder>
  <HeaderTemplate title="Page Title" image="/assets/..." imageHeight="58vh" imageLabel="Alt label" description="..." />
  <BodyTemplate>
    <SectionTemplate title="Section Heading" description="...">
      {/* content */}
    </SectionTemplate>
  </BodyTemplate>
</PageBuilder>
```

### 9. Data Files
Static content lives in `data/`. Add new typed data here instead of hardcoding in components. Files can be `.ts` or `.tsx` (if they include JSX).

### 10. API Routes
Located under `app/(API Routes)/api/`. Use `NextRequest` / `NextResponse` from `next/server`. Type request bodies with interfaces. Return structured JSON with appropriate HTTP status codes.

---

## Environment Variables

Copy `.env.example` to `.env` before running. Key variables:

| Variable | Purpose |
|---|---|
| `MONGODB_URI` | MongoDB connection string (app container) |
| `NOTION_DATABASE_KEY` | Notion database ID for resources |
| `NOTION_TOKEN` | Notion integration token |
| `NOTION_BASE_URL` | Defaults to `https://api.notion.com/v1/` |
| `MONGO_ROOT_PASS` / `MONGO_APP_PASS` | Change from defaults for production |

---

## Dev Commands

```bash
# Local (Node 20+ required)
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint      # ESLint (flat config, next/core-web-vitals + typescript presets)

# Docker (recommended)
cp .env.example .env
docker compose up --build   # starts Next.js + MongoDB

# Production Docker
export COMPOSE_PROFILES=prod BUILD_TARGET=runner NODE_ENV=production
docker compose --env-file .env up --build -d
```

---

## Known Issues & Workarounds

1. **`tsconfig.json` Chakra path alias**: `@chakra-ui/react` is aliased to `../../packages/react/src` — this is a development artifact. If you see module-not-found errors for Chakra, check that `node_modules/@chakra-ui/react` is installed; the alias is overridden at runtime by the bundler when the local path doesn't exist.

2. **`breakpoints.tsx` export naming**: The default export is `useDeviceSize`. Some files import it as `checkDeviceSize` (an alias). Both work — they reference the same hook. In new code, prefer `useDeviceSize` and derive a boolean like: `const notMobileDevice = useDeviceSize() !== "base" && useDeviceSize() !== "sm"`.

3. **Contact form is a placeholder**: `app/(API Routes)/api/contact/route.ts` logs submissions to the console. No email is sent. Integration with an email service (SendGrid / AWS SES) is marked as TODO.

4. **ESLint note**: `eslint@10.1.0` requires Node.js `^20.19.0`. Ensure you are on Node 20.19+ or 22+ when running `npm run lint`.

5. **Mobile About page**: `app/(Pages)/about/page.tsx` renders `null` for mobile — the mobile layout has not been implemented yet.

6. **`next.config.ts`**: `output: 'standalone'` is commented out. The Dockerfile `runner` stage copies `.next/standalone`, so this must be re-enabled for production Docker builds to work correctly.

---

## Adding a New Page

1. Create `app/(Pages)/<slug>/page.tsx` with `"use client"` at the top.
2. Use the `PageBuilder` / `HeaderTemplate` / `BodyTemplate` / `SectionTemplate` layout components.
3. Add the route to the `<Navbar>` links in `components/common/navbar.tsx`.
4. Add static page data to a new file in `data/` if needed.
5. Place images under `public/assets/<slug>/`.

## Adding a New API Route

1. Create `app/(API Routes)/api/<path>/route.ts`.
2. Export named async functions: `GET`, `POST`, `PUT`, `DELETE` as needed.
3. Use `NextRequest` / `NextResponse` with typed interfaces for request/response bodies.
4. Access environment variables via `process.env.VARIABLE_NAME`.
