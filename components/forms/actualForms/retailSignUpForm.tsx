"use client";
import { Form } from "@/components/ui/form";
import {
  retailSignUpFormSchema,
  retailSignUpFormType,
} from "@/lib/schemas/retailSignUpFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputWrapper from "../wrappers/InputWrapper";
import AuthPageHeaders from "@/components/authHeaders/authHeaders";
import { Button } from "@/components/ui/button";
import { allFormName } from "@/app/page";

export default function RetailSignUpForm({
  setView,
  setInitialData,
}: {
  setView: (x: allFormName) => void;
  setInitialData: (x: retailSignUpFormType) => void;
}) {
  const form = useForm({
    resolver: zodResolver(retailSignUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = form.watch("password");

  const isLongEnough = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumberOrSpecial = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);

  const onSubmit = (data: retailSignUpFormType) => {
    console.log("form data", data);
    setInitialData(data);
    setView("userSignUp");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
        <AuthPageHeaders
          title={"Sign Up"}
          optionalSubtext={
            <p>Enter your email address and password to create your account</p>
          }
        />
        <InputWrapper
          control={form.control}
          name="email"
          type={"email"}
          value={""}
          placeholder="Email Address"
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
          name="confirmPassword"
          placeholder="Confirm Password"
          type={"text"}
          value={""}
        />
        <Button className="w-full">Continue</Button>
        <p className="flex flex-row justify-center items-center">
          {" "}
          Already have an account?{" "}
          <Button variant={"link"} onClick={() => setView("userSignIn")}>
            Sign in
          </Button>
        </p>
      </form>
    </Form>
  );
}
