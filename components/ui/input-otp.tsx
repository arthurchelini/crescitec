'use client'

import {
  InputOtpRoot,
  InputOtpControl,
  InputOtpInput,
  type InputOtpRootProps,
} from '@ark-ui/react'
import { cn } from '@/lib/utils'

type Props = InputOtpRootProps & {
  className?: string
}

export function InputOtp(props: Props) {
  const { className = '', ...rest } = props

  return (
    <InputOtpRoot {...rest}>
      <InputOtpControl className={cn('flex items-center gap-2', className)}>
        {({ slots }) =>
          slots.map((slot, index) => (
            <InputOtpInput
              key={index}
              index={index}
              className="w-10 h-10 text-center text-sm border border-input bg-background rounded-md shadow-sm placeholder:text-muted-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          ))
        }
      </InputOtpControl>
    </InputOtpRoot>
  )
}
