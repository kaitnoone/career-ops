# Pre-Req Interview Prep: Artisan Studios

**Context:** After the 2026-04-23 intro call with Shilo Ginther (Talent Lead), she floated running interviews pre-req so Artisan has you queued for when a role opens. Framing from her side: "a matter of when, not if."

**Stack confirmed:** React, TypeScript, Vue (primary), AWS (platform layer).

**Company:** OKC/NC-based AWS digital innovation consultancy. Consulting = client-facing work, staff get placed across engagements.

**Posture:** Treat this as real interviewing. "When, not if" is Shilo's confidence, not a commitment — a pre-req interview that goes poorly closes the channel harder than no interview at all. Prep like it's a normal senior-IC loop.

---

## What this interview will test (best guess)

Pre-req at a consultancy is usually evaluating:

1. **Can we put you in front of a client?** Communication, calm under scope pressure, ability to explain tradeoffs to non-engineers.
2. **Can you ship senior-IC work across stacks?** React + Vue + TypeScript depth, and the judgment to pick the right tool.
3. **Accessibility + quality instincts.** Agencies eat WCAG tickets for breakfast — this is a real edge for you.
4. **Comfort with ambiguity.** No fixed codebase. Every engagement is new context, new stakeholders.
5. **AWS surface area.** Not deep architecture, but "can you work in a shop where infra conversations happen around you." Honest framing matters.

---

## Core narrative (60–90 seconds)

> "9+ years of frontend across Vue, Angular, React, and Liquid. Most recently at Recharge on the subscription widget used by thousands of Shopify merchants — React, TypeScript, a11y-heavy work, building out testing infrastructure, informal pairing with QA and a new engineer. Before that, Sleepme (Nuxt/Vue middleware rewrite), Gitwit (Angular, gave a company-wide WCAG talk), The Taproom (Shopify agency — Vue, Liquid, client-facing). I lean senior-IC: owning end-to-end work, partnering across product and GTM, making architectural decisions that get engineering out of the critical path. Looking for remote senior-IC work where stack flexibility is a feature, not a bug."

**Adjustments:**
- If the interviewer is technical → lead harder on Recharge stack and multi-framework range.
- If the interviewer is delivery/consulting → lead on Taproom + client work + shipping-under-constraints.

---

## Technical questions — likely shapes

### React

**"How do you think about component architecture in a large React codebase?"**
→ Anchor on Recharge subscription widget. Talk about co-location (component + styles + tests), prop-drilling vs context, when to reach for state managers vs lift state, how testing shapes the component boundary. You're not here to be a React theorist — you're here to show judgment.

**"What's the tradeoff between X and Y?" (hooks vs HOCs, state managers, server components, etc.)**
→ Lean on your Radix/shadcn/headless-primitives preference from memory. "I like primitives that leave accessibility and state decisions close to the component author" is a real point of view. Don't bluff on things you haven't shipped.

**React tenure honesty:** ~2 years of React at Recharge. 9+ years of frontend. If asked "how long have you been writing React," say so plainly. Then pivot to what that range of frameworks actually teaches you — pattern recognition across paradigms, comfort ramping, less religious about any one tool.

### TypeScript

**"How do you use TypeScript day to day?"**
→ You use it at Recharge. Honest framing: "I'm comfortable in a TypeScript codebase, I use it fluently for components, props, hooks, API contracts. I'm not a TS-gymnastics person — I'm not writing advanced conditional type utilities every day." If they push on deep generics / variance / infer-heavy patterns, say "I can read and maintain that code; I'd reach for a teammate or docs if I were authoring it from scratch."

**"How would you type X?"**
→ Think out loud. Ask clarifying questions. Propose a simple version first, then refine. Consulting interviewers care that you can reason with them, not that you had the answer pre-cached.

### Vue

**This is your genuine edge for this shop.** Most senior FE candidates they screen are React-only. You have real Vue shipping experience (Sleepme Nuxt rewrite, Taproom Shopify work).

**"Walk us through your Vue work."**
→ Sleepme middleware overhaul is the strong story. Nuxt frontend, Strapi CMS, architectural rewrite to align with a rebrand, enabled non-technical content managers to own workflows. Tie to the "removing yourself from the critical path" reflection.

**"Vue vs React — what do you reach for and why?"**
→ Don't take a religious side. Honest answer: Vue's SFC model + reactivity system makes simple apps feel fast to build; React's ecosystem is deeper for large enterprise work. Consulting picks what fits the client, which is a feature of the job for you, not a compromise.

**Vue 2 vs Vue 3 / Composition API:** If asked, be honest about which you've shipped. Composition API is closer to React hooks mental model, which is a bridge. Options API was your earlier Vue experience.

### Accessibility

**This is a real strength — lean into it.**

Go-to proof points:
- A company-wide WCAG talk at Gitwit. *(Always "a," never "the.")*
- Contributed to an early accessibility audit of the Recharge subscription widget. *(Don't frame as "led" — you contributed. Don't claim adaptive-technology partners — that wasn't the case.)*
- Gravity Works / MSU Resource Center for Persons with Disabilities — keyboard-navigable multi-level megamenu with intentional tab-index, focus traps, modal placement. Good concrete work-sample story.

**If they ask about component libraries:** Radix / shadcn / React Aria headless primitives are your preferred pattern because they leave a11y decisions close to the component author instead of locking them into a design system's defaults.

### Testing

Recharge testing infrastructure story is the strong anchor — React Testing Library + Cypress, coverage standards for new feature PRs, regression incidents dropped. Keep the framing precise: you built / contributed to the infrastructure, you set coverage standards, the team shipped faster with more confidence.

### Build tooling / AWS (honest gaps)

**Build tooling:** You've worked in Vite repos, you haven't configured Vite. Consumer not author. Same framing for Turborepo / Next.js config layer. "I can work in a repo with a well-configured build layer; I'm not who you'd want owning a from-scratch build migration without ramp time." That's a real answer, and it's more trustworthy than pretending.

**AWS:** You've consumed AWS services through integrations. You haven't architected on AWS. "Willing to go deeper, not pretending to be there already." Mirrors the honest framing you'd use with Articulate.

### AI tooling

The Claude Code skill story is already in the story bank with the scope note — built at Recharge, committed to the repo, available to anyone running Claude Code locally, not wired into CI, adoption unknown. Don't overclaim. Use it as the AI-native proof point if Bedrock / AI-in-consulting comes up.

---

## Behavioral questions — map to story bank

| Likely question | Story to reach for | Why |
|---|---|---|
| "Tell me about a time you shipped under hard constraints." | Gitwit COVID child-care platform | Compliance + a11y + data sensitivity + a real user base |
| "Tell me about working with a difficult stakeholder / client." | Taproom Shopify + enterprise vendors (Nestlé, etc.) | Enterprise client-management proof point |
| "Tell me about a time you disagreed with a technical decision." | Recharge UX judgment story (use the scope note — no "voice of merchant") | Influencing without authority as an IC |
| "Tell me about mentoring / helping a teammate." | Recharge informal pairing (QA + new engineer) | Pair programming, not formal mentorship |
| "Tell me about something you learned recently." | MVP scope-cutting + AI-shifts-where-the-expensive-decisions-live (the Rally framing) | Recent, specific, thoughtful |
| "How do you handle ambiguity / unclear requirements?" | Intellicom client discovery framework | Qualification-before-commitment pattern |
| "Tell me about a time you picked up a new stack quickly." | Sleepme Nuxt/Strapi ramp in 90 days | Learning velocity |
| "Tell me about an architectural decision you're proud of." | Sleepme middleware overhaul — Nuxt ↔ Strapi CMS | Removing engineering from the critical path |

**Tip:** If you're asked a question the story bank doesn't cover cleanly, don't force a fit. Better to say "the closest example I have is…" and adapt than to stretch a story into a shape that doesn't hold up on a follow-up.

---

## Consulting-specific questions

**"How do you handle scope creep?"**
→ Two frames. Operationally: surface it the moment you see it, not at the retrospective. Clients respect engineers who name tradeoffs early. Conceptually: the MVP scope-cutting muscle — most of what feels essential is padding. The satisfying part is watching nothing break after you cut. *(That line is yours. Use it.)*

**"How do you build trust with a client you've just been placed on?"**
→ Intellicom framework. Discovery calls: what's your current stack, what are you trying to achieve, what's your timeline, what have you tried before. Set honest expectations early. Follow through on every open item. Trust comes from consistency more than depth.

**"What's your approach to context-switching across clients?"**
→ Taproom is the proof. Multiple enterprise clients in parallel — Nestlé, Copper Cow, InsideTracker — each with different stacks and priorities. Context-switching is a muscle, not a drag, if you've built systems for it.

**"Have you ever had to tell a client no?"**
→ Yes — Intellicom and Taproom both. Qualification *is* the job. A client you can't help is better caught in discovery than at launch. That's a reframe of "saying no" that consulting interviewers respond to.

---

## Questions to ask them

Pick 3–4 per interviewer, not the whole list. Rotate across interviewers.

**On their work:**
- "What's the typical shape of a client engagement — length, team size, how much of the stack are you touching vs consulting on?"
- "How do you decide when to recommend React vs Vue for a new client project? Is that driven by client team skills, or more by problem shape?"
- "How AWS-integrated is a typical frontend engagement? Am I likely to be working close to the infra layer or mostly in the UI?"

**On the team:**
- "What does a strong senior FE look like on your team six months in? What are they doing differently than a solid one?"
- "How much of the codebase gets shared across clients vs custom per engagement?"
- "How does testing and accessibility tend to land in client engagements — are those hard requirements, or are they things consultants have to advocate for?"

**On the role path:**
- "If I came on and delivered well, what's the growth path look like — tech lead, solution architect, engagement lead?"
- "How do you think about AI tooling on your team right now? Is anyone building skills or internal tooling around Claude / Cursor / Copilot?" *(Opens the door to your Claude Code skill story without forcing it.)*

**On logistics (save for the end, or for Shilo/HR):**
- "What comp band are senior FE engagements usually landing in?" *(If Shilo hasn't shared.)*
- "What's the usual timeline from offer to start — is there flexibility if I'm wrapping things up elsewhere?"

---

## Things NOT to do

- Don't mention the Recharge RIF. Ever. Internal context only.
- Don't frame Recharge merchant-facing work as "voice of merchant" / "synthesized customer feedback." You had UX judgment and product intuition inside engineering, not direct merchant conversations.
- Don't call the Gitwit WCAG talk "the." Always "a company-wide WCAG talk at Gitwit."
- Don't inflate React tenure. It's ~2 years. 9+ years is multi-framework.
- Don't pretend AWS depth. Consumer, not architect. Same for Vite config.
- Don't overclaim adoption of the Claude Code skill at Recharge. Available locally, not wired into CI, adoption unknown.
- Don't assume gender of anyone referred to by first name only. Use neutral phrasing.
- Don't over-rehearse answers. Consulting interviewers can smell canned answers fast. Have the stories, let the specific words come out live.

---

## Day-of checklist

- [ ] Re-read this doc + story bank entries you plan to anchor on.
- [ ] Re-read `modes/_profile.md` and `config/profile.yml` for comp numbers + deal-breakers.
- [ ] Have your CV open in a tab (output/cv-kaitlyn-noone-*.pdf or cv.md).
- [ ] Have a notebook — write the interviewer's name + one specific thing they said, for the thank-you email.
- [ ] Water. Bathroom before. No caffeine spike mid-loop.

---

## After each interview

- Send a short thank-you within 24 hours. Reference one specific thing they said. Don't template.
- Update `user_artisan_studios_channel.md` with: interviewer names, what they flagged as strength/concern, anything they said about timeline or req shape.
- If they surface a specific req during the loop → create a `reports/` evaluation for it.
- If the loop goes well but stays pre-req → confirm with Shilo what "staying warm" looks like (monthly check-in, quarterly, only when reqs open).
