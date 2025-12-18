'use client'

import { cn } from '@/lib/utils'

export type PaginationProps = {
  page: number
  totalPages: number
  onPageChange: (newPage: number) => void
  className?: string
}

export function Pagination({ page, totalPages, onPageChange, className }: PaginationProps) {
  const handleClick = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage)
    }
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className={cn('flex items-center justify-center gap-2 mt-4', className)}>
      <button
        onClick={() => handleClick(page - 1)}
        disabled={page === 1}
        className="px-3 py-1 text-sm rounded-md border bg-muted text-muted-foreground hover:bg-muted/80 disabled:opacity-50"
      >
        Anterior
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => handleClick(p)}
          className={cn(
            'px-3 py-1 text-sm rounded-md border',
            page === p
              ? 'bg-primary text-primary-foreground'
              : 'bg-background text-foreground hover:bg-muted'
          )}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => handleClick(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-1 text-sm rounded-md border bg-muted text-muted-foreground hover:bg-muted/80 disabled:opacity-50"
      >
        Próximo
      </button>
    </nav>
  )
}
