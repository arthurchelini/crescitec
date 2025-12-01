"use client"

import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type AlertProps = {
  children: React.ReactNode
  className?: string
}

export function Alert({ children, className }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        "relative w-full rounded-lg border border-border bg-background p-4 text-sm shadow-sm",
        className
      )}
    >
      {children}
    </div>
  )
}

export function AlertTitle({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="mb-1 font-medium leading-none tracking-tight">
      {children}
    </h5>
  )
}

export function AlertDescription({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-muted-foreground text-sm">
      {children}
    </div>
  )
}

export function AlertIcon() {
  return (
    <AlertCircle className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
  )
}
