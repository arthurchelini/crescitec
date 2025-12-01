'use client'

import {
  Root,
  Viewport,
  Scrollbar,
  Thumb,
  Corner
} from '@radix-ui/react-scroll-area'
import { cn } from '@/lib/utils'

export function ScrollArea({
  className = '',
  children,
  ...props
}: {
  className?: string
  children: React.ReactNode
  [key: string]: any
}) {
  return (
    <Root className={cn('relative overflow-hidden', className)} {...props}>
      <Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </Viewport>
      <Scrollbar orientation="vertical" className="flex select-none touch-none p-0.5 bg-transparent">
        <Thumb className="relative flex-1 rounded-full bg-border" />
      </Scrollbar>
      <Scrollbar orientation="horizontal" className="flex select-none touch-none p-0.5 bg-transparent">
        <Thumb className="relative flex-1 rounded-full bg-border" />
      </Scrollbar>
      <Corner className="bg-muted" />
    </Root>
  )
}
