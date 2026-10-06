import { z } from "zod";

/*
 * Frontmatter validation for resources/content/**.md (Part 9.1).
 * Fields: title (60 max), description (155 max), url, h1, badge,
 * about, entities, reviewer, lastReviewed, faqs, related, posts,
 * schema, plus blog-post fields. Extra keys are tolerated (loose).
 */

export const aboutSchema = z.object({
  type: z.enum([
    "MedicalCondition",
    "MedicalProcedure",
    "MedicalTherapy",
    "MedicalTest",
    "DiagnosticProcedure",
    "TherapeuticProcedure",
  ]),
  name: z.string(),
  alternateName: z.array(z.string()).optional(),
});

export const frontmatterSchema = z.looseObject({
  title: z.string().max(60).optional(),
  description: z.string().max(155).optional(),
  url: z.string().optional(),
  h1: z.string().optional(),
  badge: z.string().optional(),
  about: aboutSchema.optional(),
  related: z.array(z.string()).optional(),
  posts: z.array(z.string()).optional(),
  schema: z.array(z.string()).optional(),
  entities: z.array(z.string()).optional(),
  reviewer: z.string().optional(),
  lastReviewed: z.string().optional(),
  category: z.string().optional(),
  author: z.string().optional(),
  datePublished: z.string().optional(),
  dateModified: z.string().optional(),
  readingTime: z.number().optional(),
  robots: z.string().optional(),
});

export type Frontmatter = z.infer<typeof frontmatterSchema>;
