"use client"

import {
  Root as Accordion,
  Item,
  Header,
  Trigger,
  Content
} from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export {
  Accordion
}

export function AccordionItem({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <Item value={value} className="border-b">
      {children}
    </Item>
  )
}

export function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return (
    <Header className="flex">
      <Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          "[&[data-state=open]>svg]:rotate-180"
        )}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </Trigger>
    </Header>
  )
}

export function AccordionContent({ children }: { children: React.ReactNode }) {
  return (
    <Content
      className={cn(
        "overflow-hidden text-sm transition-all",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      )}
    >
      {children}
    </Content>
  )
}
