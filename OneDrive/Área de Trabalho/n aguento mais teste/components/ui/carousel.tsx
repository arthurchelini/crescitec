"use client"

import { cn } from "@/lib/utils"

type CarouselProps = {
  children: React.ReactNode
  className?: string
}

export function Carousel({ children, className }: CarouselProps) {
  return (
    <div
      className={cn(
        "flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-2 px-1",
        className
      )}
    >
      {children}
    </div>
  )
}
