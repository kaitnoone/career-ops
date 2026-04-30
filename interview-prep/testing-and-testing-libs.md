# Testing & Testing Libraries — Field Guide

Three sections, then SE-flavored prep:

1. **Testing philosophy** — the two shifts that defined the modern stack
2. **Testing in eras** — how the ecosystem got here
3. **The ecosystem, by category** — runners, component, e2e, visual, mocking, a11y, contract testing
4. **SE / CSE conversations** — how to talk about testing strategy with customers
5. **Your honesty calibration** — what you can claim vs what you can't, per memory

---

## Part 1: Testing Philosophy — the two shifts that matter

### Shift 1: Implementation details → user behavior (2018)

**Before (Enzyme era):** tests reached into component internals. `wrapper.find('Button').props().onClick()`. You'd test that internal state changed, that a particular method got called. The test was tightly coupled to *how* the component was built.

**After (RTL era):** tests interact like a user would. `screen.getByRole('button', { name: /submit/i }).click()`. You don't know or care what the internal state looks like — you assert on what the user sees and can do.

**Why it matters:** Enzyme tests broke every refactor. Change a `useState` to a `useReducer` and 40 tests would fail even though the component still worked. RTL tests survive refactors as long as the user-facing behavior is the same.

**What to say:**
> "Test behavior, not implementation. Query by role and label, interact via user-event, assert on visible output. Tests that survive refactors are the only ones worth maintaining."

### Shift 2: Snapshots → focused assertions (~2020)

Snapshot testing (Jest's `toMatchSnapshot()`) blew up around 2017 because it was easy. Save the rendered output, compare next run.

The problem: snapshots get stale. Devs blindly update them when they break. They become noise.

**Current consensus:**
- Snapshots are fine for **stable, small outputs** (date formatters, simple JSON)
- Bad for **rendered components** — too brittle, too easy to update without reading
- For component output, write focused assertions: `expect(screen.getByRole('heading')).toHaveTextContent('Welcome')`

**What to say:**
> "I avoid snapshot tests for rendered components — they break on every styling change and engineers learn to update them without reading. Better to assert on specific user-facing details."

### Emerging shift: server components + framework-aware testing

Testing React Server Components is still a frontier in early 2026. RTL doesn't natively support async server components. Common patterns:
- Treat them as "data fetching + JSX" and test the JSX output via direct call
- E2E test in a real Next.js dev server (Playwright)
- Skip the server component layer in unit tests entirely; test the building blocks instead

Watch this space — the answer hasn't fully landed.

---

## Part 2: Testing, in Eras

### Era 1: Pre-React tooling (2014–2016)
Mocha + Chai + Sinon — the classic Node test stack borrowed for React. Karma as the test runner if you needed real browsers. React testing was nascent — `ReactTestUtils.Simulate` was the official tool, painful to use.

### Era 2: Jest + Enzyme dominance (2016–2018)
- **Jest** (Facebook, 2014) bundled runner + assertions + mocking + coverage. "Just works" with Babel + React.
- **Enzyme** (Airbnb, 2015) became THE way to test React components. `shallow`, `mount`, `find`. Implementation-detail testing was the norm.
- **Snapshot testing** introduced by Jest in 2017. Ran wild for a few years.
- **Cypress** (2017) brought e2e testing into the modern era — real browser, real DOM, devtools-style debugging.

### Era 3: RTL philosophy shift (2018–2021)
- **React Testing Library** (Kent C. Dodds, 2018) flipped the script. Test like a user.
- Enzyme stalled — never fully supported React 18 / hooks.
- The shift was philosophical, not technical: *how* you test mattered more than *which library* you used.
- **MSW** (Mock Service Worker, 2018) emerged as the right way to mock fetch/axios — at the network level, not the function level.

### Era 4: Vite + Playwright + Storybook stack (2021–present)
- **Vitest** (2021) — Vite-native, drop-in Jest API.
- **Playwright** (2020) matured into the dominant e2e tool. Multi-browser by default.
- **Storybook** matured into the default for component dev + visual testing.
- **Chromatic** + Percy + Lost Pixel for visual regression.
- Current default React testing stack roughly: **Vitest (or Jest) + RTL + MSW + Playwright + Storybook + Chromatic**. Picked per project shape.

---

## Part 3: The Ecosystem, by Category

### Test runners

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **Jest** | 2014 | Dominant in Webpack/CRA codebases | The default for years. Bundled runner + assertions + mocking + coverage. |
| **Vitest** | 2021 | Dominant in Vite codebases | Vite-native. Drop-in Jest API. Faster startup, faster watch. |
| **Mocha** | 2011 | Legacy / non-React Node | Pair with Chai. Still around in older Node services. |
| **Bun's test runner** | 2023 | Growing | Bundled with Bun. Fast. Adoption depends on whether you're on Bun. |
| **node:test** | 2022 | Niche | Built into Node. No bells. |

**Talking point:**
> "Jest if the codebase is Webpack or CRA. Vitest if you're on Vite — same API, faster. Both work fine for React + RTL."

### Component / unit testing

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **React Testing Library (RTL)** | 2018 | Dominant | Query by role/label, user-event for interaction, assert on output. The default. |
| **Enzyme** | 2015 | Dead | Doesn't fully support hooks/React 18. Don't use. |
| **@testing-library/user-event** | 2018 | Default with RTL | Realistic event simulation. Use this over `fireEvent` in 2026. |
| **react-test-renderer** | 2014 | Legacy | Test renderer without DOM. Mostly for snapshots. Niche. |
| **Vue Testing Library / Svelte Testing Library** | various | Same family | Same philosophy, different framework. |

**Talking point:**
> "RTL + user-event is the default for component tests. Enzyme is legacy — anywhere I see `wrapper.find(...)` I'd flag it as code that needs migration."

### End-to-end (e2e) testing

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **Playwright** | 2020 | Dominant | Microsoft. Multi-browser (Chromium, WebKit, Firefox). Auto-wait. Great trace viewer. |
| **Cypress** | 2017 | Still huge | Earlier e2e leader. Single-browser historically. Losing share to Playwright. |
| **Selenium / WebdriverIO** | 2004 | Legacy / cross-language | WebdriverIO is the modern JS layer. Common in non-JS shops. |
| **Puppeteer** | 2017 | Niche | Google's. More for scripting/scraping than testing. |
| **TestCafe** | 2016 | Niche | Existed pre-Playwright. Less common now. |

**Talking point:**
> "Playwright is the default for greenfield. Multi-browser by default, auto-waits, good debugger. Cypress still dominates older codebases that adopted it early — both work, the migration cost is real if you're already on Cypress."

**Honest note for you (per memory):** You haven't shipped Playwright. Cypress yes, Playwright no. If asked which you've used: **Cypress**. Playwright as "I've read the docs and seen the trace viewer demos but haven't shipped against it."

### Visual regression testing

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **Storybook** | 2016 | Default for component-isolation dev | Foundation for visual testing. |
| **Chromatic** | 2019 | Dominant for Storybook-based | From Storybook team. Diff visual changes per PR. |
| **Percy** | 2017 | Solid alternative | Owned by BrowserStack now. |
| **Lost Pixel** | 2022 | OSS alternative | Self-hostable. Growing. |
| **Playwright's screenshot diffing** | 2020 | Built-in | If you're already on Playwright, often you don't need a separate visual tool. |

**Talking point:**
> "Storybook + Chromatic is the cleanest combo if you have a design system. Playwright's built-in screenshot testing covers a lot of cases for application-level visual checks."

### API mocking

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **MSW (Mock Service Worker)** | 2018 | Dominant | Intercepts fetch/XHR at the network layer. Same mocks work in tests AND in browser dev. The standard. |
| **nock** | 2011 | Legacy / Node-only | HTTP mocking for Node. Older API. Still used in pure-Node tests. |
| **jest.mock() / vi.mock()** | included | Used a lot | Function-level mocking. Works but bypasses the network layer (more brittle than MSW). |
| **Mirage JS** | 2015 | Niche | Full mock backend for client-side dev. Heavier than MSW. |

**Talking point:**
> "MSW for anything where the test interacts with HTTP. Same mock for unit tests, integration tests, and dev-time browsing — you don't have to maintain three separate fakes."

### Component dev environment / story library

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **Storybook** | 2016 | Dominant | Component isolation, docs, addons (a11y, viewport, controls). |
| **Histoire** | 2022 | Niche / Vue-flavored | Vite-native alternative. Faster startup. |
| **Ladle** | 2022 | Niche | Simpler Storybook-alt. Faster, smaller. |

**Talking point:**
> "Storybook is the default for any team with a real design system. The addon ecosystem (a11y, viewport, interactions) is the moat. For small teams without a design system, the overhead isn't worth it."

### Accessibility testing

| Library | Era | Status 2026 | One-liner |
|---|---|---|---|
| **axe-core** | 2014 | The engine | Deque's a11y rules engine. Powers most other a11y tools. |
| **jest-axe** | 2018 | Default unit-level | Wraps axe-core for Jest/Vitest. `expect(container).toHaveNoViolations()`. |
| **@storybook/addon-a11y** | 2018 | Storybook default | Runs axe in stories. |
| **Pa11y** | 2013 | CLI / CI-friendly | Standalone CLI for crawling URLs. |
| **Lighthouse** | 2017 | Built into Chrome | Includes a11y audit. Useful for one-off, less for CI. |
| **axe-playwright** | 2020 | E2E a11y | Run axe inside Playwright tests. |

**Talking point:**
> "axe-core is the engine; jest-axe wraps it for unit tests, Storybook's a11y addon for component-level checks, axe-playwright for e2e. None replace human testing with assistive tech, but they catch the easy 80%."

**Anchor for you:** The Recharge subscription widget audit + Gitwit WCAG presentation are the proof points here. You've lived this.

### Type-safety as testing-adjacent

Worth knowing because it comes up:

- **TypeScript** catches a huge class of bugs at compile time. "Tests" is the wrong word for what TS does, but it serves a similar role.
- **Zod** for runtime validation — pairs with TS for "type-safe at the boundary."
- **ts-reset** for stricter built-in types.
- **Type-safe API clients** (tRPC, GraphQL Codegen, OpenAPI generators) eliminate categories of integration tests by making mismatches impossible.

**Talking point:**
> "I think of TypeScript and runtime validation (Zod) as the first layer of testing — they catch the categories of bugs integration tests would otherwise need to find. The tests I write focus on behavior the type system can't verify."

### Performance / load testing

Out of scope for most frontend roles, but worth knowing the names:

- **k6** (Grafana) — load testing, scriptable in JS
- **Artillery** — similar space
- **Lighthouse CI** — Lighthouse in CI for perf budgets
- **WebPageTest** — single-URL deep performance analysis
- **Web Vitals** — the core metrics (LCP, CLS, INP, TTFB) Google uses for SEO ranking

### Contract testing (more SE-relevant)

If a customer asks about API contract testing:

- **Pact** — the dominant contract-testing framework. Producer/consumer contracts validated independently.
- **OpenAPI schema validation** — schema as contract; validate requests and responses match.
- **Schema-first development** — generate types and validation from a single OpenAPI/GraphQL schema.

---

## Part 4: SE / CSE-flavored testing conversations

These come up in SE interviews. Have a take.

### "How would you advise a customer on a testing strategy?"

The honest answer involves the **testing trophy** (Kent C. Dodds's modern variant of the testing pyramid):

- **Lots of static analysis** (TS, eslint) — catches whole bug classes for free
- **Unit tests** — pure functions, utilities, business logic
- **Integration tests** (the bulk) — multiple components together, MSW for API mocking
- **E2E tests** (few, slow) — Playwright, critical user paths only

**Talking point:**
> "I aim for the testing trophy — TypeScript first, then unit tests for pure logic, integration tests as the bulk (component + MSW), and e2e for the critical paths only. Don't test implementation details. Snapshots only for stable, small outputs."

### "How do you test a webhook handler / API integration?"

Layered:
1. **Unit test the handler logic** — given a synthetic payload, does the handler do the right thing?
2. **Sign verification test** — given a valid HMAC, does it pass? Given an invalid one, does it reject?
3. **Mock the downstream side** — MSW or direct mock for any APIs your handler calls
4. **E2E test the real round-trip** in staging — actually hit the webhook URL with a signed payload, verify the side effect

**For your Kontent.ai webhook handler specifically:** unit-test the HMAC verification + the `revalidatePath` call separately. Don't try to test the full Next.js ISR loop in unit tests — save that for staging.

### "How do you test against a third-party SaaS like Kontent.ai?"

- **Mock the SDK in unit tests** — don't make real API calls
- **MSW intercept** if calling the API directly
- **Sandbox environment** if the vendor offers one (Kontent.ai's free workspace tier works)
- **Production smoke tests** — a small set of e2e tests that hit the real API in CI, with a known fixture content item

### "How do you handle flaky tests?"

The senior-flavored answer:

> "Flaky tests usually point to one of three things: race conditions in async code, tests sharing state, or e2e tests that depend on real network. Fix order: first stop the bleeding (quarantine the flaky test), then diagnose root cause (logs, video traces, the Playwright trace viewer), then fix the underlying issue. Re-running until green is what bad teams do; fixing root cause is what good teams do."

---

## Part 5: Your honesty calibration (per memory rules)

| Tool | What you can claim | What you can't |
|---|---|---|
| **Jest** | In your CV. Production use. | — |
| **React Testing Library** | In your CV. Production use. | — |
| **Cypress** | In your CV. Production use. | — |
| **Playwright** | NOT in your CV. Don't claim. | "I haven't shipped against Playwright specifically. The trace viewer is on my radar." |
| **Storybook** | In your CV (used at Recharge). | — |
| **Chromatic** | Light claim. "Storybook-team product I've heard about / would reach for." | Don't claim production setup. |
| **MSW** | Don't claim. | "Read about it; haven't shipped with it. The 'one mock for dev and tests' framing is exactly what I've been wanting." |
| **axe-core / jest-axe** | Some exposure (Gitwit, Recharge audits). Light claim. | Not "lead implementer" of an a11y test suite. |
| **Pact / contract testing** | Don't claim. | "Aware of the space; haven't shipped contract tests." |
| **Vitest** | Don't claim shipped use unless you have. | "Same Jest API, Vite-native — easy ramp." |

---

## Part 6: SE-flavored drill list

If a Kontent.ai or similar SE interview probes testing, the things to be ready on:

| Drill this | Why |
|---|---|
| The testing trophy + your point of view | Likely "how do you advise on test strategy" question |
| Webhook handler test layering (unit + HMAC + integration) | Direct match to your Kontent.ai demo |
| jest.mock vs MSW (function-level vs network-level mocking) | Senior-flavor distinction |
| Why RTL philosophy beats Enzyme philosophy | Forever evergreen |
| What Playwright's trace viewer does (even if you haven't shipped it) | Lets you talk about e2e debugging without claiming production use |
| The "Mock the SDK in unit tests, real API in staging smoke tests" pattern | Right answer for "how do you test against Kontent.ai" |

---

## Part 7: Conversational shorthand to signal "I've been around"

Pick one or two; don't pile them up.

- "RTL's philosophy — test behavior not implementation — is the line I draw on PR review."
- "Snapshot tests are fine for stable JSON, bad for components — engineers learn to blindly update them."
- "MSW changed how I think about API mocking — same mock, dev + tests, no two sources of truth."
- "TypeScript catches the bug class most integration tests are written to catch. Layer them."
- "Storybook + Chromatic is how I'd do visual regression on a design system."
- "axe-core + jest-axe + Storybook a11y addon get you 80% of the way without replacing humans-with-assistive-tech testing."
- "Playwright's trace viewer is the difference-maker for debugging flaky e2e — you can scrub through the test like a video."
