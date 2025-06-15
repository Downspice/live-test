"use client";
import { Form } from "@/components/ui/form";
import {
  retailSignUpFormSchema,
  retailSignUpFormType,
} from "@/lib/schemas/retailSignUpFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputWrapper from "../wrappers/InputWrapper";
import z from "zod";
import AuthPageHeaders from "@/components/authHeaders/authHeaders";
import { Button } from "@/components/ui/button";
import { allFormName } from "@/app/page";
import { passwordSecondFormSchema, passwordSecondFormType } from "@/lib/schemas/passwordSecondFormSchema";

export default function PasswordFormSecond({
  setView,
  setResetPasswordDetails,
}: {
  setView: (x: allFormName) => void;
  setResetPasswordDetails: (x: passwordSecondFormType) => void;
}) {
  const form = useForm({
    resolver: zodResolver(passwordSecondFormSchema),
    defaultValues: { 
      password: "",
      newPassword: "",
    },
  });

  const password = form.watch("password");

  const isLongEnough = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumberOrSpecial = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);

  const onSubmit = (data: passwordSecondFormType) => {
    console.log("form data", data);
    setResetPasswordDetails(data);
    setView('OTP');
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
        <AuthPageHeaders
          title={"Sign Up"}
          optionalSubtext={
            <p>Your password should have at least 6 characters</p>
          }
        />
        <InputWrapper
          control={form.control}
          name="password"
          type={"text"}
          placeholder="Password"
          value={""}
        >
          <ul className="text-sm mt-2 space-y-1 text-gray-600">
            <li className={isLongEnough ? "text-green-600" : "text-red-500"}>
              {isLongEnough ? "✔" : "✖"} 8 characters or more
            </li>
            <li className={hasUppercase ? "text-green-600" : "text-red-500"}>
              {hasUppercase ? "✔" : "✖"} At least one uppercase letter
            </li>
            <li
              className={hasNumberOrSpecial ? "text-green-600" : "text-red-500"}
            >
              {hasNumberOrSpecial ? "✔" : "✖"} One number or special character
            </li>
          </ul>
        </InputWrapper>
        <InputWrapper
          control={form.control}
          name="newPassword"
          placeholder="Confirm Password"
          type={"text"}
          value={""}
        />
        <Button className="w-full">Submit</Button>
      </form>
    </Form>
  );
}
