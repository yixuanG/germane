import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold tracking-[-0.01em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/70 disabled:pointer-events-none disabled:opacity-45',
  {
    variants: {
      variant: {
        default: 'bg-primary text-canvas shadow-glow hover:bg-accent-green hover:shadow-[0_0_42px_rgba(124,255,178,0.22)]',
        destructive: 'bg-feedback-error text-primary hover:bg-feedback-error/90',
        outline:
          'border border-line bg-surface/70 text-primary hover:border-accent-cyan/30 hover:bg-elevated hover:text-accent-cyan',
        secondary: 'bg-elevated text-primary hover:bg-elevated/80',
        ghost: 'text-secondary hover:bg-white/[0.04] hover:text-primary',
        link: 'text-accent-cyan underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-xl px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
