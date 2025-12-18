'use client'

import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Header,
  Footer,
  Title,
  Description,
  Close,
} from '@radix-ui/react-dialog'

import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Sheet = Root
export const SheetTrigger = Trigger
export const SheetHeader = Header
export const SheetFooter = Footer
export const SheetTitle = Title
export const SheetDescription = Description

export function SheetClose(props: any) {
  return (
    <Close
      className={cn(
        'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 ' +
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none',
        props.className
      )}
      {...props}
    >
      <X className="h-4 w-4" />
    </Close>
  )
}

export function SheetContent({
  side = 'right',
  className = '',
  ...props
}: {
  side?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
  children?: React.ReactNode
}) {
  const sideClass = {
    top: 'inset-x-0 top-0 h-1/3',
    bottom: 'inset-x-0 bottom-0 h-1/3',
    left: 'inset-y-0 left-0 w-80',
    right: 'inset-y-0 right-0 w-80',
  }[side]

  return (
    <Portal>
      <Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity" />
      <Content
        className={cn(
          'fixed z-50 bg-background p-6 shadow-lg transition-transform ease-in-out animate-in slide-in-from-right',
          sideClass,
          className
        )}
        {...props}
      />
    </Portal>
  )
}
