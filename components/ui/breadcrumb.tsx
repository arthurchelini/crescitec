"use client"

import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type BreadcrumbProps = {
  children: React.ReactNode
  className?: string
}

export function Breadcrumb({ children, className }: BreadcrumbProps) {
  return (
    <nav className={cn("flex", className)} aria-label="breadcrumb">
      <ol className="flex items-center space-x-2">{children}</ol>
    </nav>
  )
}

type BreadcrumbItemProps = {
  children: React.ReactNode
  className?: string
}

export function BreadcrumbItem({ children, className }: BreadcrumbItemProps) {
  return (
    <li className={cn("inline-flex items-center gap-1 text-sm", className)}>
      {children}
    </li>
  )
}

export function BreadcrumbSeparator({ className }: { className?: string }) {
  return (
    <li role="presentation" aria-hidden="true">
      <ChevronRight className={cn("h-4 w-4 text-muted-foreground", className)} />
    </li>
  )
}

export function BreadcrumbLink({
  href,
  children,
  className
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      className={cn("hover:underline text-muted-foreground", className)}
    >
      {children}
    </a>
  )
}
