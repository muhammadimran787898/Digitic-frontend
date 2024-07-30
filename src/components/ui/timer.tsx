"use client";

import React, { useEffect, useState } from "react";
import { Input } from "./input";
import moment from "moment";
import { cn } from "@/lib/utils";
type TimerProps = {
  initialTime: Date;
  onChange: (date: Date) => void;
  className?: string;
};

// Props include the initial date and a callback to handle date changes
export const Timer = ({ initialTime, onChange, className }: TimerProps) => {
  // State to hold the time in 'HH:mm' format
  const [time, setTime] = useState("");

  useEffect(() => {
    // Set initial time value from the initialTime prop
    setTime(moment(initialTime).format("HH:mm"));
  }, [initialTime]);

  // Handler for changes in the time input
  const handleChange = (event: any) => {
    const newTime = event.target.value; // 'HH:mm' format
    setTime(newTime);

    // Create a new Moment date with updated time
    const updatedDate = moment(initialTime).set({
      hour: parseInt(newTime.split(":")[0], 10),
      minute: parseInt(newTime.split(":")[1], 10),
    });

    // Call the callback function with the new date
    onChange(updatedDate.toDate());
  };

  return (
    <Input
      type="time"
      value={time}
      onChange={handleChange}
      step="60" // Optional: Sets the step attribute to 60 seconds (1 minute)
      className={cn("w-max", className)}
    />
  );
};
