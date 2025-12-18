'use client'

import {
  Root,
  List,
  Trigger,
  Content,
} from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

export function TabsRoot({
  className = '',
  ...props
}: {
  className?: string
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}) {
  return (
    <Root
      className={cn('flex flex-col space-y-2', className)}
      {...props}
    />
  )
}

export function TabsList({
  className = '',
  ...props
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <List
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
        className
      )}
