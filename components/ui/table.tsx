'use client'

import { cn } from '@/lib/utils'

export function Table({ className = '', ...props }: { className?: string; [key: string]: any }) {
  return (
    <div className="w-full overflow-auto">
      <table className={cn('w-full caption-bottom text-sm', className)} {...props} />
    </div>
  )
}

export function TableHeader({ className = '', ...props }: { className?: string; [key: string]: any }) {
  return (
    <thead className={cn('[&_tr]:border-b', className)} {...props} />
  )
}

export function TableBody({ className = '', ...props }: { className?: string; [key: string]: any }) {
  return (
    <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props} />
  )
}

export function TableFooter({ className = '', ...props }: { className?: string; [key: string]: any }) {
  return (
    <tfoot className={cn('bg-muted/50 font-medium text-muted-foreground', className)} {...props} />
  )
}

export function TableRow({ className = '', ...props }: { className?: string; [key: string]: any }) {
  return (
    <tr
      className={cn('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', className)}
      {...props}
    />
  )
}

export function TableHead({ className = '', ...props }: { className?: string; [key: string]: any }) {
  return (
    <th
      className={cn('h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0', className)}
      {...props}
    />
  )
}

export function TableCell({ className = '', ...props }: { className?: string; [key: string]: any }) {
  return (
    <td
      className={cn('p-2 align-middle [&:has([role=checkbox])]:pr-0', className)}
      {...props}
    />
  )
}

export function TableCaption({ className = '', ...props }: { className?: string; [key: string]: any }) {
  return (
    <caption className={cn('mt-4 text-sm text-muted-foreground', className)} {...props} />
  )
}
