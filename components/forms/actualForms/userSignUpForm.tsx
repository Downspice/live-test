"use client";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputWrapper from "../wrappers/InputWrapper";
 import AuthPageHeaders from "@/components/authHeaders/authHeaders";
import { Button } from "@/components/ui/button";
import {
  userSignUpFormSchema,
  userSignUpFormType,
} from "@/lib/schemas/userSignUpFormSchema";
import { allFormName } from "@/app/page";
import { retailSignUpFormType } from "@/lib/schemas/retailSignUpFormSchema";
 import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UserSignUpForm({
  setView,
  emailPassword,
}: {
  setView: (x: allFormName) => void;
  emailPassword: retailSignUpFormType;
}) {
    const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(userSignUpFormSchema),
  });

  console.log(emailPassword);
  const onSubmit = async (data: userSignUpFormType) => {

    setIsSubmitting(true);

    console.log("form data", data);
    data.phone = data.countryCode + data.phone;
    const payload = { ...data, "role": "user", ...emailPassword };
    const { countryCode, ...rest } = payload;  
    const newPayload = { ...rest};
    console.log("the payload", newPayload);
    try {
      const res =  await fetch(
        "https://live-coding-test.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPayload),
        }
      );
      console.log("got this", res);
      toast(res.message);
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" w-full space-y-1"
      >
        <AuthPageHeaders title={"Sign Up"} />
        <InputWrapper
          control={form.control}
          name="firstName"
          type={"text"}
          value={""}
          placeholder="First name"
        />
        <InputWrapper
          control={form.control}
          name="lastName"
          type={"text"}
          placeholder="Last Name"
          value={""}
        />
        <InputWrapper
          control={form.control}
          name="address"
          placeholder="Address"
          type={"text"}
          value={""}
        />
        <InputWrapper
          control={form.control}
          name="countryCode"
          placeholder="countryCode"
          type={"text"}
          value={""}
        />
        <InputWrapper
          control={form.control}
          name="phone"
          placeholder="Phone Number"
          type={"number"}
          value={""}
        />
        <Button className="w-full" disabled={isSubmitting}>
          {" "}
          Continue {isSubmitting ?? <LoaderCircle />}
        </Button>
        <span className="flex flex-row justify-center items-center">
          <Button variant={"link"}onClick={() => router.push("/store")} >I will do this later</Button>
        </span>
      </form>
    </Form>
  );
}
