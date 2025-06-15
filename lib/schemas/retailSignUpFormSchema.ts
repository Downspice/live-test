import z from "zod";

export const retailSignUpFormSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .refine((val) => /[A-Z]/.test(val), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((val) => /[0-9!@#$%^&*(),.?":{}|<>]/.test(val), {
        message:
          "Password must contain at least one number or special character",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Set error on confirmPassword field
  });

  export type retailSignUpFormType = z.infer<typeof retailSignUpFormSchema>
 