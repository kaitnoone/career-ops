# WCAG / WAI-ARIA: What's changed since ~2018

**Purpose:** quick catch-up doc for the WorkOS recruiter screen (and any Radix-team-flavored downstream rounds). You've been heads-down on a Shopify subscription widget since 2021 — this is what shifted in the standards and platform layer while you were head-down.

**How to use this:** skim during the 12:30 prep block, not now. The point isn't to memorize — it's so that if Anna or a downstream interviewer mentions any of these, you don't get caught flat. Plus it gives you a few honest "since I left agency life, here's what I've been catching up on" beats.

---

## The big picture in 30 seconds

- **WCAG 2.1** (2018) added the mobile + low vision + cognitive layer.
- **WCAG 2.2** (October 2023) added 9 new success criteria — most importantly around **focus visibility**, **target size**, **drag alternatives**, and **accessible authentication**.
- **WCAG 3.0** is still a working draft as of 2026 — outcomes-based scoring rather than pass/fail. Don't claim familiarity unless you've actually read it.
- The **platform** (HTML, CSS, browser APIs) has done a lot of the heavy lifting since 2020 — native `<dialog>`, `inert`, `:focus-visible`, and the Popover API have made many previously-custom a11y patterns either trivial or unnecessary.
- **Legal floor moved up** in 2024–2025 (ADA Title II, European Accessibility Act).

---

## Conformance levels (A / AA / AAA) and legal mapping

The levels are **cumulative** — AA conformance means you meet *all* Level A SCs *plus* all Level AA SCs. AAA means all three layers. You can't skip a level.

### Level A — the floor

The bare minimum. Without these, content is straight-up inaccessible to whole categories of users.

Examples:
- Images have alt text (1.1.1 Non-text Content)
- Videos have captions of some kind (1.2.2 Captions Prerecorded)
- Page works without a mouse (2.1.1 Keyboard)
- No content flashes more than 3 times per second (2.3.1 Three Flashes)
- Page has a language declared in HTML (3.1.1 Language of Page)

If you fail Level A, you're not "less accessible." You're "not accessible at all" for the affected users.

### Level AA — the legal and industry standard

The level almost every law, contract, and design system actually targets. The "reasonable" floor for a professional site.

Examples (additions on top of A):
- 4.5:1 color contrast for normal text (1.4.3 Contrast)
- Resize text up to 200% without breaking (1.4.4 Resize Text)
- Multiple ways to find a page — search, sitemap, nav (2.4.5 Multiple Ways)
- Visible focus indicators (2.4.7 Focus Visible)
- Form errors are identified clearly (3.3.1 Error Identification)
- Status messages are announced to screen readers (4.1.3 Status Messages — added in 2.1)
- The new 2.2 stuff: focus not obscured, target size 24×24, drag alternatives, accessible auth

When someone says "we're WCAG compliant," they almost always mean AA.

### Level AAA — aspirational

The highest bar. Full sites generally cannot meet AAA across every page and every component — the WCAG spec itself acknowledges this and explicitly says "It is not recommended that Level AAA conformance be required as a general policy for entire sites."

Examples (additions on top of AA):
- 7:1 color contrast (1.4.6 Contrast Enhanced) — most brand palettes can't hit this
- Sign language interpretation for prerecorded video (1.2.6)
- No timing on interactions (2.2.3 No Timing) — kills any session timeout
- Reading level no harder than lower secondary education (3.1.5 Reading Level)
- The 2.2 enhanced versions: focus appearance with size+contrast minimums, focus *fully* unobscured, accessible auth without object-recognition fallback

AAA is a target for **specific high-stakes flows or audiences**, not a whole-site standard. A government health portal might target AAA on its critical user paths. A product-marketing site won't.

### Legal mapping

Most laws default to **WCAG 2.1 AA**. AAA is almost never legally required.

| Law / regulation | Standard | Scope |
|---|---|---|
| **ADA Title II** (April 2024 rule) | WCAG 2.1 AA | US state and local government digital services |
| **ADA Title III** (case law) | Effectively WCAG 2.1 AA | US private businesses serving the public — courts have repeatedly anchored to AA in lawsuits, though no formal rule exists |
| **Section 508** (2017 refresh) | WCAG 2.0 AA | US federal agencies and federal contractors |
| **European Accessibility Act** (June 2025) | WCAG 2.1 AA | Many digital products and services serving EU consumers |
| **EN 301 549** (EU standard) | WCAG 2.1 AA | EU public-sector procurement |
| **AODA** (Ontario, Canada) | WCAG 2.0 AA | Ontario public + many private orgs |
| **California Unruh Act, NY State Human Rights Law** | Interpreted to require AA | State-level lawsuits piggyback on ADA framing |

### What this means in practice

- **Level A alone is never legally sufficient** anywhere. It's the structural floor, not a target.
- **Level AA is the universal legal floor** in 2026. Every major regulation lands here.
- **Level AAA is contractual or aspirational**, not legal. Sometimes a government or healthcare RFP will require AAA on specific flows. A bank or hospital might target AAA for critical paths. Almost no whole site claims AAA.
- **WCAG 2.2 is the current version** but most laws still cite **2.1**. Because 2.1 conformance is a *subset* of 2.2 conformance (every 2.1 SC is in 2.2), targeting 2.2 future-proofs you. The exception is the removed Parsing SC (see below), which 2.2 dropped.

### The pragmatic answer if asked tomorrow

> "AA is the working floor across almost every regulation and most enterprise contracts. WCAG 2.2 added some criteria around focus visibility and target size that are worth building toward even where 2.1 is the legal requirement, since 2.2 is just 2.1 plus a handful more SCs — and most laws will eventually update. AAA is a target for specific high-stakes flows, not whole sites; the spec itself says you shouldn't require AAA as a blanket policy."

Defensible, accurate, lands the "I think about this practically, not just compliance-theatrically" signal.

---

## What WAI-ARIA actually is

**WAI-ARIA = Web Accessibility Initiative — Accessible Rich Internet Applications.**

- **WAI** is a project of the W3C — the same group that maintains HTML and CSS. WAI focuses on the accessibility side.
- **ARIA** is the spec they ship for accessibility *semantics in markup*.

In plain terms: ARIA is a **vocabulary of HTML attributes** that let you tell assistive tech what an element is and how it behaves, when the element itself doesn't communicate that on its own.

### The vocabulary

ARIA gives you two main things:

**1. Roles** — what something *is*:

```html
<div role="dialog">…</div>
<div role="tablist">…</div>
<div role="menu">…</div>
```

**2. States and properties** (`aria-*` attributes) — what something is *doing* or *labeled as*:

```html
<button aria-expanded="true" aria-controls="menu-1">Menu</button>
<input aria-invalid="true" aria-describedby="email-error">
<div aria-hidden="true">…</div>
<button aria-label="Close dialog">×</button>
```

### Why it exists

HTML by itself has accessibility semantics built in. A `<button>` is a button. An `<a href>` is a link. A `<nav>` is navigation. Screen readers know what those are without you doing anything.

The problem: modern UIs ship a lot of components HTML doesn't have native elements for — custom dropdowns, modals, tabs, tooltips, sliders, comboboxes. ARIA fills that gap by letting you *announce* the role and state of custom widgets.

### The rules

There's a famous ARIA principle: **"The first rule of ARIA is don't use ARIA."** Meaning: prefer native HTML wherever possible. A real `<button>` beats `<div role="button">` every time, because the native element gives you keyboard handling, focus, screen-reader behavior, and form integration for free. ARIA is a fallback for when the platform doesn't have what you need.

Other rules to know:
- ARIA can *augment* native semantics but should never *contradict* them. Don't put `role="link"` on a `<button>`.
- ARIA changes how assistive tech announces an element. It does **not** change keyboard behavior — *you* still have to wire that up. `role="button"` on a div doesn't make the div focusable or clickable on Enter; you have to add `tabindex="0"` and a keydown handler yourself.
- ARIA can *break* accessibility if used wrong. Bad ARIA is worse than no ARIA. The MDN ARIA pages and the APG show you the right combinations.

### The three documents you'll hear about

These all come from the same W3C/WAI house, and they answer different questions:

| Document | Answers the question |
|---|---|
| **WCAG** (Web Content Accessibility Guidelines) | "Is this accessible?" The conformance standard with A/AA/AAA levels. |
| **ARIA** (the spec) | "What attributes can I use? What do they mean?" The vocabulary itself. |
| **WAI-ARIA Authoring Practices Guide (APG)** | "How do I combine ARIA + keyboard to build common patterns?" The cookbook with worked examples for tabs, accordions, comboboxes, dialogs, menus, etc. |

When you say "I derived the patterns from WAI-APG" in the MSU STAR — that means you went to the cookbook, read the worked example for "tabs" or "menu button," and implemented that pattern (the right ARIA attributes + the right keyboard interactions) in code.

### Versions

- **ARIA 1.0** (2014) — the original spec
- **ARIA 1.1** (2017) — added more roles and properties
- **ARIA 1.2** (2023) — current published version; this is where the combobox pattern shifted (see the trap below)
- **ARIA 1.3** — working draft as of 2026

---

## WCAG 2.1 → 2.2: the new success criteria

These are the ones most likely to come up in component-pattern conversations.

### Focus indicators (this is the big one)

- **2.4.11 Focus Not Obscured (Minimum, AA)** — when an element has focus, it can't be **entirely hidden** by other content (sticky headers, cookie banners, chat widgets are the usual culprits). Partial obscuring is okay at AA; the AAA version forbids partial too.
- **2.4.13 Focus Appearance (AAA)** — the focus indicator itself has minimum size and contrast requirements (2 CSS pixel perimeter, 3:1 contrast against adjacent colors). AAA so not a hard requirement, but a lot of design systems are building to this anyway.

**Why it matters for Radix:** Radix Primitives expose focus state via `data-state` and `data-highlighted` attributes specifically so you can style focus visibly without fighting the library. The whole point.

### Target size (the new mobile/touch SC)

- **2.5.8 Target Size (Minimum, AA)** — interactive targets must be **at least 24×24 CSS pixels**. There's an exception for inline targets (links in body text) and spaced targets where the spacing creates a 24px hit area.
- This is *less strict* than the iOS HIG (44pt) or Material Design (48dp), so a lot of native-app folks treat this as already solved. Web design systems often need to tighten up.

### Drag alternatives

- **2.5.7 Dragging Movements (AA)** — any drag operation must have a single-pointer alternative (click/tap to move, click/tap to drop, etc.).
- Affects: drag-to-reorder lists, kanban boards, sliders, image croppers.

### Accessible authentication (relevant for WorkOS specifically)

- **3.3.8 Accessible Authentication (Minimum, AA)** — auth flows can't require **cognitive function tests** unless there's an alternative. So:
  - Memorizing a username + password combo is OK *only* if password managers can autofill (so paste must work — don't disable paste on password fields).
  - Solving puzzles, identifying objects in CAPTCHAs, or remembering complex sequences is *not OK* without an alternative.
  - Passkeys, magic links, SSO, biometrics, and password-manager-friendly flows all satisfy this.
- **AAA version (3.3.9)** removes the object-recognition exception entirely.

**Why this is interesting at WorkOS:** they ship the auth layer for a lot of products. This SC effectively ratifies the move toward passkey/magic-link/SSO over traditional password forms. Worth being aware of as a landscape signal.

### Other 2.2 additions

- **3.2.6 Consistent Help (A)** — if you have a help mechanism (chat, FAQ, contact form), it has to be in a consistent place across pages.
- **3.3.7 Redundant Entry (A)** — don't make users re-enter info they already gave in the same flow (autofill, persisted form state).

### The one that was *removed*

**4.1.1 Parsing** was deprecated in 2.2. Quick recap because audit tools still flag it:

What it required (2.0/2.1):
- Elements have proper start and end tags (or self-close correctly)
- Elements are nested correctly
- No duplicate `id` attributes on a page
- No duplicate attributes on a single element

Why it existed in 2008: screen readers used to do their own HTML parsing, and they all did it differently. Malformed HTML could confuse assistive tech. Duplicate IDs broke `aria-labelledby` / `aria-describedby` references because the AT couldn't tell which element won.

Why it was removed in 2.2:
- Modern browsers all parse HTML using the standardized HTML5 algorithm (settled around 2010), and they all fix malformed markup the same way.
- Screen readers now read from the browser's accessibility tree (built from the parsed DOM), not from raw HTML — so the parsing layer is no longer their problem.
- HTML5 explicitly *allows* tag omission in many cases (you can skip `</li>` and `</p>` in valid HTML5), so testing "complete start and end tags" never had a clean answer.
- The genuinely meaningful piece — duplicate IDs breaking ARIA references — is already covered by 1.3.1 Info and Relationships and 4.1.2 Name, Role, Value. So removing 4.1.1 didn't lose any actual accessibility coverage.

If you see "WCAG 4.1.1 Parsing" in an automated report: that's deprecated in 2.2. The actual concerns are covered elsewhere.

---

## WAI-ARIA Authoring Practices: what shifted

The APG (formerly "Authoring Practices") got a major rewrite around 2021–2022 and continues to update with ARIA 1.2 (2023) and ARIA 1.3 (working draft). The patterns themselves haven't transformed, but a few specific recommendations have changed materially.

### Combobox (this one's a trap)

- **Old combobox pattern** (pre-1.2) used `aria-owns` and a parent-wrapper `role="combobox"` on a div containing the input.
- **New pattern** (ARIA 1.2 onward): `role="combobox"` goes on the `<input>` element itself, and `aria-controls` (not `aria-owns`) points to the listbox.
- Lots of older code (and older Stack Overflow answers) still uses the old pattern. **If you cite combobox patterns from memory, you're probably citing the old one.** Best move: don't go deep on combobox unless you've recently re-checked the APG.

### Tabs: activation behavior

- The APG now distinguishes **automatic activation** (tab activates on focus / arrow key) from **manual activation** (focus moves with arrows, but Enter/Space activates).
- Recommendation: use **manual** when the tab panel content is expensive or async-loaded; **automatic** for cheap content swaps.
- Radix Tabs supports both via the `activationMode` prop. Worth knowing.

### Dialog: prefer the platform

- The APG now recommends using the native `<dialog>` element where possible, since it handles focus trap, backdrop, and `inert`-on-the-rest-of-the-page automatically.
- Custom dialog patterns are still documented for cases where `<dialog>` doesn't fit, but the platform is the default now.

### `aria-haspopup` and menus

- Older patterns put `aria-haspopup="true"` on menu triggers. Current guidance: only use it for actual menus (`role="menu"` with `role="menuitem"` children). Don't use it for popovers, dropdowns of selectable options, or dialogs.

---

## Platform-level shifts (2020–2025)

These are the things that make modern a11y *easier* than it was during your Gravity Works era.

### Native `<dialog>` element

- Broadly supported across all major browsers since around 2022.
- Gives you: focus trap on `showModal()`, `Escape`-to-close, automatic `inert`-ing of the rest of the page, native backdrop with `::backdrop`.
- Replaces 80% of custom modal JavaScript. The MSU megamenu modals you built by hand — most of that is now `<dialog>` + a few lines of JS.

### `inert` attribute

- Broadly supported since around 2022–2023.
- Makes a subtree **non-interactive AND non-focusable AND hidden from screen readers** in one attribute.
- Game-changer for modal management — used to take three or four techniques layered together.

### `:focus-visible` pseudo-class

- Broadly supported since around 2022.
- Lets you style focus rings only when keyboard navigation is in use (not on mouse click).
- Replaces a lot of the old `:focus { outline: none }` + manual JS detection of input modality.

### Popover API

- Chrome 114 (May 2023), Safari 17, Firefox 125 — broadly usable now.
- The `popover` attribute and `popovertarget` button attribute give you native popover semantics — auto-close on outside click, focus management, top-layer rendering — all in HTML.
- Distinct from `<dialog>`: popovers are non-modal (don't trap focus, don't disable the rest of the page).
- Reduces need for libraries like Floating UI for simple popover cases.

### `prefers-reduced-motion`

- Has been in CSS since 2017 but is now table-stakes. Anything with autoplay animation, scroll-jacking, parallax, or significant transitions should respect it. Modern audit tools flag missing `@media (prefers-reduced-motion: reduce)` blocks.

### `:has()` selector

- Landed across browsers in 2022–2023.
- Lets you style a parent based on a child's state. A11y use case: `.field:has(:invalid) label { color: red }` or `.modal:has(:focus-visible) { box-shadow: ... }`. Reduces JS-driven state management for visual feedback.

---

## Legal / regulatory shifts (US-relevant)

- **ADA Title II rule (April 2024)** — formally set **WCAG 2.1 AA** as the legal standard for state and local government digital services in the US. Compliance deadlines: 2-3 years for most agencies depending on size.
- **European Accessibility Act (June 2025)** — applies to a lot of digital products and services serving EU consumers, including B2C apps from US companies. **WCAG 2.1 AA** is the floor.
- **Section 508** — last refresh was 2017, aligned with WCAG 2.0 AA. Hasn't been updated to 2.1 yet, but ADA Title II has effectively raised the federal contractor bar.
- **State-level activity** — California, New York, Illinois have their own digital accessibility laws layering on top. The trend is toward stricter enforcement, not looser.

**Practical implication:** the question "what WCAG level do you target?" used to have a soft answer ("AA where reasonable"). Increasingly, **WCAG 2.1 AA is a hard floor** for any product with US government, EU, or large-enterprise customers — which is most of WorkOS's customer base.

---

## Component library landscape (2018 → 2026)

Quick recap of how the Radix-orbit got built while you were on Recharge:

- **Reach UI** (2018, by Ryan Florence) — was the first major headless React a11y library. Discontinued around 2020. Conceptual predecessor.
- **Radix Primitives** (2020, by Modulz / Pedro Duarte / Colm Tuite) — became the dominant headless React library. WorkOS acquired Modulz around 2023; Radix is now maintained at WorkOS.
- **Headless UI** (2020, Tailwind Labs) — alternative from the Tailwind ecosystem. Strong, but less ambitious in primitives surface than Radix.
- **React Aria** (Adobe, 2020) — the most rigorous of the three. Hooks-based, very pure, huge surface. More complex to consume but bulletproof.
- **shadcn/ui** (2023, Hunter Heaton) — exploded in 2023. Not a library you install; it's Radix Primitives + Tailwind components you copy-paste into your repo. The "Radix consumer" pattern made visible.

**Why this matters for WorkOS:** Radix is their flagship open-source product. The team almost certainly considers React Aria a peer they respect, shadcn the dominant consumer pattern, and Headless UI a friendly neighbor. Don't trash any of them. If you want a comparison answer ready: "Radix is the most ergonomic for design-system authors; React Aria is the most rigorous; shadcn is what happens when Radix meets Tailwind in the wild."

---

## What's most likely to come up tomorrow (recruiter screen)

Anna isn't technical, so she won't drill into any of this. But she might ask one of these:

- **"What are you reading / following in a11y?"** → Heydon Pickering (*Inclusive Components*), the WAI-ARIA Authoring Practices, and the WorkOS engineering blog you've been skimming for prep.
- **"What's the latest in a11y you've been keeping up with?"** → "The biggest shift since I was at agency life is honestly platform-level — native `<dialog>`, `inert`, `:focus-visible`, and the Popover API. A lot of the patterns I had to build by hand at Gravity Works are now in the platform. WCAG 2.2 added focus-visibility and target-size requirements that most teams are working through."

For a downstream technical round, expect deeper questions on:
- Focus management across modal/dialog/popover patterns
- Combobox and listbox semantics (the trap above)
- Keyboard interaction expectations for menus/tabs/accordions
- ARIA live regions (which get more nuanced with newer ARIA versions)

---

## What NOT to bluff about

The honesty rules from the WorkOS prep doc apply double here, because a Radix-team interviewer will know fast:

- **WCAG 3.0 specifics** — it's a working draft. If you haven't read it, say so.
- **The current ARIA combobox pattern from memory** — re-check the APG before claiming combobox knowledge.
- **Specific Radix Primitive internals** — you've used Radix as a consumer (and even that more in side-project planning than ship-and-iterate). Don't claim you've read the source.
- **Recent screen-reader behavior changes** — NVDA, JAWS, and VoiceOver have all evolved. Unless you've tested recently, don't claim a current behavior.

The honest framing that always works: **"I built the muscle deriving these patterns by hand at Gravity Works. The standards have moved on the edges since then, and the platform has done a lot of the heavy lifting — that's part of why Radix is interesting to me, because it codifies the patterns I had to author from APG references myself."**

That sentence is true, doesn't overclaim currentness, and lands the Radix hook clean.
