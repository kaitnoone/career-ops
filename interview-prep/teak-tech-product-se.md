# Deep Dive: Teak — Technical Product Solutions Engineer

**Date:** 2026-04-21
**Role:** Technical Product Solutions Engineer
**URL:** https://teak.applytojob.com/apply/FXo5tI18gP/Technical-Product-Solutions-Engineer
**Companion report:** `reports/068-teak-technical-product-solutions-engineer-2026-04-21.md`

---

## 1. Company snapshot

- **Name history:** Protecht, Inc. → **Teak** (rebrand announced October 8, 2025)
- **HQ:** Phoenix, Arizona
- **Founded:** 2016
- **Employee count:** not publicly disclosed; Glassdoor shows a small review count (7), suggesting small-to-mid team
- **Structure:** Teak (the parent tech brand) + **Fanshield** (its licensed insurance subsidiary, kept its name through the rebrand)
- **Scale claim:** $1B+ in refundable experiences, 12M+ consumers served
- **Business stage:** profitable, "growing fast"

**Naming collision to watch for:** There's an Australian company called **Protecht Group** (governance/risk/compliance software, founded 1999, Sydney). Completely separate from Teak/Protecht Inc. Don't conflate them in the interview — if anyone mentions "Protecht Group," clarify you're thinking of the Phoenix refundability company.

## 2. Product

Two products that work together:

| Product | What it is | Model |
|---------|-----------|-------|
| **Smart Refunds** | "Upgrade to a refundable ticket" at checkout | Virtual refund — Teak pays the consumer, not insurance-triggered |
| **Friendly Insurance** | Actual named-peril insurance | Backed by Fanshield (their own licensed carrier) |

**Wedge vs pure insurance:** Smart Refunds sidesteps the classic "I have to prove something went wrong" friction of insurance — consumers just get refunds. That's a UX advantage at checkout and an economic one (Teak keeps the float on unredeemed refunds).

**Who they sell to:** live events, sports, endurance racing, travel. "Partner integrations" in the JD = checkout integrations with ticketing platforms, race registration systems, OTAs.

**Ancillary revenue claim:** partners can "make up to 20% more ancillary revenue per transaction" — this is the pitch the SE team has to prove in POCs.

## 3. Funding & ownership

**Uncertainty flag:** public data is thin and partly conflated with the Australian Protecht Group. Best read:

- **Series A:** IA Capital Group and American Family Ventures participated (both US VCs — consistent with Protecht Inc. / Teak)
- **Series B (March 2025):** $280M from **PSG Equity**, who bought out earlier external investors to become majority owner
- **Cumulative:** $322M total raised (per CBInsights; mix of venture + growth equity)

**What this means for the role:** PSG is a growth-equity firm, not a venture shop. They buy controlling stakes in profitable SaaS and push on scaling. Implications:
- Aggressive GTM push — hence the "first sales hire" / SE hire narrative
- Focus on margin and retention metrics, not just topline
- Rebrand is part of a GTM reset to enable bigger enterprise deals
- Less "pre-Series-A startup ambiguity" — this is a structured scale-up

**Interview question to ask:** "With PSG Equity's backing, what does the 12-month GTM plan look like? Where does this SE role sit in that plan?"

## 4. Leadership & engineering

- **CTO: Mark Kramer** (joined July 2022, originally as Protecht CTO). Previously EVP Engineering at **Shopkick** (consumer mobile rewards / shopping app, acquired by Trax).
  - Shopkick DNA = consumer mobile, high-volume event processing, checkout-adjacent tech. Strong cultural signal for what Teak values.
  - His scope at Shopkick: global mobile + platform + infrastructure + data engineering + QA. Likely mirrored at Teak.
- **Engineering culture signals** (7 Glassdoor reviews — small N, calibrate accordingly):
  - Positive: fun, tight-knit, "wear many hats," multidisciplinary skill growth, teamwork/independence blend
  - Concerning: "salaries usually on the lower side," mid-career mentoring gaps, work-life balance slipping under client deadlines
  - **Implication:** be sharp on comp in the screener. The lower-salary signal matches the profile of a profitable company with PSG's margin-focused discipline. Don't anchor below your floor.

**Interview question to ask:** "What does the eng/SE handoff look like — are SEs expected to read and modify partner-side code, or mostly configure Teak's own platform during integrations?"

## 5. Competitive landscape

Market size: **$6.52B (2025) → $23.34B (2035), 13.6% CAGR**. North America is 35.5% of the market ($2.31B). This is a growing category, not a zero-sum scrap.

| Competitor | Model | Wedge | Presence |
|------------|-------|-------|----------|
| **Allianz (Event Ticket Protector / Allianz Ticket Protection)** | Named-peril insurance | Massive carrier brand; exclusive-ish at Ticketmaster, AXS, Live Nation, Front Gate | Dominant in US live events |
| **XCover / Cover Genius** | Embedded insurance w/ AI-pricing | Global, "Cancel For Any Reason" product, AI-backed deductibles | Amazon, SeatGeek; global reach |
| **Refund Protect (Protect Group)** | "Upgrade to refundable" virtual refund | UK-origin; similar structural model to Teak Smart Refunds | European event/travel-heavy |
| **Booking Protect** | Refund protection (often backed by XCover) | Volume plays on secondary/regional ticketing | Global, lower-end of market |
| **Teak** | Smart Refunds (virtual) + Friendly Insurance (Fanshield) combo | US-licensed carrier + virtual refund hybrid; profitable; PSG-backed | US sports / endurance / travel / events |

**Teak's differentiation story (what you'd pitch in a POC):**
1. Owns its own insurance carrier (Fanshield) → less dependency / better margin / regulatory stability
2. Virtual refund ≠ insurance → lower consumer friction → higher attach rate
3. US-focused + North American regulatory depth → advantage for partners selling to US consumers
4. Profitable, not racing a burn-rate clock → stable partner for multi-year integrations

**Risk to probe:** Allianz at Ticketmaster is a very hard moat. Teak is more likely winning regional ticketing, endurance races, and travel — not unseating Allianz at Live Nation. That's a fine strategy but worth knowing.

**Interview question to ask:** "Where is the sharpest wedge Smart Refunds has against Allianz-dominated checkouts? What's the characteristic partner profile you win?"

## 6. Likely technical challenges (as an SE)

- **Checkout integration sprawl** — every ticketing / race / travel partner has a different stack (Shopify, custom, older PHP/Java systems, Salesforce Commerce Cloud, Ticketmaster-style APIs). SE must read across all of them. **This is why the JD lists Python/PHP/Java/C/C++ as breadth.**
- **Webhook reliability / idempotency** — refunds are financial transactions; duplicate firings are disasters. Partner-side retries must be handled.
- **State-by-state insurance compliance** — Fanshield ties to specific state licenses. SE role probably includes "is this state a go/no-go for this partner?"
- **Claims / payout workflow** — if a partner's refund UX breaks, ancillary revenue evaporates on day one.
- **Fraud / abuse detection** — easy money attracts fraud, SE is likely part of the "why is this partner's claim rate suddenly 4x" war room.
- **Data sync for revenue share** — Teak earns from ancillary revenue; partners need accurate reporting to trust the integration.

These are your "what would you ask on week one" signals in the interview.

## 7. Candidate angle (Kaitlyn specifically)

### Strongest proof points to surface

| Teak need | Kaitlyn proof | Why it lands |
|-----------|---------------|--------------|
| Partner-integration architecture across ecommerce stacks | Taproom Shopify ↔ third-party vendor middleware for Nestlé, Copper Cow Coffee, InsideTracker | Exact analog: partner-specific quirks, retry logic, enterprise client stakeholders |
| Subscription + checkout flow complexity | Recharge — upsell and post-purchase flow wizards, partnered with GTM | Closest direct adjacency; same vertical (DTC commerce) |
| Multi-language / breadth framing | CV stack: JS/TS, Python, PHP + years of reading diverse codebases | Matches the "read customer code in whatever they've written" positioning |
| Stakeholder translation for pre-sales | Intellicom direct consulting + Gravity Works client training | Nobody coming in cold for an SE role should oversell "I've closed deals" — but the "translate between eng and client" skill is real and well-proven |
| AI / tooling signal | Claude Code skill at Recharge for LLM-assisted code review | CTO is ex-Shopkick consumer-mobile — pragmatic AI adoption reads positively |
| Partnerships-title validation | Final round for Technical Partnerships Manager at Recharge (internal role, pre-RIF) | Signals internal leadership saw her in this seat — answers "are you sure you want to do SE?" |

### Signals to study before the interview

- **Shopkick** — worth 15 minutes of reading. Mark Kramer ran engineering there for years; pattern-matching on what he'll ask will come from that experience
- **Ticketmaster's Allianz partnership** — know the default state of the live-events market so you can articulate Teak's wedge
- **"Cancel For Any Reason" (CFAR)** — industry term; XCover has a CFAR product, Smart Refunds is structurally similar. Know the vocabulary.

### Red-flag questions and responses

- *"Why leave Recharge?"* → "Looking for a role where the human/technical bridge is the job, not a side effect. I went to final round for Technical Partnerships Manager at Recharge — I want to do that work officially."
- *"You've been a frontend engineer — why do you think you'll be good at the SE job?"* → Taproom + Intellicom + final round for the partnerships role. Do not mention layoff.
- *"Our stack includes Java/C++ work — are you comfortable?"* → "My daily stack is JS/TS. I've shipped Python and PHP in production. For code I haven't written, I can read and debug it — what I'm bringing is the bridge skill, not another pair of hands on your core platform."
- *"What's your base comp expectation?"* → Use the negotiation script from `_profile.md`: "I was at $168K. I'm realistic about the market and open to the right fit — I'm targeting 6 figures, with flexibility for a role that's genuinely the right step."

### Story to anchor on in the interview

**The Taproom Shopify → vendor middleware story** is the single strongest SE anchor. Rehearse it STAR+R (already in report section F, story #1). This is the story that makes an interviewer say "OK, she's done partner integration work before." Lead with it when any variant of "tell me about a time you built an integration" comes up.

---

## 8. Questions to ask them

Pick 3-4 for the screener, hold the rest for later rounds.

**Screener (always fits):**
1. "What does the SE team look like today — first hire, or expanding an existing team?"
2. "What's the comp band for this role?"
3. "What's the split between pre-sales partner-facing work and post-launch partner health?"

**Hiring manager round:**
4. "With PSG Equity's backing post-$280M Series B, what does the 12-month GTM plan look like?"
5. "Where is the sharpest wedge Smart Refunds has against Allianz-dominated checkouts?"
6. "What does the eng/SE handoff look like — are SEs expected to read and modify partner-side code?"

**Technical round:**
7. "How do you handle state-by-state insurance licensing as new partners come online?"
8. "Refunds are financial; how do you handle webhook idempotency and partner-side retry storms?"

**Values / culture round:**
9. "Glassdoor mentions mid-career salary gaps and work-life balance under client deadlines. How has that evolved since the Series B?"
10. "How does Mark Kramer's Shopkick background show up in how the engineering org is run?"

---

## 9. What to study the night before

- Teak's pricing/case-study pages on [helloteak.com](https://helloteak.com/)
- A quick read on Shopkick's history (consumer mobile, checkout-adjacent, acquired by Trax)
- Allianz Ticket Protection vs Teak Smart Refunds — pricing, consumer UX, claims process
- Review story bank entries for The Taproom middleware, Recharge subscription widget, Gitwit a11y talk (apply "a" not "the")
