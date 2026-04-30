# Round 2: Kontent.ai — Michael Berry (Global Head of Solution Architecture)

**Status:** Awaiting scheduling. Matěj sharing his notes with Michael within 1-2 days of 2026-04-27.
**Format:** Technical conversation. Goal of this round = advance to Round 3 (case study with unlimited license + docs).
**Companion docs:** `interview-prep/kontent-ai-matej-intro-call.md` (round 1 prep + post-call notes), `reports/060-kontent-ai-solutions-engineer-2026-04-20.md` (deep dive), `~/Projects/kontent-ai-demo/` (the artifact you started).

---

## What you know about Michael

- **Title:** Global Head of Solution Architecture, Kontent.ai
- **Location:** Boston
- **Tenure:** 11+ years (he was there pre-Kentico-carveout — built or co-built the SE function)
- **Manages:** US solutions team + global solution architecture
- **Implication:** Round 2 is technical, but it's also Michael deciding whether you'd be a strong addition to *his* team. He's not gatekeeping in Matěj's role; he's evaluating fit-with-the-people-doing-the-work. Long-tenured leaders interview for *durability* — not just "can you do the job today" but "will you grow with us."

---

## What round 2 will probably test

Based on Matěj's process description, round 2 covers technical depth that round 1 deliberately skipped:

1. **Real architecture conversations.** How would you approach X integration. What are the tradeoffs between Y and Z. He'll want to hear how you reason through ambiguity, not just whether you know APIs.
2. **Migration thinking.** Kontent.ai does a lot of migration work — 700K+ content items from Sitecore, WordPress, etc. He'll likely probe how you'd think about a migration project end-to-end (data mapping, validation, error handling, batch sizing, rollback).
3. **SDK fluency.** He may walk through the Delivery vs Management SDK split, webhook patterns, content modeling. Your demo project gives you a real artifact here.
4. **Customer-conversation simulation.** He may ask you to walk him through how you'd explain a technical concept to a non-technical buyer, or how you'd handle a scoping conversation where the customer wants something the platform can't do natively.
5. **AI / Agentic CMS depth.** He'll calibrate what you absorbed from Matěj on the "Responsible AI" framing.

---

## The "Responsible AI" framing — don't get this wrong

Matěj was specific: **agents augment humans on enhancements (translations, content optimization, scheduling). Agents do NOT make architectural decisions.** This is meaningfully different from the public Agentic CMS marketing copy.

If Michael asks how you'd pitch Kontent.ai's agent capabilities to a skeptical customer, the wrong answer is "agents replace human content ops." The right framing is closer to: agents pick up the toil so content teams can focus on judgment-heavy work. Architecture, governance decisions, brand voice, escalations — those stay human.

**Why it matters:** Long-tenure SE leaders care that you'll represent the product accurately to customers. Overpitching capability is the worst thing an SE can do — it sets up post-sale disappointment. Michael is testing whether you'll calibrate honestly.

---

## Technical proof points to have ready

**From the demo project (`~/Projects/kontent-ai-demo`):**
- Built a minimal Next.js consumer with Delivery SDK + Management SDK seed script + webhook handler with HMAC + ISR revalidation
- Running against mocks (no workspace seeded yet — pending in `NOTES.md`)
- This is your opening. Surface it early in round 2 if natural; offer to walk through it.

**From The Taproom (the strongest enterprise-SE analog):**
- Built and maintained DTC ecommerce middleware between Shopify and third-party vendors for Nestlé, Copper Cow Coffee, InsideTracker
- Owned the technical scoping conversations — architecture, implementation, tradeoffs
- Concurrent enterprise client load (which is exactly the SE motion at Kontent: multiple deals + post-sales projects)

**From Recharge:**
- Subscription widget at thousands-of-merchants scale
- Built a Claude Code skill, committed to the codebase, that runs LLM-assisted review of feature implementations — available locally to anyone on the team. **Don't overclaim adoption.** If Michael asks about AI tooling internally, this is your concrete proof.

**From Gravity Works (CMS history Michael will care about):**
- 2.5 years on DNN and Drupal for clients including the MSU Resource Center for Persons with Disabilities (a11y-led work — Kontent.ai invests heavily in a11y for NGO clients per Matěj)
- Client training + platform walkthroughs — directly transfers to Kontent.ai's customer education work

---

## Migration thinking framework

You haven't shipped a 700K-item content migration. Be honest about that and lean on transferable patterns:

> "I haven't done a migration at the 700K-item scale specifically, but the shape transfers from work I've done on integration middleware. The pattern I'd want to validate first: source-data audit (what's the actual structure, not what the customer says it is), schema mapping with explicit decisions about what doesn't map cleanly, batch sizing tuned for the API's rate limits, idempotency so a partial-failure rerun doesn't double-write, and observable progress so a 700K-item job that runs for hours has a trustworthy status surface. The Recharge subscription work taught me the hard way that scale changes which mistakes are recoverable and which aren't."

Memory rule: **don't claim production migration experience you don't have.** Frame as transferable pattern from middleware work. Michael will respect honesty more than overclaim — he's been there 11 years and has seen every overpitch.

---

## Customer-conversation simulation

If Michael asks you to walk through a customer scoping conversation, the structure to have ready is the Intellicom + Taproom pattern:

1. **Discovery before solutioning.** "Before I propose anything, what's your current stack? What are you trying to achieve? What's your timeline? What have you tried that didn't work?"
2. **Translate constraints back.** "If I'm hearing you right, the binding constraint is X — and the implications of that are Y and Z. Want me to dig deeper there before we look at solutions?"
3. **Tradeoff-honest, not pitch-honest.** "Kontent.ai handles A and B natively; C would need custom work; D would actually fit better in another part of your stack. I'd rather flag that now than at implementation."

This is the customer-translation muscle that's actually being tested. Knowing the SDK is table stakes; knowing how to *not* sell something the platform shouldn't do is what makes a good SE for an 11-year-tenured leader.

---

## Questions to ask Michael

Pick 3–4. Lean technical/team-shape since Matěj covered company strategy.

**On the team:**
- "What does the SE org look like today? Who's where, and how do you handle deal coverage across time zones?"
- "What's the make-or-break trait for someone new on your team — past first 90 days, what separates a strong SE from a struggling one?"

**On the technical work:**
- "What does a typical migration project look like end-to-end? What are the failure modes you've seen, and what makes the difference between a clean delivery and a painful one?"
- "How do SEs partner with DevRel on integration work? Where's the line between SDK contributions and prospect-specific integrations?"

**On the AI / agentic side (anchored to what Matěj said):**
- "Matěj framed the agentic AI work as augmenting users on enhancements rather than making architectural decisions. From your seat — where's that line tested most often in customer conversations?"

**On the case study round (round 3):**
- "Anything you'd want me to be ready to dig into for the case study round? What does it usually look like in practice?"

**On Michael (relationship-builder, optional if there's room):**
- "11 years is a long tenure in this industry. What's kept you here?"

---

## Don't

- **Don't overpitch agent capability.** Match Matěj's "Responsible AI" framing exactly. If anything, undersell — Michael will notice.
- **Don't claim production migration experience you don't have.** Frame as transferable.
- **Don't use the Sleepme/Strapi work as your CMS proof point.** Anchor on Gravity Works (DNN/Drupal) + Taproom (Shopify ecosystem).
- **Don't redeploy the cell-phone story** if you used it in round 1 with Matěj — once is sticky, twice is a tic.
- **Don't push hard on comp again.** The base moved $20K in round 1. Round 2 is technical evaluation, not negotiation. Save commission/OTE math for offer stage.
- **Don't mention the RIF.**
- **Don't fabricate Sitecore/WordPress migration depth.** You haven't done it. Be honest, lean on transfer.

---

## After the call

- **Same-day thank-you to Michael.** Short, specific, one concrete callback.
- **Update the memory** (`project_kontent_ai_warm_lead.md`): Michael's read, Round 3 case study format details, any timeline/comp signals.
- **Resume the demo project** if you offered it — Round 3 is the case study round and the demo is direct prep. The unfinished pieces in `NOTES.md` are the work to ship between Round 2 and Round 3.
- **Tracker entry #60** — add round-2 result in notes, hold status at Interview until offer or decline.
