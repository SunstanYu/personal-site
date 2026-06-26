---
title: "Agents in 2026: what actually shipped"
date: 2026-05-12
lang: en
description: A year-end look at which agent patterns moved from demos into production.
tags: ["AI Agents", "Automation"]
---

A short, opinionated review of the agent patterns that actually shipped this year — and the ones that quietly died.

## What shipped

**Tool-using single-shot agents.** The boring win: a single model call with a tool schema, run inside a small harness that retries on bad JSON. Most "AI features" inside SaaS products are this, dressed up.

**Long-running background workers.** Email triage, PR review, deal-room research. They run while you sleep and surface a digest. Token costs are amortized over real work output, so the unit economics finally make sense.

**Browser-controlled scrapers as research tools.** Not "browse the web for me" — that's still flaky — but "extract this specific field from these 80 listings" is solid.

## What didn't

**Multi-agent committees.** A planner agent talking to three specialist agents about the same task burned tokens without producing better outputs than a single capable model with the right tools. The "society of mind" framing was beautiful and mostly didn't pan out for tasks under ~10 minutes.

**Autonomy theater.** Agents that "think" for 20 seconds and then return a one-line response. Users couldn't tell whether the latency was buying anything; trust eroded fast.

## The pattern underneath

The wins all share a shape: **the agent does narrow work the user already understood how to evaluate**. Triage, review, extraction. The losses came when the agent was asked to also define the task.

This shouldn't be surprising — it's the same lesson every wave of automation has taught — but it took the 2025 hype cycle to make it land.
