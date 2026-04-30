# Recruiter Screen: TRM Labs — Senior SWE, Frontend (Product Engineering)

**Date scheduled:** Monday 2026-04-27 · 1:00–1:30 PM CDT
**Format:** 30-min Google Meet video (camera on at start)
**Channel:** Friend's-friend referral (submitted 2026-04-21 window, interview booked 2026-04-23)
**Recruiter:** Analiz Strong — analiz.strong@trmlabs.com
**Meet link:** https://meet.google.com/kqu-seny-kit
**AI note-taker:** Metaview may be used. Opt-out link in calendar event — decide in advance.
**Source eval:** `reports/033-trm-labs-frontend-2026-04-17.md` (Score 4.2/5, Legitimacy High Confidence)

---

## What this call is (and isn't)

This is a **recruiter screen**, not technical. Analiz's description says "learn more about your interests and share insights about TRM Labs and the opportunity." Standard first-call shape:

1. Her 2–3 min TRM pitch
2. Your 2–3 min walk-through
3. What you're looking for
4. Comp + logistics alignment
5. Process overview from her
6. Your questions

**Outcome to aim for:** she walks away with "yes — forward to hiring manager" confidence. You walk away with a clear read on process timeline, team shape, comp flexibility, and whether the intensity-culture reputation is real.

---

## Core narrative (2–3 min walk-through)

> "9+ years shipping frontend across Vue, Angular, React, and Liquid. Most recently at Recharge for 4 years on the subscription widget — multi-tenant at thousands-of-merchants scale, deployed across every merchant using the app. Before that, Sleepme's rebrand middleware, Gitwit's $2M child-care platform during COVID, and 3 years of agency work at The Taproom and Gravity Works with enterprise clients — Nestlé, Copper Cow, InsideTracker, MSU.
>
> My throughline has been accessibility and complex-state discipline at scale — I gave a company-wide WCAG talk at Gitwit, contributed to an early accessibility audit of the Recharge widget, and at Gravity Works built a keyboard-navigable megamenu for the MSU Resource Center for Persons with Disabilities. I'm looking for a senior IC role at a company with a clear mission — TRM's work on financial crime caught my attention because the engineering discipline transfers cleanly from where I've been (multi-tenant scale, performance under real usage, making the UI legible to users who aren't consumers), and the mission is serious enough to care about."

Adjust live. If she opens with "tell me about yourself" — start here. If she opens with "what drew you to TRM" — flip to the mission paragraph first.

---

## Signals to land

- **Multi-tenant frontend at thousands-of-merchants scale** — Recharge subscription widget deployed across every merchant using the app; every decision had to account for configuration variance, host-site theme interference, and performance across a huge range of tenants. **Primary anchor — concrete, sticky, maps directly to TRM's product shape.**
- **Complex-state discipline underneath** — intricate state across billing cycles / configurations / customer flows at Recharge; multi-stakeholder admin across caseworkers/families/agencies at Gitwit. This is the engineering transfer argument once the multi-tenant anchor lands.
- **Mission alignment** — board member, ERG co-lead, rural tech advisory committee; your work has always been about more than code. Financial crime fighting maps to that pattern
- **Accessibility as senior differentiator** — TRM's audience is law enforcement analysts and compliance teams, not consumers. A FE eng who thinks about cognitive accessibility, keyboard nav, screen-reader flow is genuinely valuable here
- **Multi-framework depth** — Vue/Angular/React/Liquid. React is ~2 years of a 9+ year career. Honest framing, reinforces "I learn fast"
- **Distributed-first comfort** — 9+ years remote/distributed work; 6-hour PST overlap is fine from Tulsa (CDT = 2hr ahead of PST)

## Signals NOT to overclaim

- **"Data-heavy UI" in the TRM-product sense** — TRM ships graph/network visualizations of fund flows, virtualized transaction tables across billions of rows, and investigation-tool UIs. You haven't built those. Lean on **complex-state enterprise UIs** instead, which IS defensible. See the pressure-test scripts below.
- **Virtualized-grid libraries** — TanStack Table as a consumer at Recharge (touched existing tables: added columns, tweaked behavior; did not set one up). No shipped practice with react-virtual, react-window, or AG Grid. Concepts familiar (memoization, pagination, controlled re-renders); heavy virtualization-at-scale practice not there.
- **Charting / data-viz libraries** (D3, Recharts, visx) — zero experience. If asked about data-viz, flag ramp-from-first-principles.
- **Real-time streaming UIs** (WebSocket-driven, high event throughput) — not in your work.
- **Crypto / blockchain experience** — ZERO. JD calls it "a plus" not required. Be honest, lean on mission interest. See script below.
- **Styled-components specifically** — not used by name. CSS-in-JS is trivial given React + CSS background; don't pretend it's a checked box
- **React tenure** — ~2 years of 9+ years. Don't let "9 years of React" land by accident
- **CS degree** — B.S. Multimedia. JD says "strong CS fundamentals" not "CS degree." 9 years production React is the answer
- **The Recharge Claude Code skill** — per memory `user_claude_skill_proof`: "committed to the repo, available to anyone running Claude Code locally." NOT wired into CI, NOT org-adopted. Don't inflate if AI tooling comes up.
- **No RIF** in this conversation. Per memory `feedback_no_rif_in_documents` — it's internal context only.

---

## The "data-heavy UI" pressure-test (read carefully)

**TRM probably means:** transaction tracing across wallets, risk-scoring dashboards, entity investigation pages, tables of billions of transactions with filter/sort/search, graph views of fund flows.

**What you can honestly claim:** complex-state enterprise UIs, multi-tenant scale, performance-under-real-usage in widget-embedding contexts, multi-stakeholder admin surfaces with forms/tables/workflows.

**What you can't:** the specific TRM-product shape — graph visualization, virtualized grids at billions-of-row scale, real-time streams, named charting libraries.

### Scripts for the likely follow-ups

**"Tell me about the biggest data-heavy UI you've worked on."**
> "My experience is with **multi-tenant frontends at thousands-of-merchants scale** — the Recharge subscription widget, deployed across every merchant using the app, where every decision had to account for configuration variance, host-site theme interference, and performance across a huge range of tenants. At Gitwit, the $2M child-care platform had multi-stakeholder admin surfaces with forms, tables, and workflows across three distinct user groups with different permissions. I haven't worked on big analytics dashboards or graph visualizations, but the underlying discipline — complex state, performance under real usage, making the UI legible to non-technical users — is what transfers."

**"What about performance under data volume?"**
> "I've worked on performance in the widget-embedding context — the Recharge subscription widget loads on thousands of different merchant sites, so there's a real constraint on bundle size, initial render time, and not blocking the host site. Different shape of performance problem from a 10k-row virtualized grid, but the discipline of measuring and cutting to budget is the same."

**"Have you used react-virtual, react-window, AG Grid, TanStack Table?"**
> "TanStack Table at Recharge, but as a consumer — I touched existing tables, added columns, tweaked behavior. I wasn't the one who set it up. Not react-virtual, react-window, or AG Grid. The native React patterns around them — memoization, pagination, controlled re-renders — are familiar. If the role needs deep virtualization-at-scale work, I'd ramp on the library specifics, but the underlying concepts aren't new."

**"Have you worked with charting or graph-visualization libraries — D3, Recharts, visx, vis.js?"**
> "No, not shipped. That's a gap I'd be ramping on day one. The accessibility work I've done overlaps with some of the same thinking — how do you make a complex visual legible to a non-visual user — but the library practice specifically isn't there yet."

---

## Answers to likely recruiter questions

### "Why TRM Labs?"
> "Two reasons. The mission — fighting financial crime that enables human trafficking, fraud, and national security threats is serious work, and I've always been drawn to roles where the product matters beyond the balance sheet. And the engineering discipline: multi-tenant frontends used by non-consumer audiences who need to make judgment calls fast. That's the shape of work I've been doing for the last 4 years at Recharge — just applied to a mission I'd be proud to talk about."

### "Why are you looking?"
> "I'm looking for my next senior IC role at a company whose mission I care about and whose technical problems are at the depth I want to keep working on. I'm open to frontend-forward senior IC work, customer-facing technical roles, or technical PM-adjacent work — but the common thread is ownership over complex systems in environments where craft matters."

*(No RIF mention. Frame as forward-looking.)*

### "What comp are you targeting?"
> "The posted range of $190–220K base plus equity is right in my target zone — I'd want to land in the middle or upper end given my tenure. I'm also weighing equity, so I'd want to understand TRM's stage, recent funding, and how equity compares at similar roles when that conversation comes up later."

*(Don't anchor low. The JD band is already strong; no need to undercut.)*

### "What have you been doing since Recharge?" or "Tell me about your current situation"
> "I'm in an active search — recent focus has been frontend, design engineering, and customer-facing technical roles at companies whose mission and product I care about. I've been using the time between roles to sharpen on AI-assisted development tooling and explore applied AI / agentic workflow work — I built a Claude Code skill for LLM-assisted code review at Recharge and committed it to the repo."

*(Neutral, forward-looking. If she digs for more, can mention "my previous role wrapped up in early 2026" — don't name RIF.)*

### "Do you have any blockchain or crypto experience?"
> "No, not directly. I understand why the product matters — the scale and pattern analysis problem is exactly what excites me — and I'm confident I can ramp on the domain because the people you're protecting are the whole point. What I bring is senior-level frontend judgment on multi-tenant systems at scale and the discipline to ramp on unfamiliar domains fast; I did that at Sleepme in 90 days on a new stack."

### "Are you open to the intensity of the role?"
*(JD explicitly invites pressure-testing. Be direct.)*
> "I want to pressure-test this in the process — I work hard and I've shipped under real constraints, but I also want to understand what sustainable intensity looks like here. Can you tell me what a typical week looks like and how the team thinks about on-call, working hours, and rest?"

*(Turning the question back to her is the right move. Ask for specifics.)*

---

## Questions to ask Analiz

Pick 4–5. Don't rattle them all off.

**On the process:**
- "What does the full interview process look like — how many rounds, who would I meet, and what's the typical timeline from this call to offer?"
- "What's the hiring manager's background? Are they on the Product Engineering frontend team, or is the structure different?"

**On the role:**
- "This role is on Product Engineering — how does that team relate to platform/infra or other frontend teams? Is there a lot of cross-team work?"
- "What kinds of features are on the roadmap for the next 6 months that this role would own or contribute to?"
- "What's the team size right now, and how fast is it growing?"

**On culture / intensity (the explicit pressure-test):**
- "The JD mentions the work can be high-intensity and invites candidates to pressure-test that. Can you tell me what a typical week looks like? On-call frequency? How does the team think about sustainable pace?"

**On logistics:**
- "The JD mentions 6-hour PST overlap — I'm in Tulsa, Central Time, so that's 2 hours ahead of PST. Is there flexibility on core hours, or is it strict overlap?"
- "What's the stance on conference/learning budget, equipment, and home-office support?"

**On the referral path (optional, be tactful):**
- "I came in through a referral — is there anything I should know about how that shapes the process, or are referred candidates evaluated the same way?"

---

## Red-flag questions to be ready for

| Question | Your answer shape |
|---|---|
| "Why is your current role wrapping up?" | Forward-looking framing. Role ended; focused on next chapter. Do NOT mention RIF. |
| "Have you been interviewing elsewhere?" | Honest but tight. "Yes, a few other processes in flight. TRM is one of the ones I'm most interested in because of the mission." Don't list names. |
| "When are you available to start?" | "I'm in an active search so timelines are flexible — 2–4 weeks from signing an offer is typical for me." |
| "Are you authorized to work in the US? Visa sponsorship?" | Direct: US citizen, no sponsorship needed. |

---

## Logistics checklist

- [ ] **Metaview AI note-taker decision** — opt-out link in calendar event. Default: let them use it (level playing field; recruiter's memory + AI note = fine). Opt out if you want the conversation to be off-record.
- [ ] Camera on, quiet space, good lighting (natural > ring if possible)
- [ ] Water within reach
- [ ] Resume on a second screen for reference (do NOT read from it)
- [ ] Eval doc `reports/033-trm-labs-frontend-2026-04-17.md` reviewed morning-of
- [ ] Story bank reviewed morning-of — anchors: Recharge subscription widget, Gitwit COVID platform, MSU megamenu, Sleepme 90-day ramp
- [ ] This doc open on second screen for quick reference
- [ ] Glass of water, notebook for questions that come up
- [ ] 5 min buffer before the call to clear your head

---

## Post-call

Within 1 hour:
1. Update tracker row with outcome (advancing / declined / uncertain)
2. Add any intel learned to `reports/033-trm-labs-frontend-2026-04-17.md` (team size, process details, HM name, comp flex signals)
3. If advancing: queue next round prep

---

## Referrer note

Friend's-friend referred you. **Do not name them publicly in this call** unless Analiz brings it up first (she may know). If she asks "how did you hear about us," you can say "through a friend's connection at TRM" without naming.
