import * as React from 'react'

import { cn } from '@/src/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

// focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
const inputVariantProps = cva(
  'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border border-secondary-dark/60 bg-background placeholder:text-secondary-dark focus-visible:outline-2 hover:border-primary focus-visible:border-primary disabled:bg-secondary-background disabled:border-secondary-dark/60',
        destructive:
          ' border border-input bg-background placeholder:text-muted-foreground  ',
        outline:
          ' border border-input bg-background placeholder:text-muted-foreground ',
        secondary: 'bg-white-dark placeholder:text-secondary-dark font-medium',
        ghost:
          ' border border-none bg-background placeholder:text-muted-foreground ',
        link: ' border border-input bg-background placeholder:text-muted-foreground '
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-8 rounded-md px-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-3',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputVariantProps> {}

// interface TextareaProps
//   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'default', size, ...props }, ref) => {
    return (
      <textarea
        className={cn(inputVariantProps({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
