"use client";
import OTPVerification from "@/components/forms/actualForms/otpVerificationForm";
import PasswordFormSecond from "@/components/forms/actualForms/passwordFormSecond";
import PasswordResetForm from "@/components/forms/actualForms/passwordResetForm";
import RetailSignUpForm from "@/components/forms/actualForms/retailSignUpForm";
import UserSignInForm from "@/components/forms/actualForms/userSignInForm";
import UserSignUpForm from "@/components/forms/actualForms/userSignUpForm";
import AccountCreationSuccess from "@/components/forms/formSuccessScreens/accountCreationSuccess";
import Image from "next/image";
import { useState } from "react";

export type allFormName =
  | "retailerSignUp"
  | "userSignUp"
  | "resetpassword"
  | "OTP"
  | "success"
  | "userSignIn"
  | "resetpassword"
  | "resetpasswordsecond";
export default function Home() {
  const [currentForm, setCurrentForm] = useState<allFormName>("retailerSignUp");
  const [emailAndPassword, setEmailAndPassword] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [resetPasswordDetails, setResetAllPasswordDetails] = useState({});

  const setResetPasswordDetails = (data: any) => {
    setResetAllPasswordDetails({ ...resetPasswordDetails, ...data });
  };

  const setCurrentView = (formName: allFormName) => {
    console.log(formName);
    setCurrentForm(formName);
  };

  return (
    <article className="flex h-dvh sm:grid sm:grid-cols-2">
      <section
        className="flex w-full px-4 flex-col 
      items-start sm:col-span-1 sm:px-20 "
      >
        {currentForm === "retailerSignUp" ? (
          <RetailSignUpForm
            setInitialData={(e) => setEmailAndPassword(e)}
            setView={(e) => setCurrentView(e)}
          />
        ) : (
          ""
        )}
        {currentForm === "userSignUp" ? (
          <UserSignUpForm
            emailPassword={emailAndPassword}
            setView={(e) => setCurrentView(e)}
          />
        ) : (
          ""
        )}
        {currentForm == "success" ? (
          <AccountCreationSuccess setView={(e) => setCurrentView(e)} />
        ) : (
          ""
        )}
        {currentForm == "userSignIn" ? (
          <UserSignInForm setView={(e) => setCurrentView(e)} />
        ) : (
          ""
        )}
        {currentForm === "resetpassword" ? (
          <PasswordResetForm
            setView={(e) => setCurrentView(e)}
            setResetPasswordDetails={(e) => setResetPasswordDetails(e)}
          />
        ) : (
          ""
        )}

        {currentForm === "resetpasswordsecond" ? (
          <PasswordFormSecond
            setResetPasswordDetails={(e) => setResetPasswordDetails(e)}
            setView={(e) => setCurrentView(e)}
          />
        ) : (
          ""
        )}

        {currentForm === "OTP" ? (
          <OTPVerification
            setView={(e) => setCurrentView(e)}
            resetPasswordDetails={resetPasswordDetails}
          />
        ) : (
          ""
        )}
      </section>

      <section className="hidden  sm:flex sm:col-span-1">
        <Image
          src={"/authImage.jpg"}
          width={1000}
          height={1000}
          alt="authImage"
        />
      </section>
    </article>
  );
}
