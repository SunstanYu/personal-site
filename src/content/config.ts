import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['zh', 'en']).default('zh'),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['in-progress', 'done']).default('in-progress'),
    stack: z.array(z.string()).default([]),
    icon: z.string().optional(),
    repo: z.string().optional(),
    writeup: z.string().optional(),
    cover: z.string().optional(),
    order: z.number().optional(),
  }),
});

const newsItem = z.object({
  title: z.string(),
  url: z.string(),
  source: z.enum(['x', 'hn', 'rss']),
  author: z.string().optional(),
  handle: z.string().optional(),
  points: z.number().optional(),
  site: z.string().optional(),
  category: z.string().optional(),
  note: z.string().optional(),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    summary: z.string(),
    count: z.number().optional(),
    items: z.array(newsItem).default([]),
  }),
});

export const collections = { writing, projects, news };
