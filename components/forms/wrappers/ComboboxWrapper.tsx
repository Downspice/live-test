"use client"

import { CommandEmpty } from "@/components/ui/command"

import { useState } from "react"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Command, CommandList, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Control } from "react-hook-form"

interface ComboboxOption {
  value: string
  label: string
}

interface ComboboxWrapperProps {
  control: Control<any>
  name: string
  label: string
  options: ComboboxOption[]
  className?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  searchPlaceholder?: string
  emptyMessage?: string
}

export default function ComboboxWrapper({
  control,
  name,
  label,
  options,
  className,
  placeholder,
  disabled = false,
  required = false,
  searchPlaceholder = "Search...",
  emptyMessage = "No results found.",
}: ComboboxWrapperProps) {
  const [open, setOpen] = useState(false)

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
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  disabled={disabled}
                  className={cn("w-full justify-between", !field.value && "text-muted-foreground", className)}
                >
                  {field.value
                    ? options.find((option) => option.value === field.value)?.label
                    : placeholder || `Select ${label.toLowerCase()}`}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
              <Command>
                <CommandInput placeholder={searchPlaceholder} />
                <CommandList>
                  <CommandEmpty>{emptyMessage}</CommandEmpty>
                  <CommandGroup>
                    {options.map((option) => (
                      <CommandItem
                        key={option.value}
                        value={option.label}
                        onSelect={() => {
                          field.onChange(option.value)
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn("mr-2 h-4 w-4", option.value === field.value ? "opacity-100" : "opacity-0")}
                        />
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
