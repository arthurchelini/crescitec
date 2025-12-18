'use client'

import {
  Provider,
  Root,
  Trigger,
  Content,
  Portal,
  Arrow,
} from '@radix-ui/react-tooltip'

import { cn } from '@/lib/utils'

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>
}

export function Tooltip({
  children,
  content,
  side = 'top',
  align = 'center',
  className = '',
}: {
  children: React.ReactNode
  content: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  className?: string
}) {
  return (
    <Root>
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <Content
          side={side}
          align={align}
          className={cn(
            'z-50 overflow-hidden rounded-md bg-black px-3 py-1.5 text-sm text-white shadow-md animate-fade-in',
            className
          )}
        >
          {content}
          <Arrow className="fill-black" />
        </Content>
      </Portal>
    </Root>
  )
}
