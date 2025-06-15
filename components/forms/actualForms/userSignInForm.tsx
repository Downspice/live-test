"use client";
import AuthPageHeaders from "@/components/authHeaders/authHeaders";
import InputWrapper from "../wrappers/InputWrapper";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  userSignInFormSchema,
  userSignInFormType,
} from "@/lib/schemas/userSignInFormScema";
import { allFormName } from "@/app/page";
import { toast } from "sonner";
import { useState } from "react";
import { Loader } from "lucide-react";

export default function UserSignInForm({
  setView,
}: {
  setView: (x: allFormName) => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(userSignInFormSchema),
  });

  const onSubmit = async (data: userSignInFormType) => {
    console.log("form data", data);
    try {
      // const res = await api.post("login", data);

      const res = await fetch(
        "https://live-coding-test.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("got this", res);
      const response = res.json();
      toast(response.message);
      setIsSubmitting(false);
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
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-1"
        >
          <AuthPageHeaders
            title={"Sign In"}
            optionalSubtext={
              <span>
                New to Microgardens?{" "}
                <Button variant={"link"} onClick={() => setView('retailerSignUp')}>
                  Sign up here
                </Button>{" "}
              </span>
            }
          />
          <span className="text-[0.6rem]">Enter your email and password to start shopping</span>
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
          />
          <Button className="w-full" disabled={isSubmitting}>
            Sign In {isSubmitting ?? <Loader />}
          </Button>
          <div className="flex flex-row justify-start ">
            
            <Button variant={"link"} onClick={() => setView('resetpassword')}>
              Forgot your Password ?
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
