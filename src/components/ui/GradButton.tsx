import type { ReactNode } from 'react'

type Props = { href: string; children: ReactNode; variant?: 'solid' | 'outline' | 'pill'; external?: boolean; className?: string }

export function GradButton({ href, children, variant = 'pill', external, className = '' }: Props) {
  const inner =
    variant === 'solid'
      ? 'bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary'
      : variant === 'outline'
        ? 'border-2 border-stroke bg-bg text-text-primary group-hover:border-transparent'
        : 'bg-surface text-text-primary'
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`group relative inline-flex rounded-full transition-transform hover:scale-105 ${className}`}
    >
      <span className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
      <span className={`relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm transition-colors ${inner}`}>
        {children}
      </span>
    </a>
  )
}
