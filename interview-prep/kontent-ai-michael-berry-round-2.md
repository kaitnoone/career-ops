# Round 2: Kontent.ai — Michael Berry (Global Head of Solution Architecture)

**Status:** Scheduled 2026-05-06 1pm CDT (= 2pm EDT, start of Matěj's offered window).
**Format:** Technical conversation. Goal of this round = advance to Round 3 (case study with unlimited license + docs).
**Companion docs:** `interview-prep/kontent-ai-matej-intro-call.md` (round 1 prep + post-call notes), `reports/060-kontent-ai-solutions-engineer-2026-04-20.md` (deep dive), `~/Projects/kontent-ai-demo/` (the artifact you started).

---

## What you know about Michael

- **Title:** Global Head of Solution Architecture / Director of Consulting Services, Kontent.ai
- **Location:** Boston
- **Tenure:** 11+ years (started at Kentico 2015, came through the carveout; built or co-built the SE function)
- **Manages:** US solutions team + global solution architecture **+ DevRel.** Matěj confirmed in R1: DevRel reports to Michael. So the Solutions team includes both customer-facing SEs and the integration engineers / developers powering the public GitHub repo + SDK work. Tight collaboration.
- **Matěj's explicit framing of him (R1):** *"He's the technical gatekeeper. I'm the cultural gatekeeper / psychology side."* So R2 is squarely Michael's technical evaluation. Matěj already cleared you on culture / register / fit; Michael is testing engineering depth.
- **Recent activity (~3 weeks before R2):** in-person solutions-team gathering in Europe with an internal hackathon on **AI-powered migration script generation from legacy CMSes**. This is current, real, and a clean conversational hook (see Questions to ask).
- **Implication:** Round 2 is technical, but it's also Michael deciding whether you'd be a strong addition to *his* team. Long-tenured leaders interview for *durability* — not just "can you do the job today" but "will you grow with us."

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
- Wizard activation flow — **internal merchant-admin tooling** for configuring Upsell All / Cross-Sell. **PM-led conversion experiment**: hypothesis was that progressive-disclosure UX would convert better than the existing canvas-based config. Design defined the approach; you built the technical layer (architecture, React + TypeScript, validation, rollout). Same-session deactivation by merchants configuring the feature dropped from ~38% to ~9% — about 4.2× retention improvement on configuration completion. **Scope guardrails:**
  - It was a *conversion experiment on an admin flow*, NOT a "remove engineer dependency" initiative — don't frame it as the latter (per `feedback_no_voice_of_merchant` — your team wasn't merchant-facing; Implementation / CS handled merchant conversations).
  - This is internal merchant-admin tooling, NOT the customer-facing subscription widget (per `feedback_recharge_wizard_scope_admin_not_widget`) — that was someone else's work.
  - Externally-facing customer UI proof comes from Taproom storefronts (above), not Recharge.
- ~2 years on Remix at Recharge after a mid-tenure migration from Vue (~2 years prior). Real BFF/SSR/loader/action shipping. **Don't claim 4 years on Remix** — it's ~2 (per `user_recharge_remix_stack`).
- Built a Claude Code skill, committed to the codebase, that runs LLM-assisted review of feature implementations — available locally to anyone on the team. **Don't overclaim adoption.** If Michael asks about AI tooling internally, this is your concrete proof.

**From Gravity Works (CMS history Michael will care about):**
- 2.5 years on DNN and Drupal for clients including the MSU Resource Center for Persons with Disabilities (a11y-led work — Kontent.ai invests heavily in a11y for NGO clients per Matěj)
- Client training + platform walkthroughs — directly transfers to Kontent.ai's customer education work

---

## Migration thinking framework

You haven't shipped a 700K-item content migration. Be honest about that and lean on transferable patterns:

> "I haven't done a migration at the 700K-item scale specifically, but the shape transfers from work I've done on integration middleware. The pattern I'd want to validate first: source-data audit (what's the actual structure, not what the customer says it is), schema mapping with explicit decisions about what doesn't map cleanly, batch sizing tuned for the API's rate limits, idempotency so a partial-failure rerun doesn't double-write, and observable progress so a 700K-item job that runs for hours has a trustworthy status surface. The Recharge subscription work taught me the hard way that scale changes which mistakes are recoverable and which aren't."

Memory rule: **don't claim production migration experience you don't have.** Frame as transferable pattern from middleware work. Michael will respect honesty more than overclaim — he's been there 11 years and has seen every overpitch.

**Migration Toolkit name-check.** Kontent.ai has a purpose-built **Migration Toolkit** (`github.com/kontent-ai/migration-toolkit`) — abstracts away direct Management API calls for migration workflows. **v3.1.4 released 2026-04-14**, ~3 weeks before this round. Actively maintained, TypeScript, current. The README's stated capabilities map directly to the migration framework above:

- **Duplicate prevention (idempotent operations)** → the idempotency drill
- **External ID placeholders for forward references** → solves the parent-child ordering failure mode
- **ID-to-codename translation** → exactly the precision distinction we drilled on (item codename vs element codename)
- **Built-in error handling, reference resolution, confirmation workflows** → the observability drill

If migration tooling comes up, the seniority move is:
> *"I'd reach for the Migration Toolkit first before scripting against the Management SDK directly. From the README it looks like it handles the things I'd otherwise have to build myself — idempotent operations, forward-reference resolution via external ID placeholders, ID-to-codename translation. Bespoke scripting only if the customer's case falls outside what the toolkit covers."*

Shows you've actually looked at the tool, not just heard the name. Bonus: you'd be talking about something Michael's team almost certainly worked on (or works alongside).

### Drill: three patterns Michael might probe

If Michael picks the framework apart, the three lines you most need to back up are *batch sizing*, *idempotency*, and *observable progress*. Each below: what it actually means, why it matters at scale, where you can honestly anchor, and one likely follow-up.

#### Batch sizing tuned for API rate limits

**What it actually means.** Send N items per API call, with N chosen to stay inside the destination's rate-limit window AND keep your blast radius small enough to recover from a partial-batch failure. Bigger N = fewer requests = faster, but a 5,000-item batch that fails halfway leaves you in a worse partial state than 50 batches of 100. Smaller N = more roundtrips and slower wall-clock, but cleaner recovery.

**Why it matters at scale.** Blow past the rate limit and you get 429s, exponential backoff kicks in, and the whole migration grinds to a crawl. Too-big batches also risk OOM on the worker. The right answer is profile early with a small subset, measure latency and 429 rate, then tune N up or down from there.

**Honest anchor.** You haven't run a 700K-item migration, but the principle showed up at Recharge — "scale changes which mistakes are recoverable and which aren't." API-driven config rollouts at thousands-of-merchants scale taught you to validate batch shape with a small subset before going wide.

**Likely follow-up — "What batch size would you start with for Kontent.ai's Management API?"**
> "Without their docs in front of me, I'd start small — maybe 50 to 100 items per request, parallelism kept low until I'd measured the 429 rate. I know their Management API throttles per environment and content publishing is async, so I'd also decouple the write step from the publish step to keep the write loop tight."

#### Idempotency so a partial-failure rerun doesn't double-write

**What it actually means.** Every operation in the migration is safe to retry. Running it twice produces the same end state as running it once. The classic failure mode is "70% completed, 30% failed, what now?" — without idempotency, retrying the failed 30% can also re-run the successful 70%, producing duplicate items, broken parent-child links, or double-published content.

**Why it matters at scale.** Migrations fail in ways you don't expect — network glitches, server hiccups, your laptop sleeping at hour 3. Idempotency turns "the job died" into "rerun and it picks up from the last good state" instead of "now we restore from snapshot."

**How to actually do it.** Pick an idempotency key that's stable in source data — usually the source system's primary key, exposed as `external_id` in Kontent.ai. Then either: (a) check "have I done this already?" before each operation, (b) use upsert semantics (insert-or-update by external_id), or (c) maintain a state log of completed item IDs. Option (b) is simplest when the API supports it; (c) wins when parent-child dependencies need ordering.

**Honest anchor.** Your demo project actually uses codename as an idempotency key in the seed script. Per your own `NOTES.md`: *"Idempotency by codename in seed script. Real migrations usually use external_id (source system's primary key), but codename reads better in a demo."* That's a direct claim you've thought about it before this conversation.

**Codename precision tell.** "Codename" in Kontent.ai is overloaded — it appears at the content type, content type element, content item, and taxonomy levels. For idempotency you mean **content item codename specifically** — not element codenames in the schema. If you find yourself saying "codename" in the migration conversation, add the one-line clarification: *"By content item codename specifically, not the element codenames in the schema."* Two seconds, big credibility bump.

**Likely follow-up — "What's the failure mode if you don't have idempotency in a Sitecore-to-Kontent migration?"**
> "Duplicate content items. You re-run after a partial failure and now half your articles exist twice. Worse if you've got linked items: the second run might create new IDs that the parent items still reference the first set of, so now you've also got broken references. The recovery is manual cleanup, which on 700K items is days of work and risks more breakage."

#### Observable progress for long-running jobs

**What it actually means.** A trustworthy status surface that tells you, at any moment: how much is done, what's failed, what's left, and what the failure pattern looks like. NOT just "the job is running" — actual telemetry. The word *trustworthy* is doing work here: progress reporting that's honest about partial failures rather than just incrementing toward "100% complete."

**Why it matters at scale.** 700K items at 100 items/sec is roughly two hours. Without progress visibility you're guessing whether to wait, kill, or panic. More importantly: failure visibility. If 50 items consistently fail, you need to know which 50 and why — was it one content type? One author? Items missing a required field? "50 failures" without categorization is useless; "50 failures, all on items where the legacy `category` field was null" is actionable.

**How to actually do it.** Four pieces, each doing different work:

**(a) Structured logging per operation.** Every operation writes a JSON log line with item ID, status (success / failure / retry / skip), duration, and error class if failed. The reason for structured vs free-text: you can `jq` over 700K log lines and answer "show me every validation error on items in batch 47" in two seconds. Free-text logs require regex archaeology. Shape looks like:

```json
{
  "timestamp": "2026-05-06T13:42:15Z",
  "operation": "createContentItem",
  "item_id": "src_12345",
  "status": "failure",
  "error_class": "ValidationError",
  "error_message": "required field 'category' is null",
  "duration_ms": 45
}
```

**(b) Periodic status checkpoint.** A single file or DB row capturing point-in-time state — updated every N items (say, 100) and every M seconds (say, 5), whichever fires first. Contains: total / completed / failed / remaining, current rolling throughput, ETA, error breakdown by category, last failure detail. Separate from logs because logs are append-only and verbose; status is compact and point-in-time. One read answers "how's it going" without grepping anything. Survives if the migration process itself crashes.

**(c) Error categorization.** Every failure goes into a bucket — validation, rate-limit, auth, transient / network, conflict, schema mismatch, reference ordering. "1,247 failures" without categorization is useless. "1,247 failures, 95% validation errors on the legacy `category` field" is actionable in 30 seconds. Different categories also get different policies: auto-retry transient, fail fast on auth, surface validation errors for human review rather than re-attempting forever.

**(d) ETA from rolling throughput.** Estimate completion based on the *last 5 minutes*, not all-time average. Cumulative average gets dragged by slow ramp-up at the start; rolling window reflects current pace. The honest version of ETA also surfaces the *trend* — "ETA 2h 15min, throughput dropping" tells you more than just the number. Don't smooth a swinging ETA; the swing is information about something changing under the hood (rate limiting kicking in, a bad batch, a noisy neighbor on the API side).

**Customer-facing layer.** For migrations where the customer sees status: a dashboard or shared doc reading the status checkpoint, with the failure-rate flag prominent rather than buried. *Trustworthy* means honest about partial failures, not hiding them under a percent-complete bar that ticks toward 100%.

**Honest anchor.** This is the engineer-eye on what "trust" means in a shipped system — same instinct that ran Recharge wizard rollout monitoring. You don't have to claim a 700K migration; you can claim you've shipped enough production tooling to know that "the script ran" and "the script worked" are two different questions.

**Likely follow-up — "How would you communicate progress to the customer's stakeholders during a long migration?"**
> "Two surfaces. One for engineers — structured logs, error breakdown by category, ETA from rolling throughput. One for non-technical stakeholders — a shared doc or dashboard with percent-complete, last-updated timestamp, and a flag if the failure rate crosses a threshold. The non-technical surface has to be honest about partial failures rather than hiding them. That's what 'trustworthy' means when a CSE owns the customer relationship."

---

## Customer story anchors (from Kontent.ai's published case studies)

Per Matěj's nudge in his scheduling email — *"you can take a deeper look at the product and review some of the implementation and success stories if you'd like"* — three published case studies map cleanly to your real proof points. Use them to reframe your experience in language Michael will recognize.

**Important caveat:** the customers Matěj name-dropped in R1 (J&J, Siemens, UNICEF, British Red Cross, Gates Foundation, Oxford, Honeywell) are NOT in the public case study library. He was speaking from inside knowledge. Stick to the published stories below for citations; don't claim to have read about a J&J case study because none exists publicly.

### WebMD Ignite — your "I've seen this dependency from the developer side" angle

**The story:** WebMD Ignite's legacy CMS was engineering-dependent. Content teams relied heavily on developers for schema and DTD changes — publishing delays of months to over a year. Headless CMS removed that dependency. Now in 20+ languages, omnichannel (websites, EMRs, hospital TV screens). Individual content tasks dropped from "several hours" to "10–30 minutes." Matěj's most-mentioned customer in R1.

**Honest anchor (NOT the wizard):** the wizard work doesn't map to WebMD — your Recharge team wasn't doing merchant-facing implementation, and the wizard was a PM-led conversion experiment, not a dependency-removal initiative. Map WebMD instead to your **Gravity Works era** where you actually were that developer:

> "WebMD's case study describes the engineer-dependency pattern from the content-team side. I've seen it from the developer side at Gravity Works — building DNN and Drupal CMSes for client content teams, fielding the routine schema-change tickets. The bottleneck is real, and the frustration on both sides is real. Headless CMS as the dependency-breaker isn't theoretical for me; I've watched the alternative."

**Where the wizard 4.2× metric goes instead:** standalone, in answer to *"tell me about a recent technical project"* or *"what's your strongest conversion-engineering work?"* — see the honest standalone framing in the **Technical proof points** section above. Don't try to wedge it into the WebMD story.

### Newcastle Building Society — your COPE / regulated-content angle

**The story:** UK building society needed FCA (Financial Conduct Authority) Consumer Duty compliance. Implemented Kontent.ai with **Create Once, Publish Everywhere (COPE)** methodology — 80% shared mortgage content between their member site and B2B site. Service standards updates dropped from two days to five minutes weekly. AI-assisted content generation in-platform.

**Your anchor:**
> "The 80% shared content between Newcastle's member and B2B sites is exactly the architectural choice we made on the Recharge wizard. Activation steps weren't duplicated across Upsell All and Cross-Sell — they were reusable components with smart defaults that responded to context. Same reusability instinct, different domain."

### World Vision International — your async / regional governance angle

**The story:** Nonprofit operating across markets (Spain, Ireland, Canada — English/Spanish/Irish content). Old CMS required all translations done before any regional office could publish — synchronous bottleneck. Headless + language variants → regional offices publish independently with role-based permissions.

**Your anchor:**
> "World Vision moved from synchronous translation to async regional publishing — that's the kind of bottleneck removal that draws me into scoping conversations. Finding where the customer's existing workflow has a synchronization point that doesn't actually need to be one. The Recharge wizard's progressive disclosure was a smaller version: don't make merchants decide downstream things before they've made upstream choices."

### Why these three specifically

- **WebMD** → developer-side-of-the-dependency framing + healthcare regulated industry + Matěj's anchor customer
- **Newcastle** → COPE pattern as the closest analog to your wizard architecture + regulated industry / FCA compliance
- **World Vision** → NGO + closest published analog to the UNICEF / Red Cross / Gates Foundation work Matěj name-dropped (since those aren't public)

### Vocabulary worth recognizing

- **MACH** = **M**icroservices, **A**PI-first, **C**loud-native, **H**eadless. Marketing acronym for the composable architecture pattern. Kontent.ai is the H. World Vision case study uses this term explicitly.
- **COPE** = **C**reate **O**nce, **P**ublish **E**verywhere. Newcastle's published methodology — same content, multiple consumer surfaces.
- **Omnichannel** = one structured content source, N consumer channels (web, mobile, email, EMRs, IoT, etc.). The headline argument for headless.

### Hold-back card

If Michael asks "what other published stories have you looked at?" — *"Those three — picked the ones that mapped cleanest to my own work. World Vision is the angle I'd want to revisit since you mentioned NGOs as a focus area."* Honest, doesn't fake breadth.

---

## Already covered with Matěj — DON'T redeploy

Per the R1 transcript, Matěj already heard:

| Topic | What you said | Implication for R2 |
|---|---|---|
| Why looking | Variety + customer-facing; misses agency-era client conversations | Don't re-narrate. If Michael asks, give a one-line callback. |
| Comfort with ~30% coding | Yes, would miss it but doesn't want heads-down | Off the table. |
| Travel willingness | Yes, has passport, would do Brno onboarding week | Off the table. |
| Stack | React + JS/TS as primary | Off the table. |
| WRG co-lead at Recharge | Mentioned | Don't redeploy as proof point. |
| Multi-framework arc | Vue/Recharge → Recharge product work, agency before that (Gitwit/Taproom/Gravity Works) | Lighter touch. Matěj has the shape. |
| Gitwit a11y presentation | Mentioned briefly | **DO deepen with Michael.** Matěj said NGOs + a11y is their focus area. Michael will likely circle back. |
| Comp expectation | $145K target, came from $165K — *"this would be a departure"* (your honest line) | Off the table. Don't push base again. Matěj already moved $20K. |

### What Matěj did NOT get full air time on (FRESH for Michael)

- **Wizard 4.2× retention metric** — you mentioned data-heavy interdependent forms but didn't land the metric. **Lead one technical answer with this** (per `feedback_lead_with_wizard_metric`).
- **Recharge Claude Code skill** — AI tooling proof, didn't come up.
- **LHS Alumni current work** — your active Next.js + Radix + Postgres project. Strong "currently shipping" anchor (per `feedback_no_lhs_live_overclaim`, frame as building / working locally — NOT live).
- **Specific Taproom enterprise scoping** — touched briefly. Michael will likely probe deeper since post-sales technical scoping is the SE motion.
- **Cell phone retail / consultative listening** — only useful if asked about customer-facing instinct origin story.

### One soft answer to repair

When Matěj asked "have you ever taken part in some sales discussions?" your answer was: *"More so in the technical part of the conversation, less so in the numbers."* Then on post-sales adjustments: *"Here and there, yeah. Not usually for any super long-term commitment."* These are **thinner than ideal** for an SE interview. Michael may probe deeper.

**Stronger version, ready for Michael:**
> "Most of my customer-facing scoping was at Taproom — DTC ecommerce middleware for Nestlé sub-brands, Copper Cow Coffee, InsideTracker. The pattern was technical discovery before solutioning: what's their actual stack, what are the integration constraints, where does the platform fit vs where it doesn't. I was the technical voice in those conversations — not running the deal but owning the feasibility call. The Recharge wizard work was a different shape — internal customer (merchants on the admin side), but same scoping muscle: design + product brought the proposal, I surfaced the edge cases that refined what we shipped."

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
- "DevRel reporting to you means the SE work and the SDK / integration work are tight. Where does that boundary actually sit day-to-day — when does an SE pull DevRel in versus ship the integration themselves?"

**On the AI / agentic side (anchored to what Matěj said):**
- "Matěj mentioned an in-person hackathon a few weeks back focused on AI-powered migration script generation from legacy CMSes. What came out of that — anything that's already in customers' hands, or close to it?"
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
- **Don't redeploy what Matěj already heard.** See the "Already covered with Matěj" section above. Michael will have Matěj's notes — re-narrating wastes the round. Build on it; go deeper.
- **Don't claim case study customers Matěj name-dropped privately.** J&J, Siemens, UNICEF, Red Cross, Gates Foundation, Oxford, Honeywell are NOT in the public case study library. Cite WebMD / Newcastle / World Vision instead.
- **Don't claim LHS Alumni is "live."** Per `feedback_no_lhs_live_overclaim` — still not deployed. Use "building / shipping this week / working locally."

---

## After the call

- **Same-day thank-you to Michael.** Short, specific, one concrete callback.
- **Update the memory** (`project_kontent_ai_warm_lead.md`): Michael's read, Round 3 case study format details, any timeline/comp signals.
- **Resume the demo project** if you offered it — Round 3 is the case study round and the demo is direct prep. The unfinished pieces in `NOTES.md` are the work to ship between Round 2 and Round 3.
- **Tracker entry #60** — add round-2 result in notes, hold status at Interview until offer or decline.
