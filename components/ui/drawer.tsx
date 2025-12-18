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
  Root as Drawer,
  Trigger as DrawerTrigger,
  Portal as DrawerPortal,
  Overlay as DrawerOverlay,
  Title as DrawerTitle,
  Description as DrawerDescription,
  Close as DrawerClose
}

export function DrawerContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Portal>
      <Overlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
      <Content
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 mt-auto flex h-[80%] flex-col rounded-t-lg border bg-background p-6 shadow-lg sm:max-w-sm sm:rounded-lg sm:left-auto sm:top-0 sm:bottom-0 sm:h-full sm:w-full sm:translate-x-0 sm:right-0 sm:rounded-none sm:border-l",
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
