import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/src/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-error text-white hover:bg-error/80',
        outline:
          'border border-secondary-dark/60 bg-background hover:bg-white-dark hover:text-black/75',
        secondary: 'bg-white-dark  text-secondary-dark hover:bg-secondary/30',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        'outline-primary':
          'text-base text-primary border border-primary w-full font-medium flex gap-3 hover:!text-primary p-10 hover:bg-white-dark'
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-7 rounded-md px-1.5',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      },
      shadow: {
        primary: 'hover:shadow-backdropbuttonPrimary transition duration-400',
        secondary: 'hover:shadow-backdropbutton transition duration-400',
        default: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shadow: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shadow, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shadow, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
