import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.email("Invalid email"),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
