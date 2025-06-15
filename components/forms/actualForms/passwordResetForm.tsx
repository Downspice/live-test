"use client";
import AuthPageHeaders from "@/components/authHeaders/authHeaders";
import InputWrapper from "../wrappers/InputWrapper";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  resetPasswordFormSchema,
  resetPasswordFormType,
} from "@/lib/schemas/passwordResetFormSchema";
import { allFormName } from "@/app/page";
import { useState } from "react";
import api from "@/lib/api-client";
import { toast } from "sonner";

export default function PasswordResetForm({
  setView,
  setResetPasswordDetails,
}: {
  setView: (x: allFormName) => void;
  setResetPasswordDetails: (x: resetPasswordFormType) => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(resetPasswordFormSchema),
  });

  const onSubmit = async (data: resetPasswordFormType) => {
    console.log("form data", data);
    setResetPasswordDetails(data);
    setView("resetpasswordsecond");
    // try {
    //   // const res = await api.post("login", data);
    //   const res = await fetch(
    //     "https://live-coding-test.onrender.com/auth/login",
    //     { method: "POST", body: data }
    //   );
    //   console.log("got this", res);
    //   toast(res.message);
    //   setIsSubmitting(false);
    // } catch (err) {
    //   console.log("this happed", err);
    //   toast(err.message);
    //   setIsSubmitting(false);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };
  return (
    <>
      <Form {...form}>
        <AuthPageHeaders
          title={"Reset Password"}
          optionalSubtext={
            <span>
              Enter the email address associated with your account. We’ll send
              you a code to reset your password.{" "}
            </span>
          }
        />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-1"
        >
          <InputWrapper
            control={form.control}
            name="email"
            type={"email"}
            value={""}
            placeholder="Email Address"
          />
          <Button className="w-full">Send me the code</Button>
          <span className="flex flex-row justify-center items-center">
            <Button
              variant={"link"}
              onClick={() => setView("userSignIn")}
              type="button"
            >
              Return to Login
            </Button>
          </span>
        </form>
      </Form>
    </>
  );
}
