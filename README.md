# personal-site

Charles 的个人站点。Astro + Markdown，文章优先，四个板块：Writing / Projects / News / About。

## Stack

- [Astro](https://astro.build) 5.x（静态产物）
- Content Collections（Zod schema 校验 frontmatter）
- Shiki 代码高亮
- CSS 变量驱动的浅 / 深主题（默认跟随系统、记忆偏好、无 FOUC）
- `@astrojs/rss` 给 Writing 和 News 各生成一个 feed

## Layout

- **桌面**（≥ 768px）：左侧 200px 固定侧栏（导航 + 标签 + 底部功能图标）
- **手机**（< 768px）：顶部一行导航 + 单栏内容

## 目录结构

```
src/
├── content/
│   ├── config.ts          # writing / projects / news 三个集合的 schema
│   ├── writing/           # 文章 .md/.mdx
│   ├── projects/          # 项目 .md/.mdx
│   └── news/              # YYYY-MM-DD.md 每日精选（由 Hermes pipeline 写入）
├── layouts/
├── components/
├── pages/
└── styles/theme.css       # 单一来源的主题变量
```

## 内容字段

详见 `src/content/config.ts`。要点：

- **writing**：`title` / `date` / `lang` ("zh"|"en") / `description` / `tags[]` / `draft`
- **projects**：`title` / `description` / `status` ("in-progress"|"done") / `stack[]` / `icon` (Tabler) / `repo` / `writeup` / `order`
- **news**：`date` / `title` / `summary` / `items[]`，其中 `items[i].source` ∈ `{x, hn, rss}` 决定来源标注样式：
  - `x` → 显示博主名 `author` + `@handle`
  - `hn` → 显示 `points`
  - `rss` → 显示 `site`

## 开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## 部署

静态产物，丢到 Vercel / Cloudflare Pages / Netlify / GitHub Pages 都行。`astro.config.mjs` 里的 `site` 字段记得改成正式域名（RSS link 用到）。

## News pipeline

News 板块的 `.md` 文件由 [SunstanYu/daily-tech-news](https://github.com/SunstanYu/daily-tech-news) 自动产出，不需要手写。
