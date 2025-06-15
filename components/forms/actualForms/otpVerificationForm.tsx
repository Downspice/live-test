"use client";
import AuthPageHeaders from "@/components/authHeaders/authHeaders";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
 import {
  OTPFormSchema,
  OTPFormType,
} from "@/lib/schemas/otpVerificationSchema";
import OTPInputWrapper from "../wrappers/OTPInputWrapper";
import { allFormName } from "@/app/page";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useState } from "react";

export default function OTPVerification({
  setView,
  resetPasswordDetails,
}: {
  setView: (x: allFormName) => void;
  resetPasswordDetails: any;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(OTPFormSchema),
  });

  const onSubmit = async (data: OTPFormType) => {
    console.log("form data", data);
    const allData = { ...resetPasswordDetails, ...data };
    console.log("äll", allData);
    const { otp, newPassword, email, ...rest } = allData;
    const payload = { otp, newPassword, email };

    try {
      const res = await fetch(
        "https://live-coding-test.onrender.com/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      console.log("got this", res);
      toast(res.message);
      setIsSubmitting(false);
      setView('success')
    } catch (err) {
      console.log("this happed", err);
      toast(err.message);

      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Form {...form}>
        <AuthPageHeaders
          title={"Verify Your Email"}
          optionalSubtext={
            <p className="text-muted-foreground">
              Verification code sent to{" "}
              <span className="font-bold">{resetPasswordDetails.email}</span>
              sec.admin@abccompany.org
            </p>
          }
        />
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-1"
        >
          {" "}
          <OTPInputWrapper control={form.control} name="otp" />
          <Button className="w-full">Send me the code</Button>
          <span className="flex flex-row justify-center items-center">
            <Button variant={"link"} disabled={isSubmitting}>
              Resend the code {isSubmitting ?? <Loader />}
            </Button>
          </span>
        </form>
      </Form>
    </>
  );
}
