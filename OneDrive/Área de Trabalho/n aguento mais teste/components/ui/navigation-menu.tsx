'use client'

import {
  Root,
  List,
  Item,
  Trigger,
  Content,
  Link,
  Indicator,
  Viewport,
} from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const NavigationMenu = Root
export const NavigationMenuList = List
export const NavigationMenuItem = Item
export const NavigationMenuLink = Link
export const NavigationMenuViewport = Viewport
export const NavigationMenuIndicator = (props: any) => (
  <Indicator
    className={cn(
      'top-full z-50 flex h-1.5 items-end justify-center overflow-hidden transition-[width,transform] duration-300',
      props.className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </Indicator>
)

export function NavigationMenuTrigger(props: any) {
  return (
    <Trigger
      className={cn(
        navigationMenuTriggerStyle(),
        'group',
        props.className
      )}
      {...props}
    />
  )
}

export function NavigationMenuContent(props: any) {
  return (
    <Content
      className={cn(
        'absolute top-0 left-0 w-full sm:w-auto bg-popover z-50 rounded-md border shadow-md animate-in slide-in-from-top-2',
        props.className
      )}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium ' +
  'transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent disabled:pointer-events-none disabled:opacity-50'
)
