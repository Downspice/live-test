import z from "zod";

export const passwordSecondFormSchema = z
  .object({ 
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
    newPassword: z.string(),
  })
  .refine((data) => data.password === data.newPassword, {
    message: "Passwords do not match",
    path: ["newPassword"], // Set error on newPassword field
  });

  export type passwordSecondFormType = z.infer<typeof passwordSecondFormSchema>
 