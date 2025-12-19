import { defineCollection, z } from 'astro:content'

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    lang: z.enum(['en', 'fr', 'ro', 'de', 'el']),
    image: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
})

const resourcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'fr', 'ro', 'de', 'el']),
    category: z.enum(['guide', 'report', 'tool', 'other']),
    fileUrl: z.string().optional(),
    fileType: z.string().optional(),
    fileSize: z.string().optional(),
    publishDate: z.date().optional()
  })
})

export const collections = {
  news: newsCollection,
  resources: resourcesCollection
}
