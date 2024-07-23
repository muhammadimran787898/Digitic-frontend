import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
const inputVariantProps = cva(
  "flex h-10 w-full rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium  disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:outline-transparent",
  {
    variants: {
      variant: {
        default:
          "border border-secondary-dark/60 bg-background placeholder:text-secondary-dark focus-visible:outline-2  hover:border-primary focus-visible:border-primary disabled:bg-secondary-background disabled:border-secondary-dark/60",
        destructive:
          " border border-input bg-background placeholder:text-muted-foreground ",
        outline:
          " border border-input bg-background placeholder:text-muted-foreground ",
        secondary: "bg-white-dark placeholder:text-secondary-dark font-medium",
        ghost:
          " border border-none bg-background placeholder:text-muted-foreground ",
        link: " border border-input bg-background placeholder:text-muted-foreground ",
      },
      sizes: {
        default: "h-10 px-4 py-2",
        xs: "h-8 rounded-md px-2 text-xs",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariantProps> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "default", size, sizes, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariantProps({ variant, sizes, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
