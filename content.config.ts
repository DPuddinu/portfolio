import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const schema = z.object({
	title: z.string(),
	description: z.string(),
	publishDate: z.coerce.date(),
	tags: z.array(z.string()),
	slug: z.string(),
	image: z.string().optional(),
	short: z.string()
});


const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema
});

const til = defineCollection({
	loader: glob({ base: './src/content/til', pattern: '**/*.{md,mdx}' }),
	schema: schema.extend({
		subject: z.string(),
	})
});

export const collections = { blog, til };
