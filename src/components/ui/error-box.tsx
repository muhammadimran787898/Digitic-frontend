import { cn } from "@/lib/utils";
import React from "react";
interface ErrorBoxProps extends React.HTMLAttributes<HTMLParagraphElement> {
  error: string;
  className?: string;
}
export const ErrorBox = ({ error, className, ...props }: ErrorBoxProps) => {
  return (
    <p
      {...props}
      className={cn("text-error text-sm font-medium h-5", className)}
    >
      {error ? error : ""}
    </p>
  );
};
