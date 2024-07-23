import { cn } from '@/src/lib/utils'
type FontTypes = 'roobertTrail-semibold' | 'roobertTrail-bold'

export function TypographyH1({
  children,
  font,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  font?: FontTypes
}) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-roobert-semibold tracking-tight lg:text-5xl',
        className,
        '!font-roobert-semibold'
      )}
      {...props}
    >
      {children}
    </h1>
  )
}
export function TypographyH2({
  children,
  font,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  font?: FontTypes
}) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-roobert-semibold tracking-tight first:mt-0',
        className,
        '!font-roobert-semibold'
      )}
      {...props}
    >
      {children}
    </h2>
  )
}
export function TypographyH3({
  children,
  font,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  font?: FontTypes
}) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-roobert-semibold tracking-tight',
        className,
        '!font-roobert-semibold'
      )}
      {...props}
    >
      {children}
    </h3>
  )
}
export function TypographyH4({
  children,
  font,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  font?: FontTypes
}) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl tracking-tight',
        className,
        '!font-roobert-semibold'
      )}
      {...props}
    >
      {children}
    </h4>
  )
}
