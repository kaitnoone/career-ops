# Edia — Customer Success Engineer · Form Answers Backup

**Date drafted:** 2026-05-03
**Report:** [102-edia-customer-success-engineer-2026-04-25.md](../reports/102-edia-customer-success-engineer-2026-04-25.md)
**Materials:** `output/cv-kaitlyn-noone-edia-2026-05-03.pdf` + `output/cover-kaitlyn-noone-edia-2026-05-03.pdf`

---

## Q1 — Explain your process for using Claude / ChatGPT to its full potential

I treat Claude as a thinking partner, not an autopilot. My process starts by writing the problem in my own words — what I'm trying to do, the constraints, what success looks like — before I open the chat. Then I use Claude to challenge my assumptions, surface edge cases, and draft scaffolding I'd otherwise write from scratch. I verify every output against my own model; nothing ships that I can't explain back. The clearest proof: I built a Claude Code skill at Recharge for LLM-assisted code review and committed it to the codebase so any teammate running Claude Code locally could pick it up. Most recently, I used Claude Code as a thinking partner on the matching logic for a Logan High School alumni-management app I'm building — parsing inbound claim forms against a multi-decade alumni database, not for scaffolding, for the gnarly logic. The pattern that's worked for me: be specific about what you want, push back when the model is hand-wavy, and never let the tool make a decision you don't understand.

---

## Q2 — Evidence of exceptional ability (single paragraph)

The clearest proof point: I built and shipped the wizard-based activation flow for Recharge's Upsell All and Cross-Sell merchant tooling, replacing the prior canvas builder with progressive disclosure, dependency-driven steps, and validation guardrails — same-session deactivation dropped from ~38% to ~9%, a 4.2× retention improvement. I built on the design and product team's approach but owned the technical layer end-to-end (architecture, React/TypeScript, validation, rollout). Beyond that: I led the frontend rewrite of a $2M/year COVID child-care benefits platform at Gitwit serving essential workers under compliance, accessibility, and data-sensitivity constraints; I owned enterprise client relationships at The Taproom for Nestlé, Copper Cow Coffee, and InsideTracker; and for the past six-plus years I've sat on USD 326's Technology Advisory Committee, advising a rural K-12 district on tech curriculum and equipment purchases. The thread that connects all of it: I'm the engineer who notices the human on the other side of the integration — and who stays in the room long enough to make sure the work lands for them, not just ships clean.

---

## Drafting notes

- Q1 leads honest with "thinking partner, not autopilot" — counter-signals against the "automated, low quality applications" frame Q2's preamble flagged
- Q1 anchors with two concrete proofs: Claude Code skill at Recharge (team tooling) + LHS Alumni matching logic (current personal project per `reference_lhs_alumni_project`)
- Q2 leads with the wizard 4.2× retention metric per `feedback_lead_with_wizard_metric`
- Q2 wizard scope is honest per `feedback_wizard_story_scope` — built on design/product, owned the technical
- Q2 closes on the K-12 thread (USD 326) which is the role-specific differentiator
- No "same shape" / "posture" / "voice of merchant" / projecting-onto-Edia per memories
