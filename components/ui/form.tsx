'use client'

import { cn } from '@/lib/utils'

export type FormProps = {
  className?: string
  children?: React.ReactNode
  action?: string
  method?: 'post' | 'get'
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export function Form(props: FormProps) {
  const { className = '', children, ...rest } = props

  return (
    <form
      className={cn('space-y-6', className)}
      {...rest}
    >
      {children}
    </form>
  )
}
