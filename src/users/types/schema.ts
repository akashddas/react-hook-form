import { z } from "zod";
import { patterns } from "../../constants";

export const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "E-mail is required")
    .refine((text) => patterns.email.test(text), "E-mail is not valid"),
});

export type Schema = z.infer<typeof schema>;
