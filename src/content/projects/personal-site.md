---
title: 这个站点
description: Astro 搭的个人站，Writing / Projects / News / About 四板块，深浅主题，双语支持。
status: done
stack: ["Astro", "TypeScript", "CSS Variables"]
icon: world
repo: https://github.com/SunstanYu/personal-site
order: 3
---

## 设计原则

- **文章优先**：首页 = Writing 列表，不放 hero / CTA
- **安静**：列表用 0.5px 分隔线，不用卡片
- **一处可换皮**：accent 是单一 CSS 变量

## 结构

```
src/
├── content/
│   ├── writing/    # .md/.mdx 文章
│   ├── projects/   # 项目卡片 + 详情页
│   └── news/       # YYYY-MM-DD.md 每日精选
├── components/
├── layouts/
└── pages/
```

详细规格见 [spec 文档](https://github.com/SunstanYu/personal-site)。
