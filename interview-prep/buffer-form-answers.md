# Buffer Senior Growth Engineer — Form Answers

**Compiled 2026-05-02** for the Buffer application. Saved in case the form eats the content again. Paste each block into the corresponding field.

Cover letter PDF and CV PDF are at:
- `output/cv-kaitlyn-noone-buffer-2026-04-30.pdf`
- `output/cover-kaitlyn-noone-buffer-2026-04-30.pdf`

---

## Q1 — Why Buffer? What excites you about Buffer's mission and the kind of work we do? How do you see yourself contributing to it in this role?

The "no-ego doer" philosophy at Buffer hits home for me. I co-led Recharge's Women's ERG and serve on the board of directors for Tulsa Girls Art School, and the work I'm proudest of has always been the kind that gets done because someone showed up and cared.

The accessibility investment is the other big draw. Kateryna Porshnieva's public work on a11y at scale is so important and tells me a lot about the kind of engineering team you're running. The Radix and Base UI choices are stacks I'd already pick if it were my call.

How I'd contribute in this role: 9 years of multi-framework frontend (Vue, Angular, React, Liquid) means I can ramp on Next.js + Radix fast, and my recent Recharge work was conversion engineering by another name. I rebuilt the activation flow with a wizard pattern that improved retention 4.2x in one offering — that's growth-engineering discipline applied to an internal product surface, and the discipline transfers cleanly to a marketing site.

---

## Q2 — Tell us about a technical project you led and shipped recently. What problem did it solve, and how did you approach building it? Please include context about your role, the technologies used, and any measurable impact or lessons learned.

At Recharge, I rebuilt the activation flow across Upsell All and Cross-Sell.

Problem: The previous experience was a canvas builder. Merchants set up offerings starting with a blank canvas, which led to misconfiguration and high same-session abandonment.

Approach: I built on what design and product defined, surfacing edge cases that refined the approach. Technical architecture, implementation in React + TypeScript, validation logic, and rollout fell to me.

Impact: Same-session deactivation dropped from ~38% to ~9% in one offering, a 4.2x retention improvement over the prior canvas-builder cohort.

What I took out of it: Activation is its own product surface, not only a styling problem. Defaults and guardrails help people make good choices, and that carries more weight than just visible component work. That's the lesson I'd bring to growth engineering at Buffer: small infrastructure choices in the conversion path can make all the difference.

---

## Q3 — Which improvements or opportunities would you propose for buffer.com? Explore this from any angle you like — SEO, conversion, experimentation, tracking, programmatic content, or growth infrastructure. What would you test, build, or optimize next?

The site is solid and the branding is strong, but it's a little overwhelming. The offerings run together — coming in cold, I'd want to know faster which Buffer product fits which job, and where the path from "interesting" to "signed up" actually lives. There's a lot of value being communicated in parallel, with not enough about which one is for me right now.

What I'd build first: instrumentation to find where potential customers are getting lost between marketing page and signup. Where do they land, which sections do they scroll past, where does the funnel narrow? Diagnostic before any redesign call.

Then I'd run experiments. A homepage variant that asks "what brought you here?" up front and routes accordingly. Progressive disclosure on the offerings instead of flat-display — same thinking that worked in the Recharge activation flow.

These are hypotheses from one cold visit. I'd hold them loose until the instrumentation tells us where the actual leak is.

---

## Q4 — Tell us about a time you were wrong at work. What happened, and how did you handle it? What did you learn from it?

At Gitwit, I was building a proof-of-concept and decided to try a new CSS framework I'd been curious about. I was treating it as a learning opportunity inside a low-stakes deliverable. While I was out of office and heads-down on another priority, the POC got promoted to a real client demo. Seth, another engineer on the team, picked it up for cleanup before the demo went out, and he was rightly frustrated. I'd quietly introduced a dependency the rest of the team hadn't agreed to, and now he was untangling it on a deadline without me around to defend the choice.

He was right. I'd treated "POC" as a sandbox label when in practice the prototype was already real-shaped by the time it got promoted. The cost of that wasn't just mine to carry. It landed on the colleague who had to clean it up. I owned that with both Seth and our manager directly when I was back, so Seth wasn't the one having to escalate.

What I took out of it: every "experimental" dependency I pick is a real one. Either I'd defend it in production, or I mark and isolate it clearly so the team can decide whether to fold it in. Especially when I'm not the one who'll be around to handle the cleanup.

---

## Q5 — Share your experience with content creation or social media. Have you ever run a newsletter, blog, or social account? What kind of content do you like to create or share? If relevant, include links or examples.

At Intellicom I ran weekly social-media programs for small-business clients on Facebook — building out a week's worth of posts, getting client sign-off, scheduling them out, and managing a small amount of ad spend. Wasn't the bulk of the role, but it was steady ongoing work. That's the workflow Buffer is built around, and I'm familiar with the customer side of it from real client work.

Personally: a small Substack where I write personal essays — most recently a memoir piece about a childhood harvest day on my family's wheat farm in Kansas (kaitlynnoone.substack.com/p/good-weather-days). I write when something's worth saying rather than on a cadence, so the output is slow and the audience is small.

A fair amount of comms work in non-public channels too — programming and content for Recharge's Women's ERG (which I co-led), fundraising committee work for Tulsa Girls Art School where I'm on the board. Different surface, same instinct: show up when there's something worth saying.

Right now my making-things energy is going into a Next.js + Radix + Postgres alumni-community app for my old high school — content-adjacent infrastructure, designing the conditions under which a community can find each other and stay in touch.

---

## Q6 — Share a quick 2–4 minute video about something you've learned recently. (Optional)

**Skip this field.** It's optional, and skipping it does not disqualify the application. The text answers carry the substantive case on their own.

If at some point you want to record one (e.g., the LHS Alumni / Claude-as-thinking-partner outline we built), the outline is preserved in this conversation history and can be revisited later. But not today.
