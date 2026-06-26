---
title: Hermes — 每日科技精选 pipeline
description: 抓 X / Hacker News / RSS 当日内容，LLM 摘要 + 中文点评，产出站点的 News 板块。
status: in-progress
stack: ["Python", "TwitterAPI.io", "OpenAI", "GitHub Actions"]
icon: news
repo: https://github.com/SunstanYu/daily-tech-news
order: 1
---

## 做什么

每天定时拉一遍：

- **X**：自己 following 的科技博主在过去 24h 的原创推文
- **Hacker News**：当天 top stories
- **选定 RSS 源**：DeepMind / Hugging Face / 乐鑫官方博客等

跑一遍排序 + 去重 + LLM 摘要，给每条加一个中文点评，最后写出 `src/content/news/YYYY-MM-DD.md` 进站点仓库 PR。

## 当前进度

- [x] X following 抓取（TwitterAPI.io，可配窗口）
- [x] HN top stories
- [x] RSS 拉取 + 48h 窗口 + 每源数量上限
- [x] LLM 摘要 + 点评
- [ ] 自动 PR 到站点仓库
- [ ] 失败回退 / 半量发布
