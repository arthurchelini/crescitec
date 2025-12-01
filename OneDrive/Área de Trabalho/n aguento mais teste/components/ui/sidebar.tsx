'use client'

import { cn } from '@/lib/utils'

export type SidebarProps = {
  className?: string
  children?: React.ReactNode
  collapsed?: boolean
}

export function Sidebar({ className = '', children, collapsed = false }: SidebarProps) {
  return (
    <aside
      className={cn(
        'flex flex-col bg-background border-r transition-all duration-300 ease-in-out',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      {children}
    </aside>
  )
}
