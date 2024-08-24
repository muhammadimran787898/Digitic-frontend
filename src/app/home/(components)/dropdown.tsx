import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Heart } from "@/assets/svg";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" className="-mt-3 ml-2 hover:bg-transparent">
          <Heart className="w-4 h-4" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-10 !bg-transparent border-none shadow-none ">
        <div className="flex flex-col justify-start  ">
          <Link href="/compare" className="-mt-8">
            Compare
          </Link>
          <Link href="/wishlist">Wishlist</Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
