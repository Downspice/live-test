"use client"

import { useState } from "react"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Check, ChevronsUpDown, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import type { Control } from "react-hook-form"

interface SelectOption {
  value: string
  label: string
  group?: string
}

interface MultiSelectWrapperProps {
  control: Control<any>
  name: string
  label: string
  options: SelectOption[]
  className?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  searchPlaceholder?: string
  emptyMessage?: string
}

export default function MultiSelectWrapper({
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
}: MultiSelectWrapperProps) {
  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  // Group options by their group property
  const groupedOptions: Record<string, SelectOption[]> = {}
  options.forEach((option) => {
    const group = option.group || "Options"
    if (!groupedOptions[group]) {
      groupedOptions[group] = []
    }
    groupedOptions[group].push(option)
  })

  // Filter options based on search value
  const filteredGroups: Record<string, SelectOption[]> = {}
  if (searchValue) {
    Object.entries(groupedOptions).forEach(([group, groupOptions]) => {
      const filtered = groupOptions.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()))
      if (filtered.length > 0) {
        filteredGroups[group] = filtered
      }
    })
  } else {
    Object.assign(filteredGroups, groupedOptions)
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selectedValues = field.value || []

        // Get the selected options with their labels
        const selectedOptions = selectedValues
          .map((value: string) => options.find((option) => option.value === value))
          .filter(Boolean)

        const clearAll = () => {
          field.onChange([])
        }

        return (
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
                    className={cn(
                      "w-full justify-between min-h-10",
                      !selectedValues.length && "text-muted-foreground",
                      className,
                    )}
                  >
                    <div className="flex flex-wrap gap-1 items-center">
                      {selectedOptions.length > 0 ? (
                        <>
                          {selectedOptions.map((option: any) => (
                            <Badge key={option.value} variant="secondary" className="mr-1 px-1 py-0">
                              {option.label}
                              <X
                                className="ml-1 h-3 w-3 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  const newValues = selectedValues.filter((value: string) => value !== option.value)
                                  field.onChange(newValues)
                                }}
                              />
                            </Badge>
                          ))}
                        </>
                      ) : (
                        <span>{placeholder || `Select ${label.toLowerCase()}`}</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      {selectedValues.length > 0 && (
                        <X
                          className="mr-2 h-4 w-4 cursor-pointer hover:text-destructive"
                          onClick={(e) => {
                            e.stopPropagation()
                            clearAll()
                          }}
                        />
                      )}
                      <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
                    </div>
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0">
                <Command>
                  <CommandInput placeholder={searchPlaceholder} value={searchValue} onValueChange={setSearchValue} />
                  <CommandList>
                    <CommandEmpty>{emptyMessage}</CommandEmpty>
                    {Object.entries(filteredGroups).map(([group, groupOptions]) => (
                      <CommandGroup key={group} heading={group}>
                        {groupOptions.map((option) => (
                          <CommandItem
                            key={option.value}
                            value={option.label}
                            onSelect={() => {
                              const currentValues = field.value || []
                              const newValues = currentValues.includes(option.value)
                                ? currentValues.filter((value: string) => value !== option.value)
                                : [...currentValues, option.value]
                              field.onChange(newValues)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedValues.includes(option.value) ? "opacity-100" : "opacity-0",
                              )}
                            />
                            {option.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    ))}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
