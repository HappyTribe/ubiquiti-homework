import { z } from "zod";

export const MinimalDeviceSchema = z.object({
  id: z.string(),
  product: z.object({
    name: z.string(),
  }),

  line: z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
    })
    .optional(),

  shortnames: z.array(z.string()),

  images: z
    .object({
      default: z.string().optional(),
    })
    .optional(),
});

export type TMinimalDevice = z.infer<typeof MinimalDeviceSchema>;
