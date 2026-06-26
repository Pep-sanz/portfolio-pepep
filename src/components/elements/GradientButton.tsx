import React from 'react'
import Link from 'next/link'

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeStyles = {
  sm: 'px-4 py-2 text-label-caps',
  md: 'px-6 py-3 text-label-caps',
  lg: 'px-8 py-4 text-label-caps',
}

export default function GradientButton({ children, onClick, href, className = '', size = 'sm', disabled, ...rest }: GradientButtonProps) {
  const baseClasses =
    `w-fit bg-gradient-to-r from-primary-container to-secondary-container text-white rounded-full font-geist hover:scale-105 transition-transform duration-200 active:scale-95 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] border-0 flex items-center gap-2 whitespace-nowrap ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={baseClasses} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}
