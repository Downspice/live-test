"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import type { Control } from "react-hook-form";

interface OTPInputWrapperProps {
  control: Control<any>;
  name: string;
  label?: string;
  description?: string;
  maxLength?: number;
  required?: boolean;
  warning?: string;
  disabled?: boolean;
}

export default function OTPInputWrapper({
  control,
  name,
  label = "One-Time Password",
  description,
  maxLength = 6,
  required = false,
  warning,
  disabled = false,
}: OTPInputWrapperProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <FormItem>
            <FormLabel>
              {required && <span className="text-red-500 mr-1">*</span>}
              {label}
            </FormLabel>
            <FormControl>
              <InputOTP maxLength={maxLength} {...field} disabled={disabled}>
                <InputOTPGroup className="flex items-center gap-1">
                  {Array.from({ length: maxLength }).map((_, index) => (
                    <div key={index} className="flex items-center">
                      <InputOTPSlot index={index} className="rounded-sm"/>
                       
                    </div>
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
          {warning && <span className="font-light">{warning}</span>}
        </>
      )}
    />
  );
}
