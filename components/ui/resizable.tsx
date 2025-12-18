'use client'

import {
  Root,
  Panel,
  Handle
} from '@radix-ui/react-resizable'
import { cn } from '@/lib/utils'

export const Resizable = Root
export const ResizablePanel = Panel

export function ResizableHandle({
  className = '',
  ...props
}: {
  className?: string
  [key: string]: any
}) {
  return (
    <Handle
      className={cn(
        'bg-border transition-colors hover:bg-muted data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5',
        className
      )}
      {...props}
    />
  )
}
