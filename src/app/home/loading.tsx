import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function loading() {
  return (
    <div>
      <Skeleton className="h-10 w-10" />
    </div>
  );
}
