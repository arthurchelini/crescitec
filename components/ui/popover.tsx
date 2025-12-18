'use client'

import {
  Root,
  Trigger,
  Portal,
  Content as PopoverContentPrimitive
} from '@radix-ui/react-popover'
import { cn } from '@/lib/utils'

export const Popover = Root
export const PopoverTrigger = Trigger

export function PopoverContent({
  className = '',
  align = 'center',
  sideOffset = 4,
  ...props
}: {
  className?: string
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  children?: React.ReactNode
}) {
  return (
    <Portal>
      <PopoverContentPrimitive
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95',
          className
        )}
        {...props}
      />
    </Portal>
  )
}
