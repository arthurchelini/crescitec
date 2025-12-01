'use client'

import {
  Root,
  Track,
  Range,
  Thumb
} from '@radix-ui/react-slider'
import { cn } from '@/lib/utils'

export function Slider({
  className = '',
  ...props
}: {
  className?: string
  defaultValue?: number[]
  value?: number[]
  max?: number
  min?: number
  step?: number
  disabled?: boolean
  onValueChange?: (value: number[]) => void
}) {
  return (
    <Root
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className
      )}
      {...props}
    >
      <Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-muted">
        <Range className="absolute h-full bg-primary" />
      </Track>
      <Thumb className="block h-4 w-4 rounded-full border border-primary bg-background shadow transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </Root>
  )
}
