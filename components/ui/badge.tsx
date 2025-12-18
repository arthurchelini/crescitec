"use client"

import { cn } from "@/lib/utils"

type BadgeProps = {
  children: React.ReactNode
  className?: string
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

  const variants = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    destructive: "bg-destructive text-destructive-foreground",
    outline: "border border-border text-foreground"
  }

  return (
    <span className={cn(base, variants[variant], className)}>
      {children}
    </span>
  )
}
