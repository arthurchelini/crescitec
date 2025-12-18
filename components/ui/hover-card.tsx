'use client'

import {
  Root as HoverCard,
  Trigger as HoverCardTrigger,
  Portal as HoverCardPortal,
  Content as HoverCardContentPrimitive,
} from '@radix-ui/react-hover-card'
import { cn } from '@/lib/utils'

export function HoverCardContent({
  className = '',
  sideOffset = 4,
  align = 'center',
  ...props
}: {
  className?: string
  sideOffset?: number
  align?: 'center' | 'start' | 'end'
  children?: React.ReactNode
}) {
  return (
    <HoverCardPortal>
      <HoverCardContentPrimitive
        sideOffset={sideOffset}
        align={align}
        className={cn(
          'z-50 w-64 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95',
          className
        )}
        {...props}
      />
    </HoverCardPortal>
  )
}

export {
  HoverCard,
  HoverCardTrigger,
}
