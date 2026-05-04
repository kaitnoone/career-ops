# Story Bank — Master STAR+R Stories

This file accumulates your best interview stories over time. Each evaluation (Block F) adds new stories here. Instead of memorizing 100 answers, maintain 5-10 deep stories that you can bend to answer almost any behavioral question.

## ⚠ AUDIT NEEDED — Taproom story contamination (flagged 2026-05-03)

The "Taproom Vendor API — Preventing the Incident" story (now pulled) was fabricated by AI in earlier sessions and propagated across this story bank and multiple reports. Other Taproom-anchored entries below may also contain fabricated specifics. Before next use, verify with Kaitlyn:

- **"The Taproom — Shopify + Enterprise Vendors"** entry — overall middleware/themes work is real per memory, but "front-loaded hard conversations" reflection and "vendor APIs maintained across changes" result line came from the pulled story's narrative. Verify what's real.
- **"Pre-Commit Validation — The Taproom Vendor Integration"** entry — a "POC for a poorly-documented third-party fulfillment vendor" — does Kaitlyn recall this?
- **"Qualification Before Commitment — The Taproom Client Intake"** entry — "structured technical intake calls for every new client" — was Kaitlyn doing this as a frontend engineer, or is this a fabricated presales-shaped story?

Pattern lock per `feedback_no_taproom_vendor_api_story`: if Kaitlyn didn't tell us the specifics, it's not a real proof point. Don't reuse Taproom stories from this bank without her sign-off.

---


## How it works

1. Every time `/career-ops oferta` generates Block F (Interview Plan), new STAR+R stories get appended here
2. Before your next interview, review this file — your stories are already organized by theme
3. The "Big Three" questions can be answered with stories from this bank:
   - "Tell me about yourself" → combine 2-3 stories into a narrative
   - "Tell me about your most impactful project" → pick your highest-impact story
   - "Tell me about a conflict you resolved" → find a story with a Reflection

## Stories

<!-- Stories will be added here as you evaluate offers -->
<!-- Format:
### [Theme] Story Title
**Source:** Report #NNN — Company — Role
**S (Situation):** ...
**T (Task):** ...
**A (Action):** ...
**R (Result):** ...
**Reflection:** What I learned / what I'd do differently
**Best for questions about:** [list of question types this story answers]
-->

### [Architecture + Business Alignment] Sleepme Middleware Overhaul
**Source:** Report #005 — Indeed — Senior Software Engineer (Front End)
**S:** Sleepme was undergoing a full company rebrand with tight timelines. The existing middleware didn't align with the new technical and business direction.
**T:** Lead the middleware rewrite to align technical architecture with evolving business requirements.
**A:** Overhauled the architecture connecting Nuxt frontend to Strapi CMS; scoped the work to ship within deadline constraints.
**R:** Enabled non-technical site managers to own content workflows; reduced engineering dependency; shipped on deadline.
**Reflection:** When business constraints are real, architectural elegance is secondary to clear ownership. The win was making the system legible to non-engineers, not making it beautiful to engineers.
**Best for questions about:** Technical judgment under constraints, refactoring, developer experience, shipping under deadline

---

### [Removing Yourself from the Critical Path] Sleepme CMS Integration
**Source:** Report #005 — Indeed — Senior Software Engineer (Front End)
**S:** Non-technical content managers had no autonomy — every content change required an engineering ticket.
**T:** Reduce engineering dependency on content workflows.
**A:** Architected the integration layer connecting Nuxt frontend with Strapi CMS, enabling non-technical users to own their workflows.
**R:** Engineering time on content changes dropped significantly; business stakeholders took ownership of their content.
**Reflection:** Removing yourself from the critical path is often the highest-leverage thing a senior engineer can do. If the system still needs you to function, it's not done.
**Best for questions about:** Senior IC impact, developer productivity, architecture decisions, scalability of the team

---

### [Cross-functional Influence] Recharge — UX Judgment in Engineering Decisions
**Source:** Report #005 — Indeed — Senior Software Engineer (Front End)
**Scope note:** Kaitlyn did NOT have direct merchant conversations at Recharge — she did not have that access. Do NOT frame this as "voice of the merchant," "spoke for customers," "synthesized customer feedback," or "de facto user advocate." Use cv.md verbs only: brought UX judgment into engineering decisions, advocated for user-centered outcomes through product intuition and design sense, influenced prioritization.
**S:** Engineering and roadmap decisions at Recharge benefited from someone willing to bring UX judgment and product intuition into technical conversations — questions about how a decision would land for the user often surfaced late or not at all.
**T:** Bring user-experience judgment into engineering decisions and roadmap discussions as the frontend engineer in the room.
**A:** Brought UX judgment and design sense into engineering decisions; advocated for user-centered outcomes during planning; influenced prioritization across engineering and product based on product intuition rather than direct merchant feedback.
**R:** Engineering and product decisions more consistently weighted user-experience considerations; her input shaped prioritization on UX-sensitive work.
**Reflection:** Influence as a frontend IC comes from showing up to planning conversations with sharp questions about user experience — not from claiming to speak for users you haven't talked to. The honest framing matters because it's the difference between being trusted long-term and being caught overstating once.
**Best for questions about:** Cross-functional collaboration, influencing without authority, frontend IC scope, product-engineering partnership — NOT for "tell me how you talked to customers" or "tell me about being the voice of the user."

---

### [Constraints + Compliance] Gitwit COVID Child-Care Benefits Platform
**Source:** Report #005 — Indeed — Senior Software Engineer (Front End)
**S:** $2M/year platform serving essential workers required a frontend rewrite. Three hard constraints in parallel: compliance requirements, accessibility standards, and data sensitivity across multiple stakeholder groups.
**T:** Lead the frontend rewrite while satisfying all three constraint categories.
**A:** Delivered the rewrite; gave a company-wide presentation on web accessibility standards to drive organizational alignment.
**R:** Platform shipped; org-wide alignment on accessibility standards achieved with measurable impact on product quality.
**Reflection:** Complex compliance projects succeed or fail based on how early you define "done" across each constraint. The presentation wasn't a nice-to-have — it was the only way to make sure the work lasted.
**Best for questions about:** Complex technical delivery, compliance, accessibility, organizational impact, senior engineering judgment

---

### [Teaching + Enablement] Gravity Works Client CMS Training
**Source:** Report #005 — Indeed — Senior Software Engineer (Front End)
**S:** Clients needed to be self-sufficient with their CMS platforms. Engineering couldn't be the ongoing bottleneck for content changes.
**T:** Build client confidence through training and clear explanation — not just documentation.
**A:** Delivered client-facing training sessions and platform presentations; built stakeholder confidence and enabled self-sufficiency.
**R:** Clients owned their CMS workflows post-training; engineering time on client support dropped.
**Reflection:** Teaching is a forcing function — you can't explain something you don't fully understand. Preparing to train a client revealed gaps in my own understanding that I then went and filled.
**Best for questions about:** Communication, client relationships, technical translation, knowledge transfer, stakeholder enablement

---

### [Enterprise Integration + Client Stakes] The Taproom — Shopify + Enterprise Vendors
**Source:** Report #006 — Frontdoor / AHS — Sr. Software Engineer (Frontend)
**S:** The Taproom built DTC ecommerce for enterprise clients. Each client had unique vendor integrations and business requirements — Nestlé, Copper Cow, InsideTracker.
**T:** Build and maintain middleware connecting Shopify to third-party vendors while managing client relationships directly.
**A:** Built the integration layer; developed custom subscription and theming solutions; aligned with clients on scope, requirements, and tradeoffs.
**R:** On-time delivery for enterprise clients; client relationships stable; integrations maintained across changing vendor APIs.
**Reflection:** Enterprise clients care less about elegance and more about predictability. The best thing you can do is surface uncertainty early and give them a clear path. I learned to front-load the hard conversations.
**Best for questions about:** Third-party integrations, API connectivity, client relationships, enterprise delivery, scope management

---

### [TAM / Technical Advisory] Complex Technical Engagement — Gitwit Compliance + Stakeholders
**Source:** Reports #007, #008 — Clerk TAM, PlanetScale TAM
**S:** $2M/year platform serving essential workers required a frontend rewrite under three hard constraints: compliance requirements, accessibility standards, and data sensitivity across multiple stakeholder groups.
**T:** Serve as the technical liaison translating constraints into decisions each stakeholder could act on.
**A:** Mapped each compliance requirement to a specific implementation decision; presented to non-technical stakeholders on what "done" looked like for each constraint category separately.
**R:** Platform shipped; all constraint categories satisfied; stakeholders had clarity and confidence throughout.
**Reflection:** Complex technical projects succeed when you define "done" for each stakeholder separately. What done means for compliance is different from what done means for UX.
**Best for questions about:** TAM stakeholder management, technical translation, delivery under constraints, compliance

---

### [Client Trust + Requirements] Intellicom Direct Consulting
**Source:** Reports #007, #008, #015 — Clerk TAM, PlanetScale TAM, Zapier SE
**S:** Clients at Intellicom ranged from technically sophisticated to completely non-technical. Each needed a technical solution and confidence in the outcome.
**T:** Gather requirements, translate them into a technical solution, and build client confidence in the system.
**A:** Structured discovery sessions; translated requirements into specs; built deliverable checklists both sides could understand; followed up on every open item.
**R:** Repeat clients; high trust across varied technical backgrounds; reliable client satisfaction.
**Reflection:** Technical confidence in a vendor comes from consistent follow-through more than technical depth. Clients who trusted me were the ones I responded to quickly and set honest expectations with.
**Best for questions about:** TAM first impressions, requirements gathering, building trust, client onboarding

---

### [API Integration POC] Pre-Commit Validation — The Taproom Vendor Integration
**Source:** Reports #014, #015 — n8n SE, Zapier SE
**S:** A client needed to connect their subscription platform to a third-party fulfillment vendor with a poorly documented API.
**T:** Validate whether the integration was technically feasible before committing to a timeline.
**A:** Built a minimal proof-of-concept, tested the API endpoints, documented the constraints and edge cases, presented findings to the client with a clear go/no-go recommendation.
**R:** Client understood the scope before the project started; no surprise delays; integration shipped cleanly.
**Reflection:** POCs exist to surface unknowns early. The best ones answer "can this be done?" and "what will break?" before you're halfway through a sprint.
**Best for questions about:** Pre-sales technical validation, POC ownership, SE interview, n8n/Zapier SE roles

---

### [Pre-Sales Discovery] Qualification Before Commitment — The Taproom Client Intake
**Source:** Reports #018, #015 — Decagon SE, Zapier SE
**S:** Every new Taproom client needed a technical intake to understand their stack and what was realistic to build.
**T:** Qualify the engagement before committing to scope — understand real constraints before proposing a solution.
**A:** Structured discovery calls: what's your current stack? What are you trying to achieve? What's your timeline? What have you tried before?
**R:** Avoided scoping mismatches; client expectations were calibrated before work started; no mid-project surprises.
**Reflection:** Good qualification isn't gatekeeping — it's setting both sides up to succeed. A client you can't help is better caught in discovery than at launch.
**Best for questions about:** Pre-sales discovery, qualification conversations, SE interviews

---

### [Analytics + Data Flow] Segment Integration — Sleepme
**Source:** Reports #012, #013 — Hightouch SE roles
**S:** Sleepme needed user behavior tracking during a rebrand to understand how customers were engaging with the new experience.
**T:** Implement Segment analytics integration to capture and route user events for the marketing team.
**A:** Built the analytics event tracking layer, routed data to downstream tools, worked with the marketing team to define what data they needed and what success looked like.
**R:** Marketing team had the data they needed to understand the rebrand impact; downstream tools received clean, structured events.
**Reflection:** Data is only valuable if the people who need it can get it without an engineer in the loop. The best data integrations are invisible to the people who depend on them.
**Best for questions about:** Data platform SE, analytics experience, customer data activation, Hightouch SE interviews

---

### [Customer Advocacy + Business Language] Recharge — Bridging Tech and Marketing Stakeholders
**Source:** Reports #012, #021, #024 — Hightouch SE, n8n CSM, Zapier Automation Strategist
**S:** At Recharge, roadmap planning sessions had a mixed audience — engineers, PMs, and merchant-facing team members who cared about different outcomes.
**T:** Translate technical tradeoffs into language each stakeholder could act on.
**A:** Framed technical decisions as "what does this mean for your conversion rate / subscription retention" — not as "this is what the architecture looks like."
**R:** Engineering and product aligned on decisions that were also meaningful to the business side; less rework due to miscommunication.
**Reflection:** The best cross-functional communicators don't just simplify — they find the business metric that maps to the technical decision. That's what makes a CSM or SE actually influential.
**Best for questions about:** Bridging data/marketing, stakeholder communication, CSM business value framing, SE technical translation

---

### ~~[Proactive Risk Management] Taproom Vendor API Change — Preventing the Incident~~ — PULLED 2026-05-03

**STATUS: PULLED. DO NOT USE.** Kaitlyn confirmed 2026-05-03 she does not recall this engagement. Story was fabricated by AI in earlier sessions and propagated across multiple reports and prep docs. See `feedback_no_taproom_vendor_api_story` memory.

Per memory `feedback_no_taproom_vendor_api_story`: don't fabricate stories with believable shapes. If specifics weren't given by Kaitlyn, it's not a real proof point.

---

### [Strategic Automation Consulting] Intellicom — Removing Manual Workflows
**Source:** Report #024 — Zapier Automation Strategist
**S:** Clients at Intellicom came with operational pain points that often had technical solutions they didn't know existed — manual processes taking hours that could be automated in minutes.
**T:** Understand their workflow, identify where automation could help, and recommend and implement it.
**A:** Used a discovery framework to understand current state; identified redundant manual processes; recommended and implemented tooling (email, hosting, DNS automation); documented the result.
**R:** Clients operated more efficiently without adding headcount; repeat engagements because improvements were visible and lasting.
**Reflection:** The best automation consulting starts with "where are you spending time you shouldn't be?" not "here's what the tool can do." Build-first is the wrong order.
**Best for questions about:** Automation strategy, Zapier Automation Strategist role, CSM technical consulting, workflow design

---

### [Testing Infrastructure] Recharge — Preventing Checkout Regressions
**Source:** Report #027 — Hume AI Frontend
**S:** At Recharge, the subscription widget touched thousands of merchants. A regression in a checkout flow had significant revenue impact downstream.
**T:** Build testing infrastructure that would catch regressions before they hit production.
**A:** Implemented React Testing Library for unit tests; Cypress for end-to-end flows; established test coverage standards for new feature PRs.
**R:** Regression incidents in the checkout flow decreased; engineering team shipped faster with more confidence.
**Reflection:** Testing is a form of documentation — tests tell you what the system is supposed to do. The best codebases are the ones where the tests explain the product, not just verify it.
**Best for questions about:** Senior frontend technical interviews, testing philosophy, quality engineering, Hume AI interview

---

### [CMS Expertise + Cross-Platform Perspective] Multi-CMS Career History
**Source:** Report #026 — Contentful CSM
**S:** Over 9 years, I've implemented or trained clients on 5 different CMS platforms: WordPress, DNN, Drupal, Strapi, and headless CMS patterns.
**T:** For each client, achieve self-sufficiency — they should be able to run their platform without engineering support.
**A:** Developed a consistent discovery approach: understand their content model, their workflow, their team structure, then map the CMS to those realities rather than mapping the team to the CMS defaults.
**R:** Clients adopted and owned their platforms; engineering time on content support dropped across every engagement.
**Reflection:** CMSs fail not because of features — they fail because the content model doesn't match how the team thinks. The job of a CMS advisor is to bridge that gap before launch, not after.
**Best for questions about:** Contentful CSM, CMS domain expertise, customer adoption, digital experience platforms

---

### [Rapid Technical Ramp] Sleepme — New Stack in 90 Days
**Source:** Report #016 — Arize AI Sales Engineer
**S:** Joined Sleepme in April with a full middleware rewrite + rebrand requiring a new stack (Nuxt, Strapi) to ship by July.
**T:** Ramp up on an unfamiliar stack in a compressed timeline while owning the rewrite end-to-end.
**A:** Invested in rapid learning, prioritized the highest-risk unknowns first, paired with team on edge cases, delivered on deadline.
**R:** Shipped on time; content managers had autonomy post-launch; no rollbacks.
**Reflection:** I've never been blocked by an unfamiliar tech stack for long. Ramp-up time is real, but it's a fixed cost — not a recurring one.
**Best for questions about:** Domain gap mitigation, learning velocity, technical adaptability

---

### [AI Tooling + Daily Practice] Claude Code Day-to-Day + Recharge Review Skill
**Source:** Interview prep — AI tooling question (general-purpose story, 2026-04-22)
**Scope note:** The Recharge skill was committed to the repo and available for anyone running Claude Code locally. It was NOT wired into CI or a pre-push hook, and adoption by other engineers is unknown. Do not frame as "team infrastructure," "adopted across the team," or "runs pre-PR" — that overclaims. Stick to "available to anyone who wanted to reach for it."
**S:** AI coding tools arrived fast and most engineers were figuring out their own relationship with them in parallel. I wanted mine to be deliberate, not just vibes-based use.
**T:** Develop a working practice with Claude Code that complemented judgment instead of replacing it, and make any useful piece of that practice available to teammates who wanted it.
**A:** Day to day I live in Claude Code inside VS Code — editing, debugging, talking through implementations before I touch anything. At Recharge I built a custom Claude Code skill for LLM-assisted code review and committed it to the repo so it was there for anyone who wanted to reach for it during review. I didn't wire it into CI or require anyone else to use it.
**R:** For my own work, the skill caught things I'd have missed (e.g., off-by-one on a config key I'd already read past). Availability for others: it was in the repo, anyone running Claude Code locally could pick it up; I didn't track or require adoption.
**Reflection:** The honest pattern with these tools: they're good at boring consistency — matching existing patterns, filling in test cases, scaffolding — and bad at noticing when they're off. Where I spend my attention is figuring out which of those two modes I'm in before I take the suggestion. Building the skill also forced me to be explicit about what "good review" looked like on our codebase, which was useful on its own.
**Best for questions about:** AI tooling fluency, daily practice with Claude Code / LLM coding assistants, "how do you use AI in your workflow," engineering judgment around AI output, contributing tooling to a team — NOT for "tell me about a tool I rolled out across the team" or "tell me about driving org-wide adoption."

---

### [Activation UX + Engineering Patterns] Recharge — Wizard Replacing the Canvas Builder
**Source:** Public case study by design partner Zaid Ali Rasool (zaidalirasool.com/designing-activation-that-sticks)
**Scope note:** Kaitlyn was the engineer; Zaid owned design and the FullStory research. Do NOT claim the research, the merchant interviews, the UX pattern call, or any voice-of-merchant framing. Engineering ownership = the implementation of progressive disclosure, dependency-driven step logic, smart defaults, and validation guardrails across Upsell All and Cross-Sell. Subscription Widget had insufficient data; Upsell Swap was also built but metrics not confirmed — leave both out unless interviewer asks. Outcomes are team outcomes she contributed to, now public via Zaid's writeup. **Use Zaid's exact numbers: in one instance, same-session deactivation cut from ~38% to ~9%, a 4.2× retention improvement. Earlier versions of this story used "~50%" / "2–4×" — those were approximations / a stated case-study goal, not the reported outcome. Don't go back to that framing.**
**S:** Recharge's canvas builder let merchants ship setup fast but they often deactivated the same session — they'd configured something they didn't fully understand. Activation looked like a win but didn't stick.
**T:** Build the wizard replacement across two flagship offerings (Upsell All, Cross-Sell) — slow the path enough that merchants understood what they were configuring, without giving up activation entirely.
**A:** Implemented the wizard pattern: progressive disclosure (only one step expanded at a time), dependency-driven step logic (steps surface based on prior choices), smart defaults to reduce cognitive load, and validation/guardrail states (banners, tooltips, conditional messaging). Pushed back on patterns when implementation surfaced problems Design hadn't anticipated.
**R:** In one offering, same-session deactivation dropped from ~38% to ~9% — a 4.2× retention improvement over the prior canvas builder.
**Reflection:** Time-to-convert went up — that was the point, not a bug. The hardest part of the work wasn't the UI patterns themselves but trusting that slowing the user down was the right move when activation rate was the metric the team had historically optimized for. Worth surfacing as a tradeoff, not hiding.
**Best for questions about:** Frontend implementation of complex stateful UI, engineering-design partnership, activation/onboarding flows, retention vs activation tradeoffs, "tell me about a project where the metric you optimized for changed" — NOT for "tell me about a UX research project" or "tell me about how you talked to customers."

---

### [Pairing + Onboarding] Recharge — Informal Mentoring on the Frontend Team
**Source:** Recruiter follow-up to Lauren at Frontdoor — 2026-04-21
**Scope note:** This is informal IC-level pairing, not a formal mentor program or direct reports. Use cv.md framing exactly: "did some pair programming with our QA engineer and with a new engineer who joined the frontend team." Don't promote to "led mentoring" or "trained" — pairing is the right verb.
**S:** Recharge's frontend team had ongoing test-coverage and bug-investigation work alongside a new engineer joining the team during her tenure.
**T:** Provide IC-level support — both to QA on test approaches and bug investigation, and to the new engineer through their ramp on the frontend codebase.
**A:** Did pair programming with the QA engineer on test approaches and bug investigation; paired with the new engineer during onboarding to support their ramp on the frontend codebase.
**R:** Informal but consistent week-to-week support that helped both teammates move faster on their work.
**Reflection:** Pairing is one of the most underrated forms of IC leadership — it transfers context and judgment in a way docs can't, and it surfaces gaps in your own thinking when you have to explain them out loud.
**Best for questions about:** Mentoring within a dev team, pair programming, onboarding teammates, IC leadership without direct reports — directly answers "tell me about your leadership/mentoring experience" for IC engineering interviews.
