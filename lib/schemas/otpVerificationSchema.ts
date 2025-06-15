import z from "zod";

export const OTPFormSchema = z.object({
  otp: z.string().min(6,{message:"Should be six digits"}),
});

export type OTPFormType = z.infer<typeof OTPFormSchema>;
