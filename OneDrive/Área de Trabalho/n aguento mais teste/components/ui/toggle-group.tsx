'use client'

import {
  Root,
  Item,
} from '@radix-ui/react-toggle-group'

import { cn } from '@/lib/utils'

export function ToggleGroup({
  className = '',
  type = 'single',
  ...props
}: {
  className?: string
  type?: 'single' | 'multiple'
  value?: string | string[]
  onValueChange?: (value: any) => void
  children: React.ReactNode
}) {
  return (
    <Root
      type={type}
      className={cn('inline-flex items-center justify-center gap-1', className)}
      {...props}
    />
  )
}

export function ToggleGroupItem({
  className = '',
  ...props
}: {
  className?: string
  value: string
  children: React.ReactNode
}) {
  return (
    <Item
      className={cn(
        'inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-1.5 ' +
        'text-sm font-medium text-muted-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground ' +
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ' +
        'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground',
        className
      )}
      {...props}
    />
  )
}
