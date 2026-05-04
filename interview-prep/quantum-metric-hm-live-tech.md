# HM Live Tech: Quantum Metric — Senior Customer Success Engineer

**Date scheduled:** Monday 2026-05-04 at 3pm CDT (confirmed)
**Format:** **1-hour Zoom · LIVE TECHNICAL ROUND**
**HM:** TBD (ask Lily for name + role; check LinkedIn the day before)
**Process post-Monday:** VP CSE 30min → CCO 30min → CEO (P/P/I values culture fit)
**Channel:** Referral via Colson Scott (ex-Gitwit), recruiter Lily Akwisombe
**Source eval:** `reports/030-quantum-metric-cse-2026-04-17.md`
**Recruiter prep (Wed 2026-04-29):** `interview-prep/quantum-metric-senior-cse.md`
**Status:** Recruiter screen done; HM "impressed with background"; take-home submitted same day, you read it as easy + needed a few vanilla JS refreshers.
**Confirmed by Lily:** 1hr · **includes live technical exercises** · also the round to surface deeper role questions (account ownership / duration, implementation and customization expectations, hands-on vs advising client developers).
**Urgency flag:** Other candidates in late-stage interviews; role could close mid-process. **Softening context:** evergreen / recurring role — if this one closes, they may be able to pick up where you left off when another opens. So: be ready, but don't panic-pace.

---

## What this call IS (and isn't)

**LIVE TECHNICAL ROUND with the HM.** Likely shape:
- 5–10 min HM intro + your walkthrough
- 30–45 min live coding (vanilla JS based on take-home shape)
- 10–15 min Q&A + your questions

The live coding is the load-bearing piece. Behavioral is secondary. **The bar is "can this person sit with a customer's engineer and write code on a screen-share without losing the thread."**

---

## The 4 fixes from Wednesday's self-debrief

These are non-negotiable for Monday:

1. **DROP RIF mention.** Per memory `feedback_no_rif_in_documents`. If "why are you looking?" comes up — forward-only: *"Looking for a role where the human/technical bridge is an explicit asset, not a side effect of the job."*
2. **Lead with the Recharge wizard 4.2× retention.** Per memory `feedback_lead_with_wizard_metric`. Single sharpest proof point. Use it as the opener for any "tell me about a recent project" or "what's your most technical work" question.
3. **Name Felix Agentic when "why QM" comes up.** Detail below — this is the angle that makes the "why QM" answer specific and current, not generic.
4. **Drop softeners.** "I think," "I'd say," "kind of," "maybe." Senior register without padding. Lily flagged this in the recruiter screen — watch for it under live-coding pressure especially.

---

## Pre-call refresher: vanilla JS / DOM + vanilla React patterns (do morning of, ~30–60 min)

Per memory `user_vanilla_js_rust`: core JS strong, but raw DOM patterns need a refresh before live coding. Framework reflexes overshadow vanilla DOM under pressure.

**Also per memory `user_recharge_remix_stack`:** Recharge was Remix end-to-end for 4 years. Vanilla React patterns (useEffect for client-side data fetching, classic React Router without Remix's loader/action layer, complex Context/Redux) are a soft area. If the live-coding prompt is Remix-flavored (loaders, actions, SSR, server-side data) → strong, lead confidently. If it's vanilla-React-flavored (client-side hooks, useEffect for fetching, classic state management) → take a deliberate beat to think before coding, narrate your reasoning, ask clarifying questions about whether server-side data-loading patterns are in scope.

**Skim MDN on each:**

1. **querySelectorAll iteration**
   - `for...of` works on NodeList; `forEach` works on NodeList in modern browsers
   - `for...in` does NOT work for iteration (returns indices not items, plus inherited props)
   - Convert to array when needed: `[...nodes]` or `Array.from(nodes)`

2. **classList API**
   - `el.classList.add('x')`, `.remove('x')`, `.toggle('x')`, `.contains('x')`, `.replace('old', 'new')`
   - Don't use `el.className += ' x'` — error-prone

3. **sessionStorage / localStorage**
   - `sessionStorage.setItem('key', JSON.stringify(value))`
   - `JSON.parse(sessionStorage.getItem('key'))` — null-safe with `?? defaultValue`
   - sessionStorage = tab lifetime; localStorage = persistent

4. **addEventListener cleanup**
   - `removeEventListener` requires the SAME function reference (named function or stored arrow)
   - Modern: `AbortController` + `signal: controller.signal` in addEventListener options. `controller.abort()` removes all.

5. **Event delegation**
   - `event.target` = the element clicked; `event.currentTarget` = the element with the listener
   - Use `closest('.selector')` for delegated handlers

6. **Modern fetch / async**
   - `try/catch` around `await fetch(...)`; check `response.ok` before `.json()`
   - AbortController for fetch cancellation too

7. **DOM creation**
   - `document.createElement('div')`, `el.append(child)` (multiple, accepts strings)
   - `el.replaceChildren(...newChildren)` — modern, replaces all
   - `el.insertAdjacentHTML('beforeend', html)` — quick HTML strings (XSS-safe input only)

8. **Form handling**
   - `event.preventDefault()` on submit
   - `new FormData(formEl)` → use `.get()`, `.getAll()`, iterate with `for...of` of `.entries()`

**MDN quick links to bookmark:**
- developer.mozilla.org/en-US/docs/Web/API/NodeList
- developer.mozilla.org/en-US/docs/Web/API/Element/classList
- developer.mozilla.org/en-US/docs/Web/API/AbortController

---

## Felix Agentic — context and "why QM" framing

QM launched **Felix Agentic** on 2026-03-25 (~5 weeks before this call). It's their agentic-AI play on top of digital-experience analytics. Three components:

- **Felix Chat** — plain-language answers to digital-experience questions; explores underlying data automatically
- **Background Agents** — continuously monitor KPIs, proactively alert teams to changes with explanations
- **Copilot** — UI assistant inside the QM platform for building/analyzing experience views

Built on Google Gemini. Dataset they describe as 2,700x richer than traditional analytics. Available to existing customers, rolling to new in coming weeks.

**Why this matters for "why QM":** You've been working with AI as a thinking partner in your own engineering for the past year — Claude Code skill at Recharge for LLM-assisted review, Claude as a sparring partner on LHS Alumni matching logic. Felix is heading in a direction that maps to how you already work: agents as collaborators, not replacements. Not generic AI excitement; a specific shared philosophy.

**Canonical "why QM" answer (~60 sec):**

> "Two things specifically.
>
> First, the product answers a question I've been chewing on for years as a frontend engineer: why do users struggle? I've gotten close with Segment pipelines and accessibility audits, but those are partial views. QM does that work at scale across enterprise customers, and that's the kind of visibility I've wanted.
>
> Second, Felix Agentic. I've spent the last year using Claude as a thinking partner in my actual work. I built a Claude Code skill at Recharge for LLM-assisted code review, and on a side project right now I'm using Claude to pressure-test design decisions on alumni-matching logic. I like agents in my workflow as collaborators, not replacements. From what I've read, Felix is heading that direction, and that's the kind of AI work I want to be part of."

---

## Story bank — mapped to QM's three values (Passion / Persistence / Integrity)

These were Colson's referral framings (per memory `project_qm_referral_intel`). The recruiter has likely passed them to HM. Live up to them, don't quote them.

### Passion: "Building empathy with users; crafting the best solutions to solve their problems simply"

**Recharge wizard activation flow** — ~60 sec

- **Setup:** Working on the activation flow at Recharge. The existing canvas-builder pattern was high-friction — same-session deactivation ~38% in one offering.
- **Tension:** Wizard rebuild was the load-bearing UX change for the offering. Get it wrong and retention keeps bleeding; get it right and the offering finally lands.
- **Action:** Built on what design and product defined. Surfaced edge cases that refined the wizard pattern (progressive disclosure, dependency-driven steps, smart defaults, validation guardrails). Owned the technical layer — architecture, React + TypeScript, validation logic, rollout. (Per memory `feedback_wizard_story_scope` — don't claim end-to-end ownership; concept was design+product, technical was mine.)
- **Result:** Same-session deactivation dropped to ~9%. 4.2x retention improvement over the prior cohort.
- **Why it lands:** Empathy translated into a UX pattern that handled cognitive load. That's the work a CSE does — listening to a customer struggle with QM, then building the right configuration to remove the friction.

### Persistence: "Becoming an expert in areas with no previous experience, even when not exciting"

**Multi-framework currency** — ~45-60 sec

- **Setup:** Nine years of frontend work spanning multiple stacks. Vue and Nuxt at Sleepme, Vue at Recharge, then Remix at Recharge after a mid-tenure migration, Angular at Gitwit, Liquid and Shopify theming at Taproom, currently Next.js 16 with server actions on a side project.
- **Tension:** Each ramp was real work, not just syntax. New mental models, new data-flow patterns, new tooling. Every two to three years I've had to learn a new stack and ship production work in it.
- **Action:** Ramp pattern is consistent — pair with someone deep on the team early, read the docs end-to-end, ship something small first to feel the API, then take on real work. I don't try to absorb everything before touching the code. I get my hands dirty fast and learn from what breaks.
- **Result:** Shipped production on every framework I've worked in. Never been the bottleneck on a stack change.
- **Why it lands:** A CSE ramps on every new enterprise customer's specifics — their stack, their data model, their KPIs, their deployment patterns. I've done that kind of ramp multiple times across multiple frameworks. The muscle is in place.

**Why this anchor over a single arrival story:** Per `feedback_trim_dont_explain` and `user_recharge_remix_stack`, Kaitlyn lived the Vue→Remix paradigm shift but never explicitly clocked the BFF/loader/action pattern as "the change" until 2026-05-03. Multi-framework currency is honest, defensible without new articulation work, and reframes Persistence as muscle (the ramp itself) rather than arrival (the moment of mastery). Save the Remix paradigm-shift story as homework for QM R2 / future rounds once articulation is rehearsed.

### Integrity: "Unafraid to point out growing pains; advocate for doing the right thing by clients"

**Gitwit company-wide WCAG talk (Kith Care app)** — ~60 sec

- **Setup:** Rebuilding the Kith Care app at Gitwit — the COVID childcare benefits platform. Mostly reusing the existing design, but doing it right needed accessible component swaps in a few places, which meant extra time over a literal design-port.
- **Tension:** Easy path: port as-is, ship faster, treat a11y as polish. But I'd come to Gitwit a couple years out from the MSU RCPD work at Gravity Works, where a11y was the actual brief. I wasn't willing to ship a knowingly-worse pattern to save the days.
- **Action:** I had to present on something internally, and I used the slot to give a company-wide WCAG talk. Made the preemptive case for why a11y depth mattered — for users, for client trust, and for the time I'd need on my project. Brought the MSU RCPD experience as the depth behind it.
- **Result:** Made the time-take on my own project slightly easier when it came up. Wasn't fighting heavy pressure to begin with, but the talk planted a stake — raised the a11y baseline at Gitwit so subsequent projects had something to measure against.
- **Why it lands:** The integrity here was making the public case instead of silently doing it and asking forgiveness. Front-loaded the harder conversation. That's the CSE pattern — when a customer's QM rollout is heading toward a corner, make the case for getting it right before the corner becomes an incident.

### Bonus 4th story for problem-solving / AI-fluency questions

**LHS Alumni matching logic (live now)** — ~60 sec

- **Setup:** Building a community app for an old high school. Needed to reconcile alumni records with future reservation users. Asked Claude how to handle.
- **Tension:** Auto-merge on partial matches would risk wrong-merging two real alumni; rejecting all partial matches would block legitimate users. Either failure mode costs trust in a small community.
- **Action:** Claude proposed a three-state outcome (matched / no_match / ambiguous). Pushed back on the ambiguous case for v1 — ambiguous goes to human review by a board member, not algorithmic auto-merge. The cost of a wrong-merge in a small alumni board > the cost of two minutes of human time.
- **Result:** Three-state matching shipped in the bootstrap claim form (live 2026-04-30).
- **Why it lands:** AI as thinking partner + senior-IC trust-call about where to put the human-in-the-loop. Felix Agentic is making that decision at production scale — where do you trust the agent versus surface to a human analyst.

---

## Behavioral questions likely

**Format note:** This is a best-effort list — actual HM live tech could be heavier on technical/take-home walkthrough than behavioral. Each row gives you a one-line anchor + a key reminder. For story-anchored questions, the full STAR+R lives upstairs (Passion line 127, Persistence line 137, Integrity line 153).

| Question | Anchor + key reminder |
|---|---|
| "Why CSE not FE?" | Bridge-pivot, translator role as the job not a side effect. **Drop softeners.** |
| "Why Quantum Metric specifically?" | Use canonical Felix Agentic answer (line 100). Specific, current, paired to your own AI work. |
| "Why are you looking?" | *"I want a role where the technical and people sides of the work are both the actual job. I've been doing both for years and want to solidify it."* Forward-only. **NO RIF.** |
| "Are you interviewing elsewhere?" | *"Yes, a few processes. QM is among the top because of the product shape and Felix Agentic direction."* Don't list names. |
| "How fast could you ramp on QM tooling?" | *"Fast. Sleepme — ramped on Nuxt + Strapi + Segment in 90 days. For QM I'd expect to be meaningfully productive in 4–6 weeks."* |
| "Tell me about your most technical client engagement" | Lead with Recharge wizard (Passion, line 127). 4.2x retention metric early. |
| "Tell me about a time you handled a difficult customer" | Recharge wizard edge-case advocacy. The "customer" is the merchant — flexibility let them save broken configs. Surfaced each edge case as an explicit protect-vs-trust decision. Owned the technical layer either way. |
| "Tell me about a time you advocated for the right thing" | Gitwit company-wide WCAG talk (Integrity, line 153). Made the public case rather than silently doing it. Planted a stake. |
| "Tell me about a time you ramped on something new" | Multi-framework currency (Persistence, line 137). Vue → Angular → Remix → Liquid → Next.js. The ramp itself is the muscle. |
| "Walk me through your take-home" | Read submission Monday AM. Lead with what was easy, name what made you think hardest, name what you'd improve. |
| "What was the take-home easy / hard for you?" | Honest, anchored to senior judgment. Don't claim "everything was easy" — name a real moment of design judgment. |

---

## Likely live-coding categories (mental models for each)

You don't know the prompt yet. Probable shapes given QM's product:

1. **DOM manipulation** — given a page, manipulate selection / classes / state. (High probability.) Anchor: vanilla JS refresh above.
2. **Data transformation** — given a JSON of customer events, parse/filter/transform. (High probability.) Pattern: `array.filter().map().reduce()` chains. Watch for edge cases (missing fields, mixed types).
3. **Async / fetch** — call an API, handle results, cleanup. (Medium.) Pattern: `try/catch await fetch`, `response.ok`, AbortController.
4. **Light system-design conversation** — "if you were configuring QM for a customer, how would you think about X?" (Medium for CSE.) Anchor: stakeholder needs first, then data model, then UI.
5. **Debugging existing snippet** — given broken code, find what's wrong. (Medium.) Pattern: read carefully, check loops, check state, check async.

**Live-coding posture:**
- **Talk while coding.** "I'm thinking I'll use querySelectorAll to grab all the rows, then iterate and add a class…" Narration is half the eval.
- **Ask clarifying questions.** "Should this handle empty inputs?" "Are we styling or just toggling state?" Senior-IC move.
- **Write tests-of-thought even informally.** "Let me trace through with one example to make sure this is right."
- **Don't apologize for thinking.** Pauses are normal. Filling silence with softeners ("um, I think maybe…") is what the self-debrief flagged.

---

## Questions to ask the HM

Pick 4–5. Different from recruiter screen — these are manager-shape.

**Priority — Lily explicitly flagged these for HM. Ask all three.**
- "How does account ownership work? Are CSEs assigned dedicated accounts, and what's typical account duration — long-running engagement or shorter implementation cycles?"
- "What does implementation and customization actually look like for a CSE? How much of the work is configuring QM for a customer's specific data model vs reusable patterns across customers?"
- "How hands-on is the role vs advising the customer's developers? Am I writing JavaScript inside their codebase or more often guiding their engineers on what to write?"

**On the role and team:**
- "What does success look like for a Senior CSE at QM in the first 6 months?"
- "How does the team-of-three model (CSE + Consultant + AM) actually work day-to-day? Who owns what when there's tension?"
- "What's a typical week look like for the team — heads-down configuration vs customer-facing split?"

**On the manager's perspective:**
- "What's been the most successful CSE hire on your team — what made them work?"
- "What's the biggest evolution in the CSE role at QM in the last year?" (Felix Agentic is a clean lead-in if they don't bring it up first.)

**On Felix Agentic / AI direction:**
- "How is Felix Agentic changing what CSEs do day-to-day? Where's the agent's judgment vs the analyst's judgment?"
- "What's the customer reception been like since the March 25 launch? Any feedback that's surprised the team?"

**Process / urgency:**
- "What's the typical timeline from this round to offer? Lily mentioned the role could close mid-process — what helps me keep momentum?"

---

## What NOT to bring up

- **RIF / layoffs / reasons for leaving Recharge** (per memory `feedback_no_rif_in_documents`)
- **Comp / band negotiation** — recruiter territory; if HM raises, defer to Lily
- **Specific other companies** you're interviewing with — don't list names
- **The Recharge subscription-widget audit** (per memory `feedback_no_recharge_audit_proof`) — Gitwit + Gravity Works MSU carry the a11y throughline
- **Soft contradictions to urgency** — don't say "I'm taking my time" when the role might close mid-process
- **"Voice of the merchant" framing** (per memory `feedback_no_voice_of_merchant`) — UX judgment in engineering decisions, not synthesized customer feedback

---

## Logistics checklist

- [ ] **Confirm Zoom link 24h before** — email Lily Sunday if nothing has been sent
- [ ] **Get HM name from Lily** — check their LinkedIn the night before for context (background, recent posts, hiring history)
- [ ] **Read the take-home submission Monday morning** — fresh, not relying on memory
- [ ] **30–60 min vanilla JS DOM refresher Monday morning** — MDN pages above; don't go in cold
- [ ] **Re-read this prep doc 5 min before** — review the 4 fixes (DROP RIF / wizard / Felix / drop softeners)
- [ ] Camera on, quiet space, good lighting, water
- [ ] CV on second screen, prep doc on second screen, take-home accessible
- [ ] Coffee + steady breakfast (no big meal right before)
- [ ] Test screen-share before — they'll likely have you share for live coding

---

## Post-call

Within 1 hour:

1. **Update tracker row #33** with: HM name, what came up in live coding, how it went on your read, anything new about the team / process / urgency
2. **Add to `reports/030-quantum-metric-cse-2026-04-17.md`:** HM perspective on the role, team dynamics, Felix Agentic post-launch reception, anything substantive
3. **Send Lily a short thanks-for-the-screen note** (warm, brief — per memory `feedback_thank_you_note_voice`)
4. **If advancing: queue VP CSE 30min prep**
5. **Send Colson a short substantive note** (referral hygiene — "call happened, here's a takeaway"; per memory `feedback_no_cold_followups`'s narrow exception for substantive updates via warm channel)

---

## One quote to internalize, not paraphrase

From Colson's referral form (per memory `project_qm_referral_intel`):

> *"It's very easy to just say 'that's not my job, and therefore, not my problem.' I never once saw that from Kaitlyn."*

The Gitwit company-wide WCAG talk is the cleanest live-up-to-it anchor. She had to present on something, but choosing a11y and making the org-wide case was beyond strict scope — that's "not my job, but my problem." Be ready with it.
