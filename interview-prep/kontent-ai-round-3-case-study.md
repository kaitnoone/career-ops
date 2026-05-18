# Kontent.ai — Round 3: Case Study / SE Demo (debrief + full transcript notes)

**Date:** week of 2026-05-15; decision timeline communicated for early week of 2026-05-18
**Format:** SE demo + live discovery role-play, then out-of-role panel debrief
**Prospect:** Granite View Group — fictional financial-services org
**Panel:** Michael Berry (Director of Consulting), Farrukh, Thom (+ NA Sales / EMEA SE per R2 framing)
**Status:** OPEN DELIVERABLE outstanding (written follow-up answers). Final yes/no expected early week of 2026-05-18.

---

## What she did well (and the panel said so, unprompted)

**The pivot thesis got validated out loud.** Direct panel quotes:

- *"I think you did a lot more than what a sales engineer would do… I think it's good to be completely honest. I like that."*
- *"I think you did discovery whereas normally I'm used to having sales engineers that are being told what to demo and then they just come and do the demo and don't really provide any other value apart from the role. And I think you provided value which is more than just your role."*
- *"It's quite clear you don't know the platform that well yet. But I think that would be unfair to judge you on that. And I appreciate you didn't lie when I asked you some questions that I probably knew you're not going to know the answer to. And even though I asked you a series of questions that I knew you didn't know the answer to you didn't get flustered. So I thought you kept your cool. Well done."*
- On the slide-deck ↔ live-demo swapping (Thom's question): *"No, I liked it… it's a good marker. In 2026 attention spans are so short you can lose someone after five minutes — it's like a breaker."*
- Close: *"What you put into this does not go unnoticed… we appreciate all you did on that demo. Being tasked with that is no easy task — go learn a platform and then present it to three people that work there."*

**Read:** The platform-depth gap — the thing she's beating herself up over — was *explicitly* declared a non-judging criterion. They deliberately asked questions they knew she couldn't answer to test composure and honesty, not knowledge. She passed the test they were actually running. Her own in-room framing ("graceful deflection + I'll get back to you in follow-up + build a wow-factor artifact if they go quiet") was the correct SE instinct and she articulated it unprompted.

Strong moments in the role-play:
- Mapped capabilities 1:1 to stated pain — esp. editor-owned rollback answering the "junior editors at 2am could take down the site" worry; ISO 27001 / SOC 2 Type 2 / GDPR surfaced exactly when the copy-paste compliance red flag came up.
- Webhook → Next.js ISR explanation ("not babysitting deploys… end of content drift") was crisp and developer-credible.
- Reciprocal discovery question ("what gaps did I miss?") landed well; localization callout got an explicit "that was actually really good."

## The one real gap they named (minor, explicitly NOT a detractor)

- *"Knowing externally that our value prop and marketing position is around AI, a little glance into the AI features would have been nice to shape around our content.ai objective. But that's not a detractor — you hit the points of the brief and what the customer cares about."*
- Coaching, not a ding: more strategic AI-story shaping. **This is the perfect thing to retroactively land in the written follow-up** (see below).
- Metrics-conversation depth: panel pre-emptively reassured her a real sales director backstops this collaboratively ("not 'you have the floor, good luck'"). Framed as how the job works, not a weakness.

## Intel gained (useful if it lands → onboarding/negotiation)

- Team is small + aggressively AI-native. Farrukh: 4 developer advocates (DevRel) + 2 customer-education + 1 EU consultant + EU pre-sales. Claude Code deeply embedded — refined CLAUDE.md / memory / context-compilation patterns. *"I have a team of four but it feels like I have a team of 12."*
- Australian-customer calls occasionally; they schedule for AU morning (brutal from US East; her CT is more workable).

## Follow-up — SENT (2026-05-18, addressed to Michael / Thom / Farrukh)

Closed all five loops, prompt and well-organized. Honest throughout, no bluffing. Assessment:

- **Platform limits:** answered "plan-dependent" + offered a full spec/pricing sheet. A truthful non-answer (real numbers ARE plan-dependent; correctly didn't fabricate, consistent with no-overclaim posture; panel pre-cleared depth as non-judging). Fine here.
- **Taxonomy:** strong. Honest that Kontent.ai taxonomies are flat (no native nesting/poly-hierarchy), pivoted constructively to linked content types, kept it open with "worth a conversation before ruling anything in or out." Correct + consultative.
- **API security:** strongest item. Environment-scoped keys, Delivery (read) vs Management (ops), HMAC-SHA256 webhook signing tied back to "what the demo app was verifying in real time," rotation without cross-env impact. Accurate and credible.
- **SEO:** honest — no native SEO scoring tool, structured fields pipe into existing tooling. Doesn't oversell.
- **AI/migrations:** the soft spot. Defensive ("still in development") + the production Management-API migration path. Accurate and on-message, but it's the shortest/weakest item — and AI-story shaping around content.ai is *exactly* the one gap Farrukh named. She didn't take the open lane (responsible-AI augmentation: localization / SEO suggestions / content optimization without architectural decisions; tie to Granite View's EU/LatAm + SEO goals). Can't unsend — flag for self-calibration and have the AI-shaping story ready if any further conversation/round happens.
- Minor: spec-sheet offer appears twice (platform-limits item + closing). Trivial; calibration note for next time, not a miss.
- Closing note: warm, brief, genuine ("generosity of the debrief"). Right register per [[feedback_thank_you_note_voice]].

**Net:** solid, honest, prompt follow-up that does the core job. Technical answers (esp. API security, taxonomy) carry it. One real miss (thin/defensive AI section where they wanted strategic shaping), not a disqualifier.

**Status: nothing left to do but wait.** Follow-up sent, thank-you sent, every loop closed. The right posture is to stop — no Matěj profile-view nudges, no status checks. The work is complete and good; let it land.

## Comp context (live for negotiation if this lands)

Base $120K + 2% commission (avg deal ~$100K, range $30K–$700K), est. OTE $135–150K mid. 401k 6% match, 5 wks PTO, fully-covered family healthcare, fully remote US, ~1 wk paid onboarding in Brno.
