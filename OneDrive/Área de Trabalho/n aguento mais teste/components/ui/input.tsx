'use client'

import { cn } from '@/lib/utils'

export type InputProps = {
  type?: string
  className?: string
  id?: string
  name?: string
  placeholder?: string
  value?: string
  disabled?: boolean
  required?: boolean
  autoComplete?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export function Input(props: InputProps) {
  const {
    type = 'text',
    className = '',
    ...rest
  } = props

  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ' +
        'ring-offset-background placeholder:text-muted-foreground ' +
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ' +
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...rest}
    />
  )
}
