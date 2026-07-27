import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    videoUrl: z.string(),
    videoId: z.string(),
    thumbnail: z.string(),
    description: z.string(),
  }),
});

export const collections = { work };