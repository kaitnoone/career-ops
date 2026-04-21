# React Frameworks & RSC — Study Guide

Infrastructure-level context for senior React interviews: build tools, the Next.js + Remix + React Router convergence, and Server Components.

Companion to:
- `react-whiteboard-study-guide.md` — practical live-coding prep
- `react-ecosystem-and-history.md` — libraries by category + history

This one answers the "can you talk about the landscape intelligently?" signal. Different from the whiteboard guide (which is hands-on code).

---

## Why this matters for interviews

Senior interviewers will ask some version of:

- "What would you reach for if starting a new project today?"
- "Why does the ecosystem look the way it does?"
- "What's the difference between [X] and [Y]?"
- "What do you think about Server Components?"

The right answer is rarely a recommendation — it's a framed trade-off. "Depends on X, leans toward Y because Z." Showing you understand *why* the landscape is shaped the way it is lands as senior-flavor much more than naming specific tools.

---

## Part 1: Build tools — what bundles your React

### The acronyms you'll hear

- **SPA** = Single Page Application. One HTML file; JS handles routing, rendering, interactivity in the browser. URL changes don't hit the server; the router intercepts.
- **CRA** = Create React App. The official React starter from 2016. **Officially deprecated March 2023** — don't start new projects here.
- **Vite** = modern build tool + dev server. Replaced CRA as the default for SPAs.

"CRA/Vite SPA" = a client-only React app, bundled with either CRA (legacy) or Vite (current). As opposed to Next.js / Remix, which have server rendering baked in.

### Vite's origin (a genuinely interesting story)

**Vite was created by Evan You, the creator of Vue.js.** Released April 2020.

- 2020: Vite 1.0 — Vue-focused. Evan's response to slow Vue CLI dev servers. Name is French for "fast."
- 2021: Vite 2.0 — rewritten to be **framework-agnostic**. Official plugins for React, Vue, Svelte, Preact.
- 2022–2023: React ecosystem adopted it en masse as CRA fell behind.
- 2023: CRA deprecated; React team's own docs started recommending Vite for SPAs.
- 2024+: Underlying build layer for SvelteKit, Nuxt 3, Remix v2+, Astro, Vitest. Cross-ecosystem convergence.

**The cross-ecosystem twist:** a Vue person built the default tool for React SPAs. Evan You quietly became one of the most influential people in React infra without working on React.

### Vite's competitors

| Tool | Made by | Language | Shape | Status in 2026 |
|---|---|---|---|---|
| **webpack** | community / Tobias Koppers | JS | Ultra-configurable, slow. | The old king. Still huge in legacy/enterprise. Being replaced. |
| **Turbopack** | Vercel | Rust | Webpack successor built for Next.js. | Stable in Next dev since 2024, prod since 2025. Tightly coupled to Next. |
| **Rspack** | ByteDance | Rust | Drop-in webpack replacement API, much faster. | Gaining traction at enterprises with big webpack configs. Runs TikTok. |
| **Rsbuild** | ByteDance | Rust (on Rspack) | Higher-level Vite-alternative on top of Rspack. | Comparable to Vite. Small Western adoption. |
| **Parcel** | community | JS | Zero-config bundler from the webpack era. | Niche. Lost mindshare to Vite. |
| **Bun** | Oven | Zig | Runtime + bundler + package manager + test runner in one. | Growing fast. Competes with Vite *and* Node. |
| **Farm** | community | Rust | Vite-alternative with Rust speed. | Young. Not mainstream in the West yet. |
| **Snowpack** | Skypack | JS | Earlier ESM-first pioneer. | Dead. Vite absorbed this space. |

### Lower-level bits (often mistaken for competitors)

These are what the fast tools are *built on*. They're not direct Vite competitors — they're layers inside or adjacent.

| Tool | What it is | Used by |
|---|---|---|
| **esbuild** | Go-based bundler/transpiler. Blazing fast. Limited plugins. | Vite (dev pre-bundling), tsup, Netlify |
| **SWC** | Rust-based JS/TS transpiler. Replaces Babel. | Next.js, Turbopack, Rspack |
| **Rollup** | JS bundler, specialized for libraries. | Vite (for production builds) |
| **Rolldown** | Rust rewrite of Rollup, same API. | Will replace Rollup inside Vite. Watch this — next perf jump. |

### The underlying story

**JS-based build tools are being replaced by Rust/Go-based ones.** Three generations:

1. **Gen 1 (JS, bundle-first):** webpack, Parcel, Rollup. Bundle everything before serving. Slow dev startup.
2. **Gen 2 (ESM-first dev, JS tooling underneath):** Vite. Serve ES modules in dev; bundle (via Rollup) for production.
3. **Gen 3 (Rust/Go throughout):** Turbopack, Rspack, Rolldown, SWC, esbuild. Same mental model, fully native-code speed.

Vite is in a transitional spot — pioneered Gen 2, moving to Gen 3 via Rolldown.

### Where Vite is genuinely at risk

- **Next.js-heavy codebases** → Turbopack (built in, no choice)
- **Enterprise shops with massive webpack configs** → Rspack (drop-in is less work than migrating to Vite)
- **All-in-Bun shops** → Bun's bundler
- **Cold-start perf junkies** → whatever's fastest on benchmarks that month

### Interview-ready talking point

> "The landscape is moving from JS-based bundlers to Rust. Vite won the SPA dev experience by being ESM-first, but the bundler layer underneath (Rollup) is getting rewritten as Rolldown. Turbopack is Next-native, Rspack is webpack-compatible, Bun is runtime+bundler combined, Parcel is legacy. For new projects: Vite for SPAs, Next (Turbopack) for full-stack, Rspack if migrating a big webpack codebase. Watch Rolldown — it's the next Vite-layer perf jump."

That last line is the "I read changelogs" senior signal.

---

## Part 2: Next.js — the dominant full-stack framework

### What it actually is

**A full-stack React framework.** React is a library for rendering UI. Next.js wraps React in a complete application shell: routing, rendering, data fetching, API endpoints, deployment conventions, image/font optimization, caching, and a server runtime. Opinionated about how production React should be built.

If React is the engine, Next.js is the whole car. Calling it "a server/routing layer" is like calling Rails "a routing library for Ruby" — technically true, dramatically understates it.

### What ships in the box

| Feature | What it replaces |
|---|---|
| **File-based routing** | No router needed; `app/about/page.tsx` → `/about` |
| **Server Components + Client Components** | Manual server/client split |
| **Server Actions** | Hand-rolled API + fetch for mutations |
| **API Routes / Route Handlers** | Express/Fastify for simple APIs |
| **`<Image>` component** | Hand-rolled responsive images, lazy loading, WebP/AVIF |
| **`next/font`** | FOUT/FOIT mitigation, layout-shift prevention |
| **Middleware** | Before-request interception (auth, redirects, A/B) |
| **Static generation (SSG)** | Dedicated SSG tools |
| **Server rendering (SSR)** | Manual Node server |
| **Incremental Static Regeneration (ISR)** | Stale-while-revalidate at framework level |
| **Built-in CSS / Sass / CSS Modules** | Bundler config |
| **Built-in TypeScript** | tsconfig wrangling |
| **Caching layers** | Manual cache-control |

### Two routers (both still exist — you'll see both in real codebases)

1. **Pages Router** (2016–present). Files in `pages/`. Data via `getStaticProps`, `getServerSideProps`, `getInitialProps`. API routes in `pages/api/`. Mature, widely deployed, still supported.
2. **App Router** (Next 13, July 2023). Files in `app/`. **Server Components by default**, `'use client'` opt-in. Conventions: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`. Where RSC landed in production for the first time.

**New work goes in App Router. Legacy code is Pages Router. Both coexist in the same project during migrations.**

### Why Next.js is dominant

Not because it's best-designed — reasonable people disagree. Because of:

1. **Vercel deployment.** `git push` and you're live. Previews per PR. Hard to compete with.
2. **Ecosystem gravity.** Tutorials, boilerplates, UI library docs all target Next. "Works with Next" is marketing.
3. **RSC rollout.** First to ship Server Components in production; everything else is catching up.
4. **Marketing budget.** Vercel funds a lot of React/Next content. Compounds.
5. **The `<Image>` component** — sounds trivial, genuinely hard to replicate well.

### The real gotchas

1. **Caching confusion.** App Router has four caches: data cache (fetch), full route cache, router cache, request memoization. They interact. Next 15 made these less aggressive by default because everyone was confused. Still a common source of bugs.
2. **`'use client'` composition.** You can pass Server Components as `children` to Client Components, but not as regular props. Mental overhead.
3. **Bundle pollution at the boundary.** Importing a client-only module from a server component can accidentally pull dependencies into the client bundle. Silent.
4. **"Works on Vercel, breaks on self-host."** ISR and Image optimization need runtime features. Self-hosting loses some magic.
5. **Version churn.** Pages → App was a huge shift. Next 15 changed caching defaults. Next 16 keeps iterating.

### Interview-ready one-liner

> "Next.js is the default full-stack React framework — routing, rendering, API endpoints, Server Components, Server Actions, and a caching layer. Pages Router is legacy, App Router is current. Coming from Remix, the model is mostly familiar — main shift is from loaders/actions to Server Components fetching directly and Server Actions for mutations. The multi-layer caching is where it trips people up."

---

## Part 3: Remix → React Router v7 (the merger you should know about)

### The short version

**Remix and React Router were always built by the same people.** In 2024, they formally merged: Remix v3 became React Router v7. The two APIs unified under the React Router name. Remix as a brand is being retired.

If you've used Remix, your skills didn't get deprecated — they got renamed.

### Timeline

1. **2014:** React Router ships. Built by Michael Jackson + Ryan Florence.
2. **2020–2022:** Same two people build **Remix** — a full-stack framework on top of React Router internals, with its own API (`loader`, `action`, `<Form>`, `useNavigation`).
3. **Oct 2022:** Shopify acquires Remix Software.
4. **2023:** Remix team starts backporting Remix innovations into React Router. **React Router v6.4** introduces data APIs — `loader`, `action`, `<Form>`, `useNavigation`, `useFetcher`. All Remix concepts, available in React Router itself.
5. **May 2024:** Ryan Florence announces the merger. Remix v3 → React Router v7.
6. **Nov 2024:** React Router v7 releases. APIs unified.

### What changed in practice

React Router v7 has **two modes**:

- **As a library** — classic usage. `<BrowserRouter>`, `<Link>`, `useNavigate`. For SPAs. Still works the way it always did.
- **As a framework** — what Remix used to be. File-based routing, loaders, actions, server rendering. Same APIs Remix had.

You can graduate from "library mode" to "framework mode" within the same tool.

### Reframe for interviews (if Remix comes up)

> "Most of my React framework work has been Remix, which merged into React Router v7 in November 2024. My daily muscle maps directly to the framework-mode React Router API — loaders, actions, Form component, nested routing — all still there under the RR v7 name."

That's stronger than "I used a framework that got sunsetted." It's "I use the idioms that won."

### The philosophical convergence

**Three things are converging on the same ideas:**

| Idea | Remix's name | React Router v7's name | React / Next.js App Router's name |
|---|---|---|---|
| Run data fetching on server | `loader` | `loader` | async Server Component |
| Run mutations on server | `action` | `action` | Server Action |
| Forms without JS | `<Form>` | `<Form>` | `<form action={serverFn}>` |
| Nested routes / layouts | Built-in | Built-in | `layout.tsx` convention |

All three say: **"Server-first, progressive enhancement, URL-driven state, forms as a first-class primitive."** Different implementations, same philosophy.

**Remix's philosophy didn't die. It split into two descendants:**
1. **React Router v7 framework mode** — the direct continuation (same APIs, same team).
2. **React Server Components + Server Actions** — the absorption (React itself took the ideas).

The Remix mindset won **both** by continuing under a new name AND by being absorbed into the React platform itself.

---

## Part 4: React Server Components (RSC) — the paradigm shift

### The one-sentence version

**Server Components are React components that run on the server, never ship JavaScript to the browser, and can directly access server-only resources — while still composing seamlessly with regular Client Components.**

### Where it came from

Proposed by Meta's React team at React Conf 2020 (Dan Abramov, Joe Savona, Lauren Tan, others). **Took four years to stabilize** — shipped stable in React 19 (2024). The long gestation is because RSC needs:

- A server runtime
- A bundler that understands the server/client boundary
- A streaming wire format
- Framework conventions

You can't just `import 'react'` and use RSC. It requires a framework. **Next.js App Router (July 2023)** was the first production implementation.

### The problem it solves

Before RSC, React had two hard constraints:

1. **All React runs in the browser.** SSR'd apps rendered on the server first, then shipped the JS to re-run ("hydrate"). Every component shipped its JS, interactive or not.
2. **Data fetching happens AFTER the app loads.** Page renders → `useEffect` fires → fetch → spinner → data → render. Waterfall.

RSC breaks both:

1. **Most components don't need browser JS.** A product page, a blog post, search results — "render this data as HTML." Shipping React JS for those is waste.
2. **Data fetches during render, on the server, before anything reaches the client.** No waterfall. HTML streams with data already in it.

### The two-kind mental model

| Kind | Runs where | Can use |
|---|---|---|
| **Server Component** | Server only, once per request | `await` anywhere, direct DB / filesystem access, env vars, secrets |
| **Client Component** | Server (initial render) + browser (interactivity) | `useState`, `useEffect`, `useRef`, event handlers, browser APIs |

**The boundary is the `'use client'` directive** at the top of a file. Files without it default to Server Components in App Router.

### What Server Components CAN'T do

- `useState`, `useEffect`, `useRef`, any hook depending on re-rendering
- Event handlers (`onClick`, `onChange`) — no client runtime to fire them
- Use browser APIs (`window`, `localStorage`)
- Be imported BY a client component (can be passed as `children`, but not imported)

### What Client Components CAN'T do

- Top-level `await` for data fetching (workaround: React 19's `use` hook, or fetch in `useEffect`)
- Directly access server resources (no DB calls; must go through Server Actions or API)
- Read secrets (anything in client bundle is public)

### The wire format

When a Server Component tree renders:

1. Server executes the tree
2. Produces HTML + a structured description of the tree
3. For Client Components in the tree, ships placeholder + reference to bundled JS
4. Props across the boundary are serialized
5. Client receives HTML first (fast initial paint), then JS for Client Component leaves, then hydrates

The format is called the **RSC payload** — not JSON, not HTML, React-specific streaming format. You don't work with it directly; the framework handles it.

### What changes when you "think in RSC"

| Thing | Client-only React | RSC world |
|---|---|---|
| Where is my data? | `useState` + `useEffect` fetch | Variables in a Server Component, `await` |
| Initial paint speed? | Slow — JS loads, parses, executes, fetches, renders | Fast — HTML streams with data already in |
| JS bundle size? | Every component ships | Only Client Components ship |
| Where do API keys live? | Hidden behind a backend | Server Component reads env vars directly |
| Preventing waterfalls? | Coordinate fetches in a parent | Fetch independently in each Server Component; parallel on server |
| Auth on every page? | Context provider + useEffect | Read cookies directly in the Server Component |

### Common gotchas (worth knowing for interviews)

1. **The composition puzzle.** Client Components can't `import` Server Components, but they can *receive* them as `children` or props. This is how you interleave.
2. **Serialization boundary.** Props passed Server → Client must be JSON-serializable (plus React-specific extras). Can't pass class instances, Maps, unbound functions (pre-Server Actions).
3. **Bundle pollution.** Importing a client-only module from a Server Component can pull its dependencies into the client bundle if `'use client'` placement is sloppy.
4. **"Why doesn't useState work?"** Forgot `'use client'`. Very common beginner / framework-converter error.
5. **Mental model fatigue.** "Is this server or client?" is genuinely new. Takes practice.

### Where you'll encounter RSC

- **Next.js App Router** — main production implementation, 2023+
- **React Router v7 framework mode** — basic RSC support being added
- **TanStack Start** — supports RSC
- **Waku** — minimalist pure-RSC framework

### Interview-ready framing

> "RSC is React components that execute on the server only and never ship JS to the browser. They can do async work directly — including DB queries, file reads, fetches to internal APIs — without exposing anything to the client. You compose them with Client Components via the `'use client'` directive. Next.js App Router is the main production implementation; React Router v7 and TanStack Start also support it. The mental shift: 'is this interactive?' If no, Server Component. If yes, Client Component. Props across the boundary must be serializable. Bundle pollution and serialization gotchas are where people trip."

That's dense — say it conversationally, not all at once. Lands as "I actually understand what this thing does under the hood."

---

## Part 5: The deeper question — what makes something "a React app"?

### The old fused definition

Historically, "React app" meant "a client-side JS bundle built from React components." The *library* (React) and the *runtime target* (browser JS bundle) were fused. They traveled together for a decade.

### The new unfused definition

RSC split them apart. Now "React app" means "a codebase whose UI is described in React components" — and **where React executes is a deployment choice**, not part of the definition.

React has quietly become two things:

1. **React as a UI description language** — JSX, components, props, composition, children. Ubiquitous, server or client.
2. **React as a client-side runtime** — hooks, state, effects, event handlers, DOM reconciliation. Only shipped when you opt in with `'use client'`.

### The comparison table

| App type | React used? | Where React runs |
|---|---|---|
| Jekyll / Hugo blog | ❌ | N/A — different templating |
| Astro site with no islands | ❌ | N/A — Astro templates |
| Astro site with React islands | ✅ (for islands) | Client only, in islands |
| CRA/Vite SPA | ✅ | Client only |
| Next.js App Router, all Server Components | ✅ | **Server only** |
| Next.js with mix | ✅ | Server + client, per file |
| Next.js with `'use client'` everywhere | ✅ | Client-dominant |

All the ✅ rows are "React apps." They differ only in where React executes.

### Why naming this matters on the call

A lot of developers haven't fully absorbed the split yet. Saying explicitly on an SE call —

> "This demo is pure Server Components — no bundle for the pages themselves. HTML streams to the browser, hydration only for `<Link>`. That composition — server component tree with client leaves as needed — is the pattern I'd reach for for a content-dominant app."

— is a strong senior-flavor signal. You're showing you understand the decoupling.

### And crucially — this is React's direction

The fact that a demo can be pure Server Components isn't a quirk. It's the direction React + its companion frameworks are pushing. Default in App Router is server; client is opt-in. Remix/RR v7 is merging similar ideas. The industry is trying to convince developers that "React" doesn't have to mean "JS bundle in a browser."

---

## Cheat sheet — interview-ready talking points

Pull any of these if a relevant question comes up. Don't rattle off all of them; pick what fits the moment.

**On build tools:**
> "The landscape is JS → Rust. Vite won the SPA dev experience; Rolldown is the next jump. Turbopack is Next-native, Rspack is webpack-compatible, Bun is runtime+bundler combined."

**On framework choice for a new project:**
> "Vite for SPAs, Next.js App Router for full-stack, Astro for content-heavy sites where most of the page isn't interactive, Remix/RR v7 framework mode if I want the web-platform-first flavor."

**On Next.js specifically:**
> "Full-stack React framework — routing, rendering, API, Server Components, Server Actions, caching. Pages Router is legacy, App Router is current. Main gotcha is the multi-layer caching model."

**On Remix:**
> "Merged into React Router v7 in November 2024. The APIs I used in Remix — loader, action, Form — are native to RR v7 now. Separately, RSC and Server Actions in React 19 absorb a lot of the Remix philosophy at the React level."

**On RSC:**
> "React components that run server-side only, never ship JS to the browser. Compose with Client Components via `'use client'`. Next App Router is the main production implementation. Props across the boundary must be serializable."

**On the deeper conceptual shift:**
> "React used to mean 'a JS bundle in the browser built from components.' RSC decoupled those. Now React is a UI description language, and where it executes — server, client, static build — is a deployment choice. A lot of developers haven't fully absorbed that yet."

**On your specific positioning (Remix background):**
> "Most of my framework work has been Remix, which became React Router v7 in late 2024. The loaders, actions, Form component, nested routing — that's my daily muscle. The Remix philosophy won twice: it continued as React Router v7, and it got absorbed into React itself as Server Components. So the idioms transferred everywhere."

---

## Further reading (for deeper drills)

- **React docs on Server Components:** react.dev — specifically the "Server and Client Components" guide
- **Next.js docs App Router:** nextjs.org/docs — the "Building Your Application" section is strong
- **React Router v7 migration guide:** reactrouter.com — the "v6 to v7" and "Remix to RR" pages
- **RSC RFC + original talks:** the Dan Abramov / Joe Savona 2020 presentation is still one of the clearest explanations
- **Kent C. Dodds / Ryan Florence talks on "why Remix":** long-form, opinionated, clarifies the philosophical roots
