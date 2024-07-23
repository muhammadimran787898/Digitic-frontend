'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/src/lib/utils'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  {
    trackClassName?: string
    thumbClassName?: string
    rangeClassName?: string
  } & React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(
  (
    { className, trackClassName, thumbClassName, rangeClassName, ...props },
    ref
  ) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          'relative h-[3px] w-full grow overflow-hidden rounded-full bg-secondary-background',
          trackClassName
        )}
      >
        <SliderPrimitive.Range
          className={cn('absolute h-full bg-primary', rangeClassName)}
        />
      </SliderPrimitive.Track>
      {(props.value?.length ?? 1) > 1 ? (
        props.value?.map(() => (
          <SliderPrimitive.Thumb
            className={cn(
              'block h-4 w-4 rounded-full border-2 border-primary bg-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary-background disabled:pointer-events-none disabled:opacity-50',
              thumbClassName
            )}
          />
        ))
      ) : (
        <SliderPrimitive.Thumb
          className={cn(
            'block h-4 w-4 rounded-full border-2 border-primary bg-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary-background disabled:pointer-events-none disabled:opacity-50',
            thumbClassName
          )}
        />
      )}
    </SliderPrimitive.Root>
  )
)

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
