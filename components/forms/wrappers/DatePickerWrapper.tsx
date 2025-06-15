"use client"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import type { Control } from "react-hook-form"

interface DatePickerWrapperProps {
  control: Control<any>
  name: string
  label: string
  className?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  fromYear?: number
  toYear?: number
}

export default function DatePickerWrapper({
  control,
  name,
  label,
  className,
  placeholder,
  disabled = false,
  required = false,
  fromYear,
  toYear,
}: DatePickerWrapperProps) {
  const currentYear = new Date().getFullYear()
  const from = fromYear ? new Date(fromYear, 0, 1) : new Date(currentYear - 10, 0, 1)
  const to = toYear ? new Date(toYear, 11, 31) : new Date(currentYear + 10, 11, 31)

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>
            {required && <span className="text-red-500 mr-1">*</span>}
            {label}
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground",
                    className,
                  )}
                  disabled={disabled}
                >
                  {field.value ? format(field.value, "yyyy-MM-dd") : <span>{placeholder || "Select date"}</span>}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
                disabled={disabled}
                fromDate={from}
                toDate={to}
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
