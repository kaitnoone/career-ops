# Kaitlyn Noone — Studio Site Build Plan

**Domain:** kaitlynnoone.com
**Status:** Planning → Phase 1 (not started)
**Created:** 2026-04-22
**Unblocks:** Vercel Design Engineer application (#086) and future DE / senior FE / craft-dependent role applications

---

## Goal

A durable personal studio site that:

- Holds Kaitlyn's whole schtick in one place — craft-first frontend, a11y throughline, multi-framework, adopter-level AI tooling, writing voice
- Serves both FT applications (Vercel DE, WorkOS-tier FE, SE / CSE) and consulting-shape leads (Wurst/Tin, Texan Title, Taproom alumni network) without fragmenting
- Grows over time — new lab artifacts, occasional writing, CV updates — without a rebuild

**Explicitly NOT a goal:** reconstructing pre-2020 agency case studies (Sandhills, Gravity Works, Taproom). Old work she can't access stays off the site as anchor content. See memory: `feedback_no_old_or_inaccessible_case_studies.md`.

---

## Site shape — three peer sections + home

| Route | What lives there | Who it serves |
|---|---|---|
| `/` | One-line positioning + the single newest lab artifact featured | Everyone lands here first |
| `/lab` | Interactive artifacts, one per piece. Each has inline commentary on craft decisions. | DE recruiters, FE hiring managers, shadcn-adjacent roles |
| `/writing` | Links to Substack + occasional technical notes. No content duplication. | SE/CSE writing bar, AI-PM cohort reviewers, "can they communicate" readers |
| `/work` | Honest CV-in-web. Role, company, stack parenthetical, 1–2 lines. No pre-2020 case-study museum. | Traditional recruiters, warm referrers, consulting leads |

**Stack:** Astro (keep current theme as base), React islands for interactive /lab artifacts.

---

## First /lab artifact — `/lab/inquiry-form`

### One-line
A real, working multi-step inquiry form that doubles as a craft demo for focus management, validation UX, and accessible stepping. Users actually submit it to reach Kaitlyn.

### Why this shape
- Real stakes = real design decisions (a demo form decides nothing; a working form decides everything)
- Recharge wizard-flow experience translates directly — real taste, not hypothetical
- Branches the FT ↔ consulting swing in one form (FT role / short project / just saying hi)
- Nobody else's portfolio has a thoughtfully-designed inquiry form

### User flow (3 steps, ~90 seconds)
1. **Step 1 — Who + intent** — name, email, radio (FT / short project / hi)
2. **Step 2 — Context (conditional on Step 1)**
   - FT → company, role title, JD link (optional)
   - Short project → project shape, rough budget, rough timeline
   - Hi → textarea
3. **Step 3 — Review + send** — summary with inline-editable fields, submit

### Locked decisions
| Decision | Pick | Why |
|---|---|---|
| State + validation | React Hook Form + zod | Industry standard; frees craft budget for the parts that are visible. Commentary can reference zod schema as the "validation contract." |
| Backend | Formspree | Zero craft signal lives in the endpoint. 15 min setup. Free tier = 50 submissions/month. |
| Branching reset | Warn before clear, via Radix Dialog | Safer, gives an extra primitive surface to showcase (Dialog focus trap, focus return, reduced-motion). |

### The 7 craft sections (visible in `/lab/inquiry-form` commentary)

1. **Inter-step focus management** — On "Next," focus moves to the first field of the next step (not heading, not body). On "Back," focus returns to the field the user left off on.
2. **Validation timing + announcement** — Validate on blur per field + on "Next" for untouched required fields. Never on keystroke. Errors announce via `aria-live="polite"`. Failed "Next" moves focus to the first invalid field.
3. **Conditional branching + Dialog-based confirm** — Changing Step 1's answer after filling Step 2 triggers a Radix Dialog warning. Copy names what will be cleared (`aria-describedby`). Focus return goes to the sensible predecessor, not the Step 1 radio.
4. **Stepper progress semantics** — Not decoration. `aria-current="step"`, labeled steps, completed steps clickable with clear focus/hover state.
5. **Motion + reduced-motion** — Default: 200ms slide+fade between steps; scale+fade for Dialog. `prefers-reduced-motion: reduce` → instant swap, no transform. Not "animation off" — genuinely different transition.
6. **Submit → success focus handoff** — On submit, focus moves to success/failure message (live region). No stale focus on the gone button.
7. **Dialog focus-return target (bonus)** — Radix handles focus trap + aria-modal. The *taste* lives in deciding where focus returns on Dialog dismiss — the cancel button, the field the user was about to change, or the radio they clicked? Rauno-tier decision.

### Radix vs. Kaitlyn's part

| Radix | Kaitlyn's craft |
|---|---|
| `RadioGroup.Root` / `RadioGroup.Item` | Stepper (component + state) |
| `Label` | Inter-step focus management |
| `Dialog.Root` / `Dialog.Content` | Dialog copy + focus-return target |
| (Optional) `@radix-ui/react-form` | Validation pattern (timing, announcement, focus on error) |
| | Motion + reduced-motion across steps AND Dialog |
| | Success/failure live-region announcement |

### Scope — IN vs OUT

**IN:** 3-step flow as spec'd · all 7 craft sections · Formspree email delivery · responsive mobile · light/dark mode (if site has it)

**OUT:** file uploads · CAPTCHA (Formspree filters spam) · localStorage drafts · rich text · analytics/tracking

### Content tone
Short field labels. No "Smith, John" placeholders. One sentence of warmth at the top ("Tell me what you're working on"). Claude can draft copy when build is close to shipping.

---

## Phased implementation plan

### Phase 1 — Site structure (~2–3 hours)
- Restructure nav to `/` · `/lab` · `/writing` · `/work`
- Strip anything that reads as "old case-study museum"
- Draft home positioning sentence (Claude: 3–4 options for Kaitlyn to pick from)
- Placeholder `/lab` and `/writing` index pages with empty states

**Ship target:** nav + home live, empty section pages visible

### Phase 2 — `/work` content rewrite (~2 hours)
- Honest CV-in-web: role, company, stack parenthetical, 1–2 lines each
- No pre-2020 case-study reconstruction
- Lead throughline: Recharge + Sleepme + Gitwit + Claude Code skill + WCAG talk
- Claude drafts from `cv.md`, Kaitlyn iterates

### Phase 3 — `/writing` setup (~1 hour)
- Link Substack, no content duplication
- Curate 3–5 recent posts as entry path
- Occasional technical notes inline can come later

### Phase 4 — `/lab/inquiry-form` build (~2–3 weekends)
- **4a — Spec** (DONE — this doc)
- **4b — Build in sandbox** — StackBlitz or local; iterate on interaction/motion/a11y before dropping into the Astro site
- **4c — Integrate + inline commentary** — drop into `/lab/inquiry-form`, write 7 decision sections (~250 words total, not a blog post)
- **4d — Accessibility test** — VoiceOver + keyboard-only + reduced-motion preference. Fix what's broken. Note anything interesting for commentary.
- **4e — Feature on home** — pull the artifact into the home page's "newest craft" slot

### Phase 5 — Domain + polish (~1–2 hours)
- Point `kaitlynnoone.com` → Netlify (Kaitlyn does DNS; Claude can hand over steps)
- Update social profiles (LinkedIn, X, GitHub) to new URL
- Core Web Vitals check, full-site a11y audit (axe DevTools)
- Ship

### Phase 6 — Vercel submission (~1 hour, after Phase 5 lands)
- Tailor CV with agency-era reframe — surface the client roster, skip deep case-study reconstruction
- Draft "why you'd be a good fit" short-answer (~150–200 words): lab artifact + a11y throughline + AI-tooling
- Submit with `kaitlynnoone.com` in optional portfolio field

---

## Timing

- **Minimum viable ship:** ~2 weekends + light weekday polish
- **Comfortable pace:** 3–4 weekends

## Division of labor

### Where Claude helps directly
- Home-page positioning sentence (3–4 options)
- `/work` copy draft
- Lab-artifact spec (done — this doc)
- Form copy (labels, Dialog body, success message)
- zod schema shape
- Stepper state-machine sketch
- `/lab/inquiry-form` commentary (7 decision sections)
- Vercel "why you'd be a good fit" draft
- Vercel CV tailor

### Where Kaitlyn builds solo
- The actual artifact code
- Visual design pass
- DNS (her accounts)
- VoiceOver / keyboard testing (her hardware, her judgment)

---

## Open decisions still to make

1. **Site scaffold** — keep current Astro theme as base, or strip/restart with cleaner custom Astro setup? *Lean: keep theme, restructure sections — lower friction, ships faster.*
2. **Visual direction** — does the site need a visual-design pass (typography, color, spacing overhaul), or is the current theme fine for now? Can defer until Phase 5 polish.

---

## Related artifacts / downstream effects

- Unblocks Vercel DE (#086) — the first `/lab` artifact IS the portfolio signal for that application
- Updates CV tailoring strategy: `kaitlynnoone.com` goes in the portfolio field on future FE/DE/SE applications
- Serves consulting surface (Wurst/Tin, Texan Title, future inbound) with the `/` inquiry form
- Memory: `feedback_no_old_or_inaccessible_case_studies.md` governs anything that suggests "polish old agency work" going forward
