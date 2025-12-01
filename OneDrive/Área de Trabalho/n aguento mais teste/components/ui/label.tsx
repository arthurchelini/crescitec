'use client'

import { cn } from '@/lib/utils'

export type LabelProps = {
  htmlFor?: string
  className?: string
  children?: React.ReactNode
}

export function Label(props: LabelProps) {
  const { htmlFor, className = '', children } = props

  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
    >
      {children}
    </label>
  )
}
