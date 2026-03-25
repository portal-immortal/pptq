import { defineCollection, z } from 'astro:content';

const berita = defineCollection({
  type: 'content',
  schema: z.object({
    title:   z.string(),
    date:    z.date(),
    image:   z.string(),
    excerpt: z.string(),
    author:  z.string().default('Admin Pesantren'),
    tags:    z.array(z.string()).default([]),
  }),
});

export const collections = { berita };
