"use client"

import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close
} from "@radix-ui/react-dialog"

import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export {
  Root as Dialog,
  Trigger as DialogTrigger,
  Portal as DialogPortal,
  Overlay as DialogOverlay,
  Title as DialogTitle,
  Description as DialogDescription,
  Close as DialogClose
}

export function DialogContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Portal>
      <Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity" />
      <Content
        className={cn(
          "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
          className
        )}
      >
        {children}
        <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          <X className="h-4 w-4" />
        </Close>
      </Content>
    </Portal>
  )
}
