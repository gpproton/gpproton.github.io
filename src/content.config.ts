import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ base: "./blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

export const collections = { blog };
