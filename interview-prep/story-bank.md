# Story Bank — Master STAR+R Stories

This file accumulates your best interview stories over time. Each evaluation (Block F) adds new stories here. Instead of memorizing 100 answers, maintain 5-10 deep stories that you can bend to answer almost any behavioral question.

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

### [Scale + Accessibility] Recharge Subscription Widget Overhaul
**Source:** Report #005 — Indeed — Senior Software Engineer (Front End)
**S:** Merchants needed a more accessible subscription experience; the platform served thousands of merchants simultaneously with a diverse customer base including users relying on assistive technology.
**T:** Own the accessibility overhaul end-to-end — from vendor partnership to implementation.
**A:** Partnered with adaptive technology vendors; led implementation across the subscription widget; collaborated with product and GTM teams.
**R:** Improved integration reliability across a diverse merchant base; work directly impacted retention goals.
**Reflection:** Accessibility at scale requires cross-team alignment earlier than most teams plan for. By the time you're in implementation, the architectural decisions are already made.
**Best for questions about:** Technical ownership, accessibility, cross-functional collaboration, large-scale frontend work, impact

---

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

### [Cross-functional Advocacy] Recharge Voice of the Merchant
**Source:** Report #005 — Indeed — Senior Software Engineer (Front End)
**S:** Merchant feedback was being collected but wasn't consistently reaching engineering or influencing prioritization.
**T:** Formally bring the user voice into roadmap planning as a frontend engineer.
**A:** Synthesized customer feedback into requirements; advocated in planning sessions; influenced prioritization decisions across engineering and product.
**R:** Engineering and product became more aligned on merchant needs; became the de facto user advocate in technical planning.
**Reflection:** Engineers who can represent users without a PM in the room are rare and valuable. Make that role explicit — don't just do it informally.
**Best for questions about:** Product collaboration, stakeholder management, customer empathy, influence without authority

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

### [Proactive Risk Management] Taproom Vendor API Change — Preventing the Incident
**Source:** Report #021 — n8n CSM
**S:** One enterprise client's integration was drifting — their vendor API was publishing breaking changes in their changelog.
**T:** Catch the problem before it became a support emergency or client incident.
**A:** Monitored the vendor's changelog as part of ongoing maintenance; proactively alerted the client; proposed and implemented the fix before they noticed an issue.
**R:** Zero-downtime for the client; they didn't have to file a support ticket; trust increased.
**Reflection:** In account management, the best support is the support the client never knew they needed. If I'm reacting to incidents, I've already failed.
**Best for questions about:** CSM proactive risk management, escalation prevention, account health monitoring

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

### [Component Systems + Developer Experience] Recharge Storybook + Design System
**Source:** Reports #029, #027 — WorkOS Frontend, Hume AI Frontend
**S:** Recharge's frontend served thousands of merchants, implemented across many different Shopify themes. Inconsistent component patterns were creating bugs and UX inconsistencies.
**T:** Establish component standards that product engineers could follow to ship consistently good UX at scale.
**A:** Introduced Storybook for component documentation and visual regression testing; defined a component API convention; ran internal workshops to align the engineering team.
**R:** New feature development had faster UI implementation; regressions in merchant-facing UX decreased; engineers had a shared vocabulary for UI decisions.
**Reflection:** Component patterns are team infrastructure. The best ones encode decisions so engineers don't make them repeatedly — and when a decision needs to change, there's one place to change it.
**Best for questions about:** WorkOS frontend interview, component systems, developer experience, React architecture

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
