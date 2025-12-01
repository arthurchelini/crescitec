'use client'

import { Root, Indicator } from '@radix-ui/react-progress'
import { cn } from '@/lib/utils'

export function Progress({
  value = 0,
  className = '',
  ...props
}: {
  value: number
  className?: string
}) {
  return (
    <Root
      value={value}
      className={cn(
        'relative h-4 w-full overflow-hidden rounded-full bg-muted',
        className
      )}
      {...props}
    >
      <Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </Root>
  )
}

