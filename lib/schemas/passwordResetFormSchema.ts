import z from "zod";

export const resetPasswordFormSchema = z
  .object({
    email: z.string().email(),});

export type resetPasswordFormType = z.infer<typeof resetPasswordFormSchema>;
