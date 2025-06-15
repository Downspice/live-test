import z from "zod";

export const userSignUpFormSchema = z
  .object({
    firstName: z.string().min(1,{message:'First name is required'}),
    lastName: z.string().min(1,{message:'Last name is required'}),
    address: z.string().min(1,{message:'Address name is required'}),
    countryCode:z.string(),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" })
      .regex(/^\+?[0-9]{10,15}$/, {
        message: "Phone number must be valid (e.g. +233123456789 or 0551234567)",
      }),
})
   ;
export type userSignUpFormType = z.infer<typeof userSignUpFormSchema>;

 