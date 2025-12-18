'use client'

import {
  Root,
  Item,
  Indicator
} from '@radix-ui/react-radio-group'
import { cn } from '@/lib/utils'

export const RadioGroup = Root

export function RadioGroupItem({
  className = '',
  ...props
}: {
  className?: string
  value: string
  id: string
  disabled?: boolean
}) {
  return (
    <Item
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <Indicator className="flex items-center justify-center">
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
      </Indicator>
    </Item>
  )
}

