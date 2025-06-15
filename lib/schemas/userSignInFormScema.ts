import z from "zod";

export const userSignInFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => /[0-9!@#$%^&*(),.?":{}|<>]/.test(val), {
      message: "Password must contain at least one number or special character",
    }),
});

export type userSignInFormType = z.infer<typeof userSignInFormSchema>;
 
