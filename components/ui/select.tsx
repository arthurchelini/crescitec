'use client'

import {
  Root,
  Group,
  Value,
  Trigger,
  Content,
  Label,
  Item,
  ItemText,
  ScrollUpButton,
  ScrollDownButton,
  Viewport,
  Portal
} from '@radix-ui/react-select'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Select = Root
export const SelectGroup = Group
export const SelectValue = Value
export const SelectLabel = Label

export function SelectTrigger(props: any) {
  return (
    <Trigger
      className={cn(
        'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ' +
        'ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring ' +
        'disabled:cursor-not-allowed disabled:opacity-50',
        props.className
      )}
      {...props}
    >
      <SelectValue placeholder="Selecione uma opção" />
      <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
    </Trigger>
  )
}

export function SelectContent(props: any) {
  return (
    <Portal>
      <Content
        className={cn(
          'relative z-50 max-h-64 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md',
          props.className
        )}
        {...props}
      >
        <ScrollUpButton className="flex items-center justify-center py-1 bg-muted">
          <ChevronUp className="h-4 w-4" />
        </ScrollUpButton>
        <Viewport className="p-1">
          {props.children}
        </Viewport>
        <ScrollDownButton className="flex items-center justify-center py-1 bg-muted">
          <ChevronDown className="h-4 w-4" />
        </ScrollDownButton>
      </Content>
    </Portal>
  )
}

export function SelectItem({
  children,
  className = '',
  ...props
}: any) {
  return (
    <Item
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none ' +
        'focus:bg-accent focus:text-accent-foreground',
        className
      )}
      {...props}
    >
      <ItemText>{children}</ItemText>
    </Item>
  )
}
