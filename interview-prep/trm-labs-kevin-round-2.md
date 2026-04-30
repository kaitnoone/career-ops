# Round 2: TRM Labs — Kevin (Hiring Manager)

**Status:** Awaiting scheduling. Decision on advancing within 24-48 hrs of 2026-04-27 (Tue-Wed).
**Format:** 45-min technical conversation with hiring manager.
**Pod assignment:** Public sector (FBI / DEA / local law enforcement clients).
**Companion docs:** `interview-prep/trm-labs-senior-frontend.md` (Round 1 prep), `reports/033-trm-labs-frontend-2026-04-17.md`.

---

## What Round 2 will likely test

Kevin is the HM for the public-sector pod, so this round shifts from "do you fit the company" to "do you fit my team's actual work." Probable areas:

1. **React depth.** Architecture choices, state management (Redux/RTK or modern alternatives), component design, performance, testing. He'll want to hear how you reason, not just what you know.
2. **Operational reality.** TRM ships in **weekly sprints with shifting priorities** + weekly on-call rotation. He'll probe whether you can work in that cadence without it becoming chaos.
3. **AI tooling fluency.** TRM expects 80-90% AI code generation. This is real, not aspirational. Kevin will want a substantive conversation about how you actually use Claude / Cursor day-to-day — not "I've used them" but "here's the workflow shape."
4. **Public-sector-pod specifics.** Investigators, federal agencies, prosecutors. The user persona is *not* a casual web user. UX has to hold up under stress, with high data density, with audit trails. He may probe how you'd think about that.
5. **Senior-IC ownership.** Final round has an "ownership" component, but Kevin will pre-screen for it. He'll want to hear how you scope work, push back on bad asks, and operate without hand-holding.

---

## The AI tooling conversation — most important to get right

TRM's culture around AI is unusually concrete. Other companies say "we use AI"; TRM has a number (80-90% code generation) and an expectation that you live in those tools. Your Claude Code skill at Recharge is a real proof point here, but how you frame it matters.

**The honest framing (per memory rule on Claude Code):**

> "I built a Claude Code skill at Recharge — committed to the codebase, runs LLM-assisted review of feature implementations. It was available to anyone on the team running Claude Code locally. I don't want to overclaim adoption — I built it and used it; I don't have data on whether the team picked it up at scale. The honest pattern with these tools: they're good at boring consistency — matching existing patterns, scaffolding, test cases — and bad at noticing when they're off. Where I spend my attention is figuring out which of those two modes I'm in before I take a suggestion."

**That last sentence is the differentiator.** Senior engineers who use AI tools well aren't the ones who accept everything; they're the ones who know when to push back. Kevin will recognize that calibration.

**If he asks about specific workflow:**

- **Claude Code in VS Code** for editing, debugging, talking through implementations before writing
- **Cursor** for fast inline iteration
- **Built-in review skill** at Recharge for catching things before PR
- The honest disclaimer: 80-90% code generation is heavier than your day-to-day at Recharge. Be curious about what that actually looks like in their codebase rather than pretending it's familiar.

**Don't:** pretend you've shipped a fully-AI-generated production feature. **Do:** show that you have an opinion about *when* the tools are useful and *when* they're not — that's senior-IC fluency.

---

## React depth — be ready for architecture conversations

TRM's stack is JS/TS + React (matches your CV). Kevin may probe:

**State management:**
- "How do you decide between local state, lifted state, context, and a real state library?"
- Honest framing: Recharge used Redux Toolkit; you've worked in it. You also have exposure to React Query patterns. State management is "what's the simplest thing that holds invariants."

**Component design:**
- "When do you reach for a custom hook vs a context provider vs prop drilling?"
- The Recharge wizard-flow work is your strong proof point — complex multi-step UI with shared state across components.

**Performance:**
- "How do you debug a slow page? Where do you start?"
- Honest framing: profiler first, not premature memoization. Most "performance problems" are bundle size or render-cascade issues, not React fundamentals.

**Testing:**
- "What does good testing coverage look like for a senior FE engineer to ship?"
- Recharge: React Testing Library + Cypress, coverage standards for new feature PRs. Honest about not being a Vitest evangelist — RTL + Cypress is what you've shipped.

**The "drills" you've prepped:** the React Fundamentals Drills repo at `~/Projects/react-fundamentals-drills/` covers fetch + AbortController, controlled forms, router basics, revalidation patterns, error boundaries. That's the React-specific muscle for after Remix. If Kevin probes any of those, you're in your own freshly-prepped territory.

---

## Operational reality — show you can work in their cadence

TRM ships weekly. That's faster than most enterprise FE teams. Kevin will want to hear that you can:

- **Scope tightly.** "If a sprint goal slips, what do you cut first?" The answer should reference deliberately under-promising or descoping rather than working longer hours.
- **Handle priority shifts.** "What's your reaction when a Tuesday priority becomes a different Friday priority?" The senior answer is "make the cost of the shift visible to the PM and let them decide if it's worth the disruption."
- **On-call comfort.** Weekly on-call every 15-16 weeks is light by infra standards but real for FE. Be honest: have you been on-call before? If not, frame as: comfortable being responsible for what you've shipped, ready to learn the on-call discipline.

**Don't oversell.** Kevin manages a team that lives in this pace. If you sound like "I love chaos!", he'll discount it. The real signal is "I work calmly in shifting priorities and I make tradeoffs visible." That's senior-IC operational maturity.

---

## Public-sector pod specifics

The clients are **investigators**: FBI agents, DEA agents, local law enforcement. The user persona is meaningfully different from typical SaaS UX:

- High-stakes work — a UI mistake could affect a case
- Dense data — investigators trace flows across hundreds of transactions
- Audit trail required — every action needs to be logged
- Stress-tolerant — these aren't users who get to be in flow state; they're working under time pressure
- Specialized vocabulary — Kevin will speak in terms like "case", "investigator", "asset tracing", not "user", "feature"

**If Kevin probes how you'd approach this user:**
- Don't pretend you've worked with law enforcement. You haven't.
- Honest pattern: you've worked with users under pressure (essential workers applying for DHS COVID benefits at Gitwit; merchant-side users at Recharge with revenue at stake). The pattern transfers — UI has to be fast, accurate, and forgive small mistakes without losing data.
- The Gitwit DHS work is your closest analog. Lean on it.

---

## Questions to ask Kevin

Pick 3-4. Lean technical/team since Analiz covered company strategy.

**On the team:**
- "What's the make-or-break trait for someone new on your pod past first 90 days?"
- "How big is the public-sector pod right now, and what's the trajectory? You mentioned growing to 10 — what kind of mix of senior vs mid, IC vs lead?"

**On the work:**
- "What does a typical week of priorities look like — how much is incoming customer escalations vs roadmap work vs technical debt?"
- "What's the most interesting thing the public-sector pod has shipped in the last six months — something where you and the team felt good about the result?"

**On AI workflow specifically:**
- "When you say 80-90% code generation, what does that actually look like in PR review? Are you reviewing AI-generated code differently than human-written code, or is the line getting blurry?"
- "What's the failure mode you've seen with engineers who lean too hard on AI tooling?"

**On the take-home:**
- "Anything you'd want me to be ready to think about for the React take-home? Scope, what you're looking for, traps to avoid?"

**On Kevin (relationship-builder, optional):**
- "What brought you to TRM, and what's kept you?"

---

## What's next after this round (already known)

If Round 2 advances:
1. **React take-home challenge** — concrete, scoped engineering work
2. **Final round:** presentation + AI fluency + ownership interviews
   - Presentation = walk through past work
   - AI fluency = deeper than the Round 2 conversation
   - Ownership = senior-IC scope and judgment

The take-home is the highest-leverage next step. Kevin's Round 2 will likely set up what's expected. Listen carefully and ask what scope looks like.

---

## Don't

- **Don't overclaim AI tooling adoption.** Claude Code skill at Recharge: you built it, available locally, no team-adoption data. Honest framing only.
- **Don't pretend law enforcement / public-sector domain depth.** You don't have it. Frame as transferable user-empathy from Gitwit DHS work.
- **Don't oversell weekly sprint comfort if you haven't lived in it.** Recharge had longer cycles. Honest: ready for the cadence, ready to learn it.
- **Don't claim Vitest / Playwright / [trendy testing tool] depth you don't have.** RTL + Cypress is your shipped reality. That's enough.
- **Don't relitigate comp.** $200-220K + equity + bonus was confirmed in Round 1. Round 2 is technical evaluation. Save offer-stage negotiation for later.
- **Don't mention the RIF.**
- **Don't fabricate crypto / blockchain familiarity.** Per the original eval, crypto is "a plus, not required." Honest: you haven't worked in crypto. The user-empathy and FE craft transfer.

---

## After the call

- **Same-day thank-you to Kevin.** Short, specific, one concrete callback. Reference the take-home if he scoped it.
- **Update tracker #36** with Kevin's read, take-home scope, timeline.
- **Prep for the take-home** within 24 hrs of receiving it. The React Fundamentals Drills repo at `~/Projects/react-fundamentals-drills` is direct prep — fetch + abort, controlled forms, router, revalidation, error boundaries.
- **Update memory** if Kevin shares anything material about the team / culture / public-sector workflow specifics.
