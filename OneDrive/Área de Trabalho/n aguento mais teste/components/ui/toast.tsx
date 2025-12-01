'use client'

import {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const ToastContext = createContext<{
  toast: (opts: ToastOptions) => void
} | null>(null)

type ToastOptions = {
  title?: string
  description?: string
  duration?: number
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastOptions[]>([])

  const toast = useCallback((opts: ToastOptions) => {
    setToasts((prev) => [...prev, opts])
  }, [])

  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastPrimitives.Provider swipeDirection="right">
        {children}
        <ToastPrimitives.Viewport className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-full max-w-sm z-[100]" />
        {toasts.map((t, i) => (
          <ToastRoot
            key={i}
            duration={t.duration ?? 3000}
            className="z-[999]"
          >
            <div className="grid gap-1">
              {t.title && <ToastTitle>{t.title}</ToastTitle>}
              {t.description && <ToastDescription>{t.description}</ToastDescription>}
            </div>
            <ToastClose />
          </ToastRoot>
        ))}
      </ToastPrimitives.Provider>
    </ToastContext.Provider>
  )
}

// --- Subcomponentes (mantidos do seu código original) ---

export function ToastRoot({
  className = '',
  ...props
}: ToastPrimitives.ToastProps) {
  return (
    <ToastPrimitives.Root
      className={cn(
        'group pointer-events-auto relative flex w-full max-w-sm items-center justify-between space-x-2 overflow-hidden ' +
        'rounded-md border border-border bg-background p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 ' +
        'data-[swipe=end]:translate-x-full data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] ' +
        'data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out ' +
        'data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full ' +
        'data-[state=open]:slide-in-from-right-full data-[state=open]:sm:slide-in-from-bottom-full',
        className
      )}
      {...props}
    />
  )
}

export function ToastTitle({
  className = '',
  ...props
}: ToastPrimitives.ToastTitleProps) {
  return (
    <ToastPrimitives.Title
      className={cn('text-sm font-semibold', className)}
      {...props}
    />
  )
}

export function ToastDescription({
  className = '',
  ...props
}: ToastPrimitives.ToastDescriptionProps) {
  return (
    <ToastPrimitives.Description
      className={cn('text-sm opacity-90', className)}
      {...props}
    />
  )
}

export function ToastClose({
  className = '',
  ...props
}: ToastPrimitives.ToastCloseProps) {
  return (
    <ToastPrimitives.Close
      className={cn(
        'absolute right-2 top-2 rounded-md p-1 text-muted-foreground opacity-0 ' +
        'transition-opacity hover:text-foreground focus:opacity-100 group-hover:opacity-100',
        className
      )}
      toast-close=""
      {...props}
    >
      <X className="h-4 w-4" />
    </ToastPrimitives.Close>
  )
}
