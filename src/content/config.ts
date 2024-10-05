import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.enum(['astro', 'react', 'nextjs', 'tailwind', 'css', 'html', 'typescript'])).optional(),
    publishDate: z.date()
  })
});

export const collections = {
  blog: blogCollection
};
