'use client'

import {
  Root,
  Menu,
  Trigger,
  Content,
  Item,
  Label,
  Separator,
  Portal,
  CheckboxItem,
  RadioItem,
  RadioGroup,
} from '@radix-ui/react-menubar'

import { Check, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Menubar = Root
export const MenubarMenu = Menu

export function MenubarTrigger(props: any) {
  return (
    <Trigger
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none',
        'hover:bg-accent hover:text-accent-foreground focus:bg-accent data-[state=open]:bg-accent',
        props.className
      )}
      {...props}
    />
  )
}

export function MenubarContent(props: any) {
  return (
    <Portal>
      <Content
        className={cn(
          'z-50 min-w-[12rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-top-1',
          props.className
        )}
        {...props}
      />
    </Portal>
  )
}

export function MenubarItem(props: any) {
  return (
    <Item
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
        'focus:bg-accent focus:text-accent-foreground',
        props.className
      )}
      {...props}
    />
  )
}

export function MenubarCheckboxItem({ checked, children, ...props }: any) {
  return (
    <CheckboxItem
      checked={checked}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent',
        props.className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {checked && <Check className="h-4 w-4" strokeWidth={3} />}
      </span>
      {children}
    </CheckboxItem>
  )
}

export function MenubarRadioItem({ children, ...props }: any) {
  return (
    <RadioItem
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent',
        props.className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Circle className="h-2 w-2 fill-current" />
      </span>
      {children}
    </RadioItem>
  )
}

export const MenubarRadioGroup = RadioGroup

export function MenubarLabel(props: any) {
  return (
    <Label
      className={cn('px-2 py-1.5 text-sm font-semibold', props.className)}
      {...props}
    />
  )
}

export function MenubarSeparator(props: any) {
  return (
    <Separator
      className={cn('-mx-1 my-1 h-px bg-muted', props.className)}
      {...props}
    />
  )
}

export function MenubarShortcut(props: any) {
  return (
    <span className={cn('ml-auto text-xs tracking-widest opacity-60', props.className)} {...props} />
  )
}
