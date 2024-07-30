"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { TimeOutlineIcon } from "@/src/assets/svg";
import { Timer } from "./timer";
type TimePickerProps = {
  initialTime: Date;
  onChange: (date: Date) => void;
  className?: string;
};
export function TimePicker({
  initialTime,
  onChange,
  className,
}: TimePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] text-left font-normal justify-between !px-4",
            !initialTime && "text-muted-foreground",
            className
          )}
        >
          {/* format in time */}

          {initialTime ? format(initialTime, "hh:mm a") : <span>Select</span>}
          <TimeOutlineIcon className="mr-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-2" align="start">
        <Timer initialTime={initialTime} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
}
