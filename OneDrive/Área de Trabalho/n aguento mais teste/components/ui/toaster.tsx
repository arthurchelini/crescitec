'use client'

import { ToastProvider, ToastViewport } from '@radix-ui/react-toast'

export function Toaster() {
  return (
    <ToastProvider>
      <ToastViewport className="fixed bottom-0 right-0 z-50 flex max-h-screen w-full flex-col-reverse p-4 sm:max-w-sm" />
    </ToastProvider>
  )
}
