import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type loginFormData = z.infer<typeof loginSchema>;
