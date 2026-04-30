# Intro Call: Kontent.ai — Matěj Bystřický (Hiring Manager)

**Date scheduled:** Mon 2026-04-27 · 9:30 AM CDT (4:30 PM CEST) · ~45 min · Microsoft Teams
**Format:** HM intro call — round 1 of 3 (Matěj → Michael Berry, Global Solutions Director US → case study with commercial org UK/US). The goal of this call is to advance to round 2.
**Role:** Solutions Engineer (US) — full remote, ~$100K base, 5 weeks PTO, fully covered family healthcare
**Companion report:** `reports/060-kontent-ai-solutions-engineer-2026-04-20.md` (deep dive — read before the call)
**Demo project:** `~/Projects/kontent-ai-demo/` — minimal Next.js + Delivery SDK + Management SDK + webhook handler. See `NOTES.md` there for build status and pending work.

---

## What this call is

Matěj is the hiring manager for the SE team, not a recruiter or talent lead. He remembered you for **2.5 years** after a 2023 rejection and re-engaged with budget and benefits in his first DM. That means:

- **You're targeted, not screened.** He has already decided you're interesting enough to spend his time on. The call is about whether the role fits you, not whether you fit the role.
- **He can move fast.** HMs don't have to loop in a chain of approvers to advance a candidate they already want.
- **The 2.5-year memory matters.** Don't skip past it. A single sincere beat near the top lands right; a monologue about 2023 would be weird.
- **Register check:** he's Czech, writes warm but pragmatic English. Match that. Less US-sales enthusiasm; more directness.

---

## Opening beat (first 60 seconds)

Acknowledge the reconnect — once, specifically, then move on:

> "It's genuinely nice to reconnect. I appreciated the kind rejection note you sent in 2023 — it stuck with me, and I'm glad you came back around."

Then pivot into your interest in the role. Don't dwell on 2023. One beat is enough.

---

## Core narrative (60–90 sec)

> "9+ years in frontend across SaaS and client work — most recently at Recharge on the subscription widget used by thousands of Shopify merchants. Before that, Shopify agency work at The Taproom on enterprise clients like Nestlé, Copper Cow, and InsideTracker — which was the SE motion in all but title: discovery, scoping, integration middleware, stakeholder alignment, handoff. And before that, 2.5 years at Gravity Works running CMS platform delivery on DNN and Drupal, with client training baked in. That's really where the CMS + client enablement pattern started for me."

Adjust on the fly. If he leads with "tell me about yourself," that's the shape.

**Note:** The above frames CMS credibility around Gravity Works + Taproom, **not** Sleepme/Strapi — per memory rule.

---

## Three proof points to have ready

Pick whichever fits his questions. Don't force all three.

1. **The Taproom enterprise client work (Nestlé / Copper Cow / InsideTracker)** — Shopify + third-party vendor middleware, partner APIs, client-facing scoping, on-time delivery, handoff. This is your strongest SE-motion analog. Offer as the case study he asks about.
2. **Gravity Works CMS platform delivery (DNN/Drupal, 2.5y)** — multi-CMS experience, client training, platform presentations. Proves you've lived inside CMS products, not just integrated with them.
3. **Women's ERG co-lead at Recharge, partnered with executive leadership** — proves you can translate between technical and executive/business stakeholders. Use for the "can you handle sales conversations" question.

If he probes AI tooling: **Claude Code skill for LLM-assisted code review at Recharge.** Don't overclaim adoption — frame as "I built it, shipped it, used it," not "the whole team uses it."

---

## The comp conversation (when, not if)

The $100K is on the table. Your last base was $168K. The gap is real, and benefits close about $15–25K of it — effective total ~$115–125K, still short of your scale.

**When to raise it:** if he doesn't bring it up by the last 10 min, you do. Natural spot: when he asks if you have questions, or if he asks about your timeline.

**Script:**

> "I appreciate the directness on the number in your DM — that's refreshing. For context, I was at $168K base at my last role. The benefits package is genuinely attractive. Is there flexibility on base, or is there a variable/bonus component that could move total comp closer to $130K? If not, I'd want to understand the path to a review at 6 or 12 months."

**Read his reaction:**
- If he opens the door to flex: stay engaged, let the process continue to a formal offer.
- If the $100K is hard: ask about the 6–12 month review and what triggers it. Then decide whether to continue or graciously step back.

Don't negotiate hard on the intro call. This is a posture-setter, not a close.

---

## Questions to ask Matěj

Pick 3–4 based on flow. **Don't re-ask what he already answered in the LinkedIn DM** (interview flow shape, customer vertical mix, comp existence of bonus). Build on what he shared.

**On the case study round (since you know it's coming):**
- "What does the case study round look like — how do you scope it, and what are the success criteria?"
- "Is the case study tied to a real prospect/customer scenario, or is it a synthetic exercise?"

**Role shape (building on what he shared):**
- "You mentioned WebMD and Alaska Airlines as examples — what does an SE day look like with regulated-industry enterprise customers vs the SMB end of the book? Different motion entirely?"
- "How does the SE team sit between sales and customer success? Where does your handoff to onboarding actually happen?"
- "What would make someone successful in this role in the first 90 days vs 6 months?"

**On Michael Berry (round 2 lead):**
- "Anything you'd want me to be ready to talk through with Michael that's different from what we'll cover today?"

**Team / culture:**
- "How distributed is the team? I saw Kontent.ai spun from Kentico — is the center of gravity still Czech, or has it shifted with the US hiring?"
- "What's the thing about this team you're most proud of — and what's the thing you'd most like to fix?"

**On the 2023 round (optional, only if there's room):**
- "What shifted between 2023 and now — in terms of what you're looking for, or how you see this role?"

---

## Questions on AI / Agentic CMS

Kontent.ai's public positioning leans hard on AI agents — audits, governance, localization, "minutes instead of months," the whole Agentic CMS framing. This is genuinely interesting territory, and it's a place where your Claude Code skill at Recharge gives you a real conversation rather than a candidate-side question. Pick 2–3 from below — don't ask all of them.

**The reality-check question (most useful):**
- "Walk me through what one of the agents actually does for a customer day-to-day. Pick whichever — audits, governance, localization. I want a feel for what's shipping in production now vs what's roadmap."

**Customer adoption / pull:**
- "Are customers actively asking for agent-driven workflows, or is this Kontent.ai leading the market? Where on the adoption curve are content teams right now?"
- "What does customer onboarding to the agentic side look like? Is there resistance from content ops folks who built careers around the manual workflows the agents are replacing?"

**SE role intersection (the most relevant for you):**
- "Where does the SE team sit in the Agentic CMS story? Are SEs building or customizing agents for prospects, demoing existing capability, or feeding product signal back from the field?"
- "What does prospect education look like when the differentiator is agents? Is the SE conversation more 'here's what's possible' or 'here's how this becomes real for your team in 90 days'?"

**Differentiation (if space — softer wording):**
- "I'm noticing every headless CMS is announcing AI features right now. What's the angle Kontent.ai is taking that you think holds up over the next 12–18 months as that space gets crowded?"

**Bridge to your Claude Code skill (only if it fits naturally — don't force it):**
- "I built a Claude Code skill at Recharge that runs LLM-assisted code review on feature implementations — committed to the codebase, used by anyone on our team running Claude Code locally. Curious whether the SE team here uses AI tooling internally for prospect work, or if AI is mostly something you're surfacing for customers."

**Read what comes back.** If Matěj describes a deeply-shipped, customer-led adoption story, the role is going to ask you to be a confident agentic-CMS evangelist. If he describes mostly roadmap and "we're investing heavily," you're walking into a market-shaping role where part of the job is bringing customers along — different posture, different prep for round 2.

---

## Questions he'll likely ask you + handling

**"Why SE instead of staying engineering?"**
→ "Honestly, I miss knowing the customer we're doing the work for. The further I went into product engineering at Recharge, the more abstracted the merchant got — they were a data point in roadmap conversations, not someone I'd ever met. The thread goes back to college, when I sold cell phones — people would come in wanting the 99-cent phone, and my job was figuring out whether that would actually hold up for how they lived. Agency work in my 20s was the same shape. SE puts that touchpoint back in the job."

**"How much Kontent.ai experience do you have?"**
→ "None with Kontent.ai in production specifically. I actually started building a small demo last week to get a feel for the SDKs — Delivery SDK read layer, Management SDK seed script, webhook handler with HMAC + ISR revalidation. Running against mocks right now since I didn't have a workspace to seed against. Happy to share the README or walk through it in the next round." *(This signals initiative — surfaces a real artifact without trying to demo on a 45-min intro call.)*

**"You're a frontend engineer — can you handle sales conversations?"**
→ "Two arcs. Taproom enterprise clients — Nestlé, Copper Cow, InsideTracker — meant direct scoping and stakeholder management with people whose business depended on what we shipped. And before any of that, my college job selling cell phones, where the work was listening for what someone actually needed instead of what they came in asking for. That listening-and-translating motion is what makes a good SE conversation."

**"Why did Recharge end?"**
→ "Recharge was nearly 4 years and I'm being intentional about what comes next — looking for a role where the human/technical bridge is an explicit asset." **DO NOT mention the RIF** — per memory rule.

**"What are you looking for?"**
→ "A role where the client-facing + technical translation work is the job, not a side channel. Kontent.ai's shape — headless CMS sold into technical and content teams — is the exact bridge I want."

**"Timeline?"**
→ Honest: actively looking, a few warm channels moving, no exploding offer. Don't invent urgency.

---

## The demo move (you already have one)

You already started a Kontent.ai demo on April 21 (`~/Projects/kontent-ai-demo/`). Pending pieces in `NOTES.md`. Don't try to walk through it live on a 45-min intro call. Surface it once, naturally, and offer to share or walk through in round 2:

> "I actually started a small Kontent.ai project last week — one content type, a Next.js consumer with the Delivery + Management SDKs, and a webhook handler with HMAC + ISR revalidation. Running against mocks since I didn't have a workspace to seed against. Happy to share the README or walk through it with Michael in the next round if it'd help."

This signals initiative, de-risks the hire, and gives you a concrete artifact to bring to the case study round (round 3). Naming Michael in the offer also shows you remembered the process he laid out.

---

## Backup stories (hold for the right question)

Don't volunteer these. Reach for them only if the prompt fits.

### Cell phone retail (consultative listening)
For "tell me about a customer interaction that taught you something" / "what makes a good SE in your view?":

> "I sold cell phones in college. The customer almost always wanted the 99-cent phone, and my job was to figure out whether that would hold up to how they actually lived. Most of the time it wouldn't — construction guys on job sites, single moms doing kid logistics, even retirees who'd never used a touchscreen. The work was listening for what they actually needed, not pushing the easiest product to sell. Customers who trusted that came back."

**Don't redeploy** if you've already used the cell-phone beat in the integrated "Why SE?" answer above. Once is sticky, twice is a tic.

---

## Don't

- **Don't lead with Sleepme or reference the Strapi/Nuxt integration.** CMS credibility is anchored on Gravity Works + Taproom. Rule still applies.
- **Don't use "voice of merchant" framing** for Recharge work.
- **Don't mention the RIF.** Forward-looking only.
- **Don't over-perform enthusiasm.** Czech/Central European register is pragmatic. Warm but not salesy.
- **Don't assume pronouns** for team members he references by first name.
- **Don't fabricate familiarity** with Kontent.ai's product beyond what you've read publicly. Asking good questions is better than pretending you've used it.
- **Don't close hard on comp on this call.** Posture-set, don't negotiate.

---

## After the call

- **Same-day thank-you.** Short, specific, one concrete callback from the conversation. Reference the demo offer if you made it.
- **Update the memory** (`project_kontent_ai_warm_lead.md`) with: interview flow confirmed, comp signal (flex or hard), his read on timeline, what he flagged as the key evaluation criterion.
- **Start the demo project** within 48 hours if you offered it. Even a minimal one — a content type, a consumer, a short writeup. Bring it to the next round.
- **Update tracker entry #60** — move status from `Responded` to `Interview` with date.
