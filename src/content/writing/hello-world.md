---
title: 站点重建笔记
date: 2026-06-26
lang: zh
description: 用 Astro 重写个人站点，简化结构、对齐内容优先的初衷。
tags: ["Meta", "Astro"]
---

## 为什么要重做

旧站点把太多力气花在"做得花哨"上 —— 首屏一个 hero、几个 CTA、再加一个 newsletter 弹窗。结果就是写得越来越少，因为每次想发一篇都要先迈过"配封面图"的心理门槛。

这次的取舍很简单：**文章优先，没有 hero，没有动效，列表用分隔线而非卡片**，更像一份阅读清单。

## 技术选择

- 框架：[Astro](https://astro.build)。理由是默认零 JS、Markdown/MDX 原生、构建快。
- 内容：Content Collections，frontmatter 携带元数据，类型由 Zod schema 校验。
- 高亮：Shiki。
- 主题：CSS 变量驱动，浅深两套；切换通过 `data-theme` 属性，inline script 在渲染前定调避免闪烁。

```ts
// Theme bootstrap in <head>, runs before paint.
const stored = localStorage.getItem('theme');
const sysDark = matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.dataset.theme = stored || (sysDark ? 'dark' : 'light');
```

## News 板块

`News` 是这个站点稍微特别的部分 —— 它的内容由 [Hermes pipeline](https://github.com/SunstanYu/daily-tech-news) 每天自动产出。pipeline 抓取 X / Hacker News / 选定 RSS 源的当日内容，做一次 LLM 摘要 + 中文点评，然后写出 `src/content/news/YYYY-MM-DD.md`。

这样我每天只需要做一件事：在 commit 前快速过一眼 LLM 给的点评，必要时手改。

## 接下来

- 把 i18n 做完整（目前只做了"按语言筛选文章列表"）
- 给文章详情页加 webmention / 评论
- 把 accent 颜色换成更有个性的（蓝色是占位）
