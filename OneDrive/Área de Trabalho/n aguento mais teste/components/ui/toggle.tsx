'use client'

import { Toggle as TogglePrimitive } from '@radix-ui/react-toggle'
import { cn } from '@/lib/utils'

export type ToggleProps = {
  pressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  className?: string
  ariaLabel?: string
  children?: React.ReactNode
}

export function Toggle({
  pressed,
  onPressedChange,
  className = '',
  ariaLabel,
  children,
}: ToggleProps) {
  return (
    <TogglePrimitive
      className={cn(
        'inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-1.5 text-sm font-medium ' +
        'shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none ' +
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ' +
        'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground',
        className
      )}
      pressed={pressed}
      onPressedChange={onPressedChange}
      aria-label={ariaLabel}
    >
      {children}
    </TogglePrimitive>
  )
}
