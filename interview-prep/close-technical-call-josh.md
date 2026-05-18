# Close — Technical Call (Josh, Frontend Engineer)

**When:** **Thu 2026-05-21, 8:30–9:30 AM CDT** (confirmed on calendar) · Zoom `close.zoom.us/j/81054337025`
**Format:** 60 min · video, **recorded** (Josh asks consent at start) · primarily Q&A + **short live-coding exercises**
**Interviewer:** Josh = **Joshua McLucas, Staff Frontend Engineer @ Close** (since Aug 2023). Senior IC peer evaluator, not the HM.
**Stage:** First technical round. Next after this: take-home → HM call → final w/ VP Eng + Product.
**Context:** Recruiter screen prep + company snapshot in `close-fe-recruiter-screen.md` — read that for the "why Close" spine and gaps. This doc is the technical layer on top.

---

## Interviewer read — calibrate to this, never surface it

Joshua McLucas, **Staff FE @ Close** (~2yr10mo). Arc: cybersecurity React/Redux FE → adtech blockchain FE (Amino) → Suvoda (Sr SWE, clinical-trial software) → **Retrium 3 yrs, climbing _JavaScript Engineer → Senior JavaScript Engineer → Staff SWE_** → Close Staff FE. Remote throughout.

What this means for you (kept to what's defensible — earlier draft over-inferred a "JS-fundamentals interviewer / vanilla-JS-likely" read from his job titles; that's NOT something we know and has been removed):
- **Live-coding format is UNKNOWN.** His titles ("JavaScript Engineer") are generic and tell us nothing about the exercise. He has React/Redux roots and Close is a React/TS shop, so React-flavored is at least as likely as vanilla JS/DOM. **Prep both; if anything weight React slightly. Do not assume the React gap is de-risked — it isn't.** Ask Josh at the top which he'd like (right move *because* it's unknown).
- **Staff-level peer (safe inference from the role).** Reading engineering judgment — decomposition, tradeoffs, narrated reasoning, clarifying questions. Pitch the wizard at a Staff engineer.
- **Don't bluff a net-new gap (WS/WebRTC) regardless of his history.** Retrium is a real-time collaborative product so he may well have real-time depth — but the honest-gap rule holds independent of that inference; don't hand-wave to a Staff engineer.
- **Craft over buzz.** Long deep-IC track. Talk like a peer engineer; no scripted/AI-shaped answers (Close screens for this anyway).
- **Guardrail:** this is LinkedIn back-channel. Calibrate with it; never reference his history to him ([[feedback_no_third_party_info_in_outreach]]). And don't project interview style from a profile — [[feedback_dont_project_posture_onto_company]].

---

## The "nothing to prepare" trap — read first

Vera said "nothing in particular you need to prepare." There **are live-coding exercises**. You don't cram algorithms — Close's are short and practical. But two real risks:

1. **Vanilla-DOM rust** from years in frameworks. **The single highest-leverage prep.** Because the call is 8:30 AM, do NOT plan to learn this cold that morning: **bulk 45–60 min MDN refresh the EVENING BEFORE** (Wed night, or Tue if Wed is wiped after QM 3:15 + OW 11:30) — `querySelectorAll`, `classList`, `addEventListener` + cleanup, event delegation, `dataset`, `sessionStorage`, array methods (`map/filter/reduce/find`). Then **Thu 7:45–8:25 AM: 15-min light re-warm** + 2–3 quick DOM reps + coffee. Re-warm, not learn-cold.
2. **React-family is ~2–2.5 yrs.** On record at **7/10 with Vera** (recorded; summary travels — do NOT recant to "5" on this call or anywhere; that's under-confidence damage for a non-issue and makes the screen look inflated). Reality check: ~2yr Remix + a deployed React 19 app taking real submissions is NOT a 5 at the *fundamentals*; the honest 5 (if any) is *advanced* ecosystem (RSC/concurrent/complex state/perf), which is less typical in a 60-min first technical — but that's a general expectation, not something we know about this one, so prep the fundamentals solidly and don't bank on advanced topics being skipped. Self-doubt here is the Harmony/under-confidence reflex ([[user_strengths_profile]]) — calibrate to the deployed app, not the anxiety.
   - **Wed-eve React track (alongside the DOM track):** drill the basics cold-startable — `useState`, controlled inputs, list rendering + keys, `useEffect` + cleanup, lifting state, simple composition. These are highly rampable in one focused session; that's what closes the gap for THIS call.
   - **If React self-rating comes up:** reframe number → shape, don't renumber (script in "Q&A anchors"). Don't claim more React than you have; the framework-agnostic + JS-fundamentals depth is the honest, winning story with Josh specifically.

**Format unknown — prep both equally** (don't bank on vanilla being likelier; if anything React is marginally more likely given Close's React/TS stack). Vanilla-DOM is your honest strength once rust is off; React fundamentals are the worry-area — give them at least equal Wed-eve time. Ask Josh up front which he'd like — clarifying is a senior move, not a tell, and it's the real answer to "which format" since we can't know in advance.

---

## Live-coding posture (this is half the eval)

- **Narrate constantly.** "I'll grab the nodes with querySelectorAll, then delegate the click on the parent…" Silent coding reads worse than imperfect code with clear reasoning.
- **Clarify before you type.** "Should this handle empty input? Styling or just state? Do you want this generic or is the happy path fine?"
- **Trace one example out loud** before declaring done. Verify, don't just write.
- **Pauses are fine. No softeners** — kill "I think / kind of / just / maybe / probably." (Same self-debrief flag from the QM prep — under-confidence is the recurring tell, not capability.)
- If you blank on exact syntax: say what you're reaching for and how you'd look it up. Real engineers do this; pretending is worse.

---

## Q&A anchors (Josh is an engineer — go deeper than you would with a recruiter)

**Lead with the wizard.** With an IC engineer, go into the *technical* decisions, not just the metric:
- Recharge merchant-activation flow (Upsell All / Cross-Sell), internal merchant-admin tooling — **not** the customer-facing widget. Design + product defined the approach; **you owned the technical layer**: architecture, React/TS implementation, validation guardrails, rollout.
- Technical meat for Josh: progressive disclosure + dependency-driven steps (how steps gate on prior answers), validation strategy, state shape, the edge cases you had to handle, what you'd do differently.
- Outcome: same-session deactivation ~38% → ~9% in one offering (4.2× retention vs. canvas-builder cohorts). State it once, plainly; let the engineering carry the rest.

**Multi-framework honest line (ready verbatim):** *"Nine-plus years frontend — Vue, Angular, Remix/React, Liquid. React-family specifically ~2–2.5 years: Remix at Recharge after the Vue→Remix migration, plus current Next.js 16 / React 19 on the alumni app."* Consistent with the 7/10 you gave Vera and the stack-decision story (Vue→Remix→React, driven by a principal FE eng for hiring/market/maintainability/speed).

**If "React 7/10 / rate your React" comes up — reframe number → shape, do NOT renumber:**
> "Honestly a single number flattens it. The shape: nine years frontend, React-family the last couple — Remix at Recharge after the Vue→Remix migration, plus a React 19 app I've got deployed and taking real submissions now. I'm strongest in the JavaScript and component fundamentals that hold under any framework; where I'd ramp is the deeper React-specific ecosystem. I'd rather be straight about that than oversell years I don't have."

Honest, doesn't contradict the 7, doesn't undersell, lands integrity (Close screens for it). Then steer toward JS-fundamentals ground — your genuine strength (not a claim about his preferences, which we don't know).

**LHS Alumni — deployed, real users (strong with an engineer).** Public claim form deployed and collecting real alumni submissions; v1 admin directory deployed for board review. Next.js 16 / React 19 / TS / Postgres / Drizzle / Radix. Best part for Josh: **Claude as a thinking partner on the matching logic** — sparred on edge cases (maiden-name collisions, class-year ambiguity, false-positive risk), landed a three-state outcome (matched / partial / no-match) with human-in-the-loop on ambiguous. Not autocomplete, not arm's length. This is the strongest AI-engineering proof point and Close is very AI-forward (recent 2-day AI build event).

**Claude Code skill at Recharge** — built + committed, LLM-assisted code review, any teammate on Claude Code locally can use it. **Don't overclaim adoption.**

---

## Engineering-depth topics Josh may probe

- **State management** — wizard state shape; React Query at Recharge; when you reach for context vs. local vs. server state. Honest, concrete.
- **Component architecture / design systems** — Radix Primitives + shadcn pattern (LHS), headless-component philosophy (genuine interest, real on LHS). Strong, lean in.
- **Accessibility** — your real strength: WCAG widgets, keyboard nav, focus management, the Gitwit company-wide a11y talk, MSU megamenu. Web/component-level — *don't* drift into document/PDF a11y.
- **TypeScript** — comfortable; shared client/server Zod validation on LHS is a good concrete example.
- **Testing** — Jest / RTL / Cypress / Playwright (CI). Speak to what you actually did.
- **Performance — TRAP.** Don't claim a marquee perf story. If asked, speak generically (code-splitting, bundle size, render cost) and only to what you genuinely did.

---

## Gaps — flag plainly if probed, don't volunteer all unprompted

1. **React tenure:** clears the frontend bar by years; React-specific is ~2–2.5 yrs. Framework-agnostic depth is the real story.
2. **WebSockets / WebRTC:** net-new. Real-time experience is webhook-event-driven (Shopify middleware at Taproom). Would ramp for the calling/SMS surface. (Relevant if this role is the Communications team.)
3. **Customer-facing AI at production scale:** shipped AI tooling at internal-team scale; customer-facing-at-scale would be net-new.

---

## Questions for Josh

- **Which of the four teams is this role on — Growth, CRM, Communications, or Agents?** (Held this back from the recruiter deliberately — Josh can actually answer it and it shapes everything.)
- What does the hardest frontend problem on your team look like right now?
- What separates a strong Close frontend hire from a good one, in your experience?
- How does the team handle the "overlapping features / challenging visual problems" Vera mentioned — architecture patterns, or case by case?
- How is AI actually changing day-to-day frontend work here since the build event?

---

## Hard don'ts

- No RIF. Why-looking stays forward-only (recorded call; the summary travels to HM/VP).
- Stay consistent with the recruiter-screen answers: React 7/10, Recharge ~200 ppl / 40–50 eng / Storefront Experience, the Vue→Remix story, "a couple of processes in final stages."
- No "voice of merchant." Not the customer-facing widget. Don't overclaim the Claude skill's adoption or LHS beyond "deployed, real submissions, v1."
- Natural register — don't over-script. Josh is a peer engineer; talk like one.

---

## Logistics

- **Thu 5/21, 8:30–9:30 AM CDT** · Zoom `close.zoom.us/j/81054337025`. **8:30 AM = early + live coding** — refresh is split across two scheduled dry-runs with Claude: **Tue 5/19 3:00–3:45 PM CDT** (cold first-pass baseline) + **Wed 5/20 4:45–6:15 PM CDT** (deeper reps + bulk refresh, post-QM). Thu 7:45–8:25 AM = light 15-min re-warm + coffee only, NOT learn-cold. Unwarmed brain at 8:30 makes the softener/under-confidence tell worse — the re-warm is specifically to counter that.
- **Heavy week:** Tue Stay CTO · Wed QM (Ryan Sager) 3:15 + OW/Dagny 11:30 · **Thu 8:30 AM Close (Josh)** — first thing Thursday, morning after a packed Wed. Do the bulk JS refresh Tue eve or Wed late-afternoon (post-QM, pre-exhaustion), NOT Wed night cold.
- Test Zoom + editor + screen-share **Wed night** (not Thu morning — no time at 8:30). Camera on, quiet space, second screen for notes. Consent to recording when Josh asks (standard).

## Within 1 hr post-call

1. Update [[project_close_pipeline_status]]: how it went, what was asked, the team answer, your read.
2. Note any live-coding stumble honestly (for take-home + later-round calibration).
3. No status-push to Staci; let the process run ([[feedback_no_cold_followups]]).
