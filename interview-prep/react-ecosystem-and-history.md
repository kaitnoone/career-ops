# React Ecosystem & History — Field Guide for Remix Devs

Two sections:

1. **Remix → pure React gotchas** — what trips you up moving from framework-idiomatic Remix to bare React
2. **The ecosystem, in eras** — a tour of React itself + the libraries that came, dominated, or faded, so you can talk about any of them in an interview without getting caught flat-footed

---

## Part 1: Remix → Pure React Gotchas

Remix is React underneath, but it's got strong opinions. In pure React (or in a Next.js App Router codebase, or a CRA/Vite SPA), those opinions are things you have to rebuild yourself or replace with different conventions.

### Data loading — you have to hand-roll it

**Remix:** `loader` functions run on the server before render. Data is available synchronously via `useLoaderData()`.

**Pure React:** no data loading primitive. Options:
- `useEffect` + `fetch` + `useState` (hand-rolled, fine for simple cases)
- React Query / SWR (what most senior codebases use)
- Server Components in Next.js App Router (fetch directly in async components)

**Gotcha:** in a whiteboard interview, interviewers will sometimes ask "build a list that fetches from this API." If you instinctively write `loader`, they'll say "what's that?" and it's a giveaway. Use the `useEffect` + AbortController pattern from the study guide, or name "I'd reach for React Query in production."

### Forms — no magic actions

**Remix:** `<Form method="post">` + an `action` function. Works without JS. Revalidates loaders on success.

**Pure React:** you write the onSubmit handler yourself:

```tsx
function Form() {
  const [name, setName] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/save", { method: "POST", body: JSON.stringify({ name }) });
    // manually refetch or update state
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}
```

**Gotchas:**
- Don't forget `e.preventDefault()` — default browser submit breaks SPA nav
- No automatic revalidation — you manually refetch or lift-and-update state
- No progressive enhancement — the form requires JS

**Note:** React 19 introduced form actions (`<form action={fn}>`) that narrow this gap but require the new React + a framework like Next.js. Mention it as "the platform is catching up, but in most codebases today you still write it manually."

### Routing — there's no router by default

**Remix:** file-based nested routes, `<Outlet />`, `useNavigation`, `useFetcher`, etc.

**Pure React:** nothing. You pick one:
- **React Router** (the Remix people's library; v6/v7 now uses the same data APIs as Remix — convergence happening)
- **TanStack Router** (type-safe, newer)
- **Next.js file router** (framework-native; different idioms)
- **None** — some apps are truly single-page

**Gotcha:** if your interview is in a CodeSandbox with no router, don't ask "where's the routing set up?" Assume single page and build accordingly.

### Revalidation — nothing's automatic

**Remix:** mutations auto-trigger loader revalidation. Your UI updates without you thinking about it.

**Pure React:**
- With React Query: call `queryClient.invalidateQueries(['key'])` after mutation
- With hand-rolled fetch: setState yourself or re-trigger the effect
- With SWR: `mutate(key)` to revalidate

**Gotcha worth naming on the call:** "coming from Remix, I'm used to revalidation being automatic. In React Query / SWR it's explicit — you invalidate the cache key. It's a small mental shift that's caught me before."

### Error boundaries — no route-scoped default

**Remix:** `export function ErrorBoundary()` at a route level; errors bubble to the nearest boundary.

**Pure React:** you compose `<ErrorBoundary>` components manually. React still doesn't have a hooks-based error boundary as of April 2026 — you either use a class component or the `react-error-boundary` library.

```tsx
// From react-error-boundary
<ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => reset()}>
  <Children />
</ErrorBoundary>
```

### Server/client boundary — it's on you to know which side you're on

**Remix:** loaders and actions are always server. Components are always client (with some nuance in v2).

**Pure React (SPA):** everything is client. Simple.

**Next.js App Router:** files are server by default. `'use client'` at the top makes them client. You can't use `useState`/`useEffect` in server components, and you can't use async fetch in client components (at least not directly).

**Gotcha:** if the interview is Next.js flavored, check which mode the file is in before writing `useState`. I've seen senior candidates trip on this.

### Hooks Remix gives you that don't exist in pure React

If you reach for these, the interviewer will say "that's a Remix hook":

- `useLoaderData` → use React Query / SWR / `useEffect+fetch`
- `useActionData` → manage via component state
- `useNavigation` → use `isPending` from `useTransition` or track `loading` state yourself
- `useFetcher` → use React Query mutations, or useState + fetch
- `useSubmit` → write an onSubmit handler
- `<Form>` → `<form>` (lowercase)
- `<Link>` from Remix → React Router's `<Link>`, or Next.js `<Link>`, or `<a href>`

### What to actually SAY if asked "what's your React background?"

Don't hide the Remix. Frame it:

> "Most of my React time has been in Remix, so I'm framework-fluent more than vanilla-fluent. The loader/action pattern, nested routing, form handling — that's my daily muscle. For pure React I'd reach for React Query for data, React Router or Next.js for routing, and hand-rolled handlers for forms. The fundamentals transfer; it's mostly rebuilding what Remix gave me for free."

This is senior framing: honest about the shape of your experience + confident in the transfer.

---

## Part 2: React Itself, in Eras

Useful for talking intelligently about "why does the ecosystem look like this" questions.

### Era 1: Classes + friends (2013–late 2018)

- **Class components** with lifecycle methods: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, `shouldComponentUpdate`, `getDerivedStateFromProps` (and a bunch of deprecated ones).
- **Function components existed** but couldn't have state or lifecycle — "dumb" or "presentational."
- **State sharing was painful.** You'd reach for:
  - **Higher-order components (HOCs)** — `withAuth(Component)` returning a new component. Lots of wrapping. Prop collisions.
  - **Render props** — `<Data render={(d) => <X d={d} />} />`. Deeply nested; "wrapper hell."
  - **Container / presentational split** — Dan Abramov's pattern; containers held state, children were dumb. Now mostly obsolete because hooks make it unnecessary.

**Why it matters for interviews:** most senior interviewers have lived through this era. They'll recognize the pain and appreciate your knowing *why* hooks happened. If you see class components in an interview codebase, you're looking at legacy code or someone who stopped learning in 2018.

### Era 2: Hooks (late 2018 / React 16.8 onward)

- Released Feb 2019.
- `useState`, `useEffect`, `useContext`, `useReducer`, `useMemo`, `useCallback`, `useRef`, `useImperativeHandle`, `useLayoutEffect`.
- **Function components become primary.** Classes slowly become legacy.
- **Custom hooks** replace most HOCs and render props.
- **Rules of Hooks:** only call at the top level, only call from React functions, same order every render.

**What shifted in practice:** far less code, much better reuse, but a new class of bugs — stale closures, exhaustive-deps issues, effects that do too much. The mental model "effects are synchronization, not lifecycle" took years to settle.

### Era 3: Concurrent + Suspense (2022 / React 18)

- Released March 2022.
- **Concurrent rendering** — React can interrupt, pause, resume rendering. Users don't feel jank from long updates.
- **Automatic batching** — multiple setStates in async code now batch by default.
- **`useTransition` / `startTransition`** — mark non-urgent updates (e.g., filtering a big list while typing).
- **`useDeferredValue`** — debounce-at-render, built-in.
- **`Suspense`** — now works for data, not just code splitting (though the ergonomics needed a framework).
- **`useSyncExternalStore`** — for integrating external state stores (Redux, Zustand) safely with concurrent mode.

**Why it matters:** lots of libraries got a rewrite pass in 2022. State managers had to support `useSyncExternalStore`. Data libraries (React Query, SWR) got Suspense modes. You'll still see codebases that haven't upgraded; don't assume React 18 features are available.

### Era 4: Server Components (2023–present)

- **React Server Components (RSC)** — React code that runs on the server and ships *zero* JS to the client.
- **Next.js 13 App Router** (July 2023) was the first production-ready RSC framework.
- **`'use client'` / `'use server'`** directives define the boundary.
- **Server Actions** — functions you write in server code but can call from client components; React handles the serialization.
- **React 19** (released 2024) formalized a lot of this:
  - `use` hook — can unwrap promises and context conditionally
  - Form actions: `<form action={fn}>` where `fn` can be a server action
  - `useActionState` — form submission state without hand-rolled loading
  - `useOptimistic` — optimistic updates built-in
  - Stable `ref` as a prop (no more `forwardRef` for most cases)

**Why it matters for you specifically:** Remix's philosophy heavily influenced RSC. The "server-first, progressive enhancement, forms that work without JS" mindset is the same. RSC is Remix-ideals at the React level instead of the framework level. You'll recognize a lot of it.

### What's coming (rumors, not shipped)

- More concurrent primitives
- Better Suspense ergonomics without needing a framework
- More work on compiler (the "React Compiler" project) — auto-memoization so you don't have to sprinkle `useMemo`/`useCallback` manually. In beta in some Meta codebases; broader rollout ongoing.

---

## Part 3: The Ecosystem, by Category

For each category: brief history, what's dominant in 2026, what's legacy, what to say in an interview if it comes up.

### State management

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **Redux** | 2015 | Alive but dated feel | Still huge at enterprise. "Redux Toolkit made it tolerable." |
| **Redux Toolkit (RTK)** | 2019 | Current Redux | `createSlice` + `RTK Query`. Much less boilerplate than classic Redux. |
| **MobX** | 2015 | Niche | Observable state. Vue's reactivity flavor. |
| **Context + useReducer** | 2019 | Default for feature-scope | Not a library. Just enough for many apps. |
| **Zustand** | 2019 | Dominant for small-medium apps | Tiny API, fast, no provider wrapping. Darling of 2022+. |
| **Jotai** | 2020 | Growing | Atomic state ("atoms"). For apps that think in small units of state. |
| **Recoil** | 2020 | Abandoned | Meta dropped it. Don't use for new work. |
| **Valtio** | 2020 | Niche | Proxy-based. Mutate and it updates. |
| **XState** | 2017 | Specialized | State machines. Heavy but right for complex flows (wizards, editors). |

**Interview talking point:**
> "For simple state I use built-ins — useState, useReducer, context. For app-scope state I reach for Zustand (small API, no provider) or Redux Toolkit (if the team's already on it). Context is a gotcha at scale because it re-renders all consumers on any value change."

### Data fetching / server state

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **Apollo Client** | 2016 | Dominant for GraphQL | Still the default if you're on GraphQL. |
| **SWR** | 2019 | Solid | From Vercel. Hooks-first, "stale while revalidate." Lighter than React Query. |
| **React Query / TanStack Query** | 2020 | Dominant for REST | The standard for REST APIs. Cache, dedup, retry, mutation invalidation, devtools. |
| **RTK Query** | 2021 | Popular if on Redux | Redux Toolkit's data-fetching addon. |
| **Relay** | 2018 | Meta-flavored, enterprise | Facebook's GraphQL client. Strong types, heavy tooling. |
| **React Server Components** | 2023 | Changes the game | If you're in Next.js App Router, a lot of data fetching moves to the server and you need less client-side caching. |

**Interview talking point:**
> "For REST I'd reach for React Query — cache, dedup, retry, mutation handling, the works. For GraphQL, Apollo. For server-rendered codebases, more of this moves server-side via RSC and the client library shrinks."

### Forms

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **Formik** | 2018 | Maintenance mode | Dominated for years; now seen as heavy. New work avoids it. |
| **React Hook Form** | 2019 | Dominant | Uncontrolled-first, tiny re-render footprint, great TS. The default. |
| **TanStack Form** | 2023 | Growing | From TanStack (React Query's author). Headless, type-safe. Watch. |
| **Native form actions** | 2024 | In React 19 / frameworks | `<form action={fn}>` with server functions. |

**Interview talking point:**
> "React Hook Form is my default — uncontrolled by default, minimal re-renders, solid validation via Zod. For framework-integrated apps I'd use form actions where available."

### Routing

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **React Router** | 2014 | Dominant for SPAs | v6/v7 adopted Remix's data APIs. The "Remix router" internals live here. |
| **TanStack Router** | 2023 | Growing | Fully type-safe routes. Newer; worth knowing. |
| **Reach Router** | 2018 | Dead (merged into RR) | Don't use. |
| **Next.js router** | framework | Framework-native | App Router since 2023. |
| **Remix router** | framework | Merging w/ RR v7 | Direction is convergence. |

**Interview talking point:**
> "React Router is the default for SPAs. TanStack Router is the newer type-safe option I'd consider on a greenfield. Framework apps use the framework router."

### Styling

| Approach | Era | Status 2026 | One-liner |
|---|---|---|---|
| **Plain CSS / CSS Modules** | always | Always viable | Nothing wrong with this. |
| **styled-components** | 2016 | Fading | CSS-in-JS was huge; concerns about runtime perf + RSC compatibility are shrinking it. |
| **Emotion** | 2017 | Fading (same reasons) | Similar space as styled-components. |
| **Tailwind** | 2017 | Dominant | The default in most new codebases. Utility-first. |
| **vanilla-extract** | 2021 | Quiet | Zero-runtime CSS-in-TS. Nice if you want typed styles without runtime cost. |
| **Panda CSS** | 2023 | Growing | Tailwind-alternative with typed recipes. |
| **CSS Modules (via Next.js)** | always | Steady | Built in to most frameworks. |

**Interview talking point:**
> "Tailwind is the default I'd pick for speed. For a design-system library I'd reach for vanilla-extract or Panda for typed, zero-runtime styles. CSS-in-JS libraries like styled-components still work but the industry is moving off them — especially with RSC, where runtime CSS-in-JS has compatibility headaches."

### UI / component libraries

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **Material UI (MUI)** | 2014 | Still huge | Enterprise-y, Google's Material look. Big API surface. |
| **Ant Design** | 2015 | Big in Asia/enterprise | Alibaba's; heavy but thorough. |
| **Chakra UI** | 2019 | Solid | Accessible by default, prop-based styling. |
| **Radix UI** | 2020 | Dominant for unstyled primitives | Accessibility-first, unstyled. Pair with your own CSS/Tailwind. |
| **Headless UI** | 2020 | Paired with Tailwind | Similar space as Radix. |
| **shadcn/ui** | 2023 | Dominant for new projects | Not a library — a pattern. Copy/paste Radix + Tailwind components into your repo. You own the code. |
| **NextUI / HeroUI** | 2023 | Growing | Opinionated, pre-styled on Radix/Tailwind. |

**Interview talking point:**
> "For new projects I'd reach for shadcn/ui — it's Radix primitives + Tailwind you copy into your repo, so you own it and can modify freely. For teams that need a full system out-of-box, MUI or Chakra. Radix itself is the accessibility backbone everyone builds on." *(Worth noting in the WorkOS context — they use Radix.)*

### Testing

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **Jest** | 2014 | Dominant | Test runner. Mature. |
| **Vitest** | 2021 | Rising fast | Vite-native. Faster than Jest for Vite codebases. Drop-in API. |
| **Enzyme** | 2015 | Dead | Implementation-detail testing. Don't use. |
| **React Testing Library** | 2018 | Default | Query by role/label, interact via user-event, assert on visible output. |
| **Playwright** | 2020 | Dominant e2e | Microsoft's. Replaces Cypress in many shops. |
| **Cypress** | 2017 | Still huge | Earlier e2e leader. Losing ground to Playwright. |
| **Storybook** | 2016 | Default for components | Isolated component development + docs + visual tests. |
| **Chromatic** | 2019 | Dominant visual testing | From the Storybook team. Visual regression on top of Storybook. |

**Interview talking point:**
> "RTL + Vitest or Jest for unit/component tests. Playwright for e2e. Storybook for component-level isolation and visual regression via Chromatic. I test behavior, not implementation — query by role, interact via user-event."

### Frameworks

| Framework | Era | Status 2026 | One-liner |
|---|---|---|---|
| **Create React App** | 2016 | Deprecated (2023) | Don't start new projects here. |
| **Next.js** | 2016 | Dominant | App Router + RSC since 2023. Vercel's. |
| **Remix** | 2022 OSS | Merging into RR v7 | You know this one. |
| **Gatsby** | 2017 | Declining | SSG-first. Lost ground to Next. |
| **Vite + React SPA** | 2020 | Default for SPAs | Dev experience unmatched. |
| **Astro** | 2021 | Growing | MPA with islands of React. Great for content sites. |
| **TanStack Start** | 2024 | New | Full-stack React, type-safe, from TanStack. |
| **Expo (React Native web)** | 2015+ | Cross-platform default | If you need mobile + web. |

**Interview talking point:**
> "Next.js App Router for full-stack, Vite for SPAs. Astro for content-heavy sites where most of the page doesn't need interactivity. Remix is merging into React Router 7 direction — so the opinions are living on in RR."

### Animation

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **CSS transitions/animations** | always | Always viable | Fastest, lightest. |
| **react-spring** | 2018 | Solid | Physics-based. |
| **Framer Motion** | 2019 | Dominant | Declarative motion, great DX. |
| **Motion One** | 2021 | Lighter alt | Web Animations API under the hood. |
| **GSAP** | 2008 | The pro tool | If you need heavyweight, coordinated, non-React animation. |

---

## What to drop in conversation to signal "I've been around"

These are low-lift callouts that land as senior-flavor. Pick one or two that fit the moment; don't drop them all or it reads as cramming.

- "The Rules of Hooks bite people who come from Vue — hooks must run in the same order every render, which `if (cond) useState()` silently breaks."
- "Context re-renders all consumers on value change. For high-churn state it's a footgun — split contexts or use a state library."
- "React still doesn't have a hooks-based error boundary. Class component or `react-error-boundary`. Feels weird that this hasn't been addressed yet."
- "The React Compiler is trying to auto-memoize so we don't write `useMemo`/`useCallback` by hand. In beta as of 2026."
- "Server Components changed the mental model — a component can be server or client but rarely both; props across the boundary must be serializable."
- "`useEffect` is synchronization, not lifecycle. That frame shift kills the 'but in componentDidMount we did X' instinct from class-era muscle memory."

---

## Your specific Remix → pure React drill list

Given you've lived in Remix, the bits to reinforce before a pure-React whiteboard:

| Drill this | Why |
|---|---|
| `useEffect` + `AbortController` data fetching | Replaces loader |
| Manual form handlers + controlled inputs | Replaces `<Form>` |
| React Router basics (`<Route>`, `<Link>`, `useNavigate`, `useParams`) | Or Next.js router if that's the stack |
| Manual revalidation after mutation (setState or React Query invalidation) | Replaces loader auto-revalidation |
| Error boundaries as class components or `react-error-boundary` | Replaces route ErrorBoundary |
| Knowing what you're *not* missing (most things transfer cleanly) | Confidence matters |

One practical exercise: take a small Remix route you've built (loader + action + component) and rewrite it as a pure React component. The diff is the muscle you need.
