"use client"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import type { Control } from "react-hook-form"

interface CheckboxOption {
  id: string
  label: string
  description?: string
}

interface CheckboxWrapperProps {
  control: Control<any>
  name: string
  label: string
  options: CheckboxOption[]
  disabled?: boolean
  required?: boolean
}

export default function CheckboxWrapper({
  control,
  name,
  label,
  options,
  disabled = false,
  required = false,
}: CheckboxWrapperProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">
              {required && <span className="text-red-500 mr-1">*</span>}
              {label}
            </FormLabel>
          </div>
          {options.map((option) => (
            <FormField
              key={option.id}
              control={control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem key={option.id} className="flex flex-row items-start space-x-3 space-y-0 mb-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(option.id)}
                        onCheckedChange={(checked) => {
                          const currentValues = field.value || []
                          const newValues = checked
                            ? [...currentValues, option.id]
                            : currentValues.filter((value: string) => value !== option.id)
                          field.onChange(newValues)
                        }}
                        disabled={disabled}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-normal">{option.label}</FormLabel>
                      {option.description && <p className="text-sm text-muted-foreground">{option.description}</p>}
                    </div>
                  </FormItem>
                )
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
