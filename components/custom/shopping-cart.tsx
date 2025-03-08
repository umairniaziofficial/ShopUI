import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ShoppingCart } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export function ShoppingCartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <ShoppingCart height={17} />
        </Button>
      </SheetTrigger>
      <SheetContent className="xxs:max-w-[270px] xs:max-w-[300px] md:max-w-[500px]">
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <ShoppingCart height={17} /> Shopping Cart
          </SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <SkeletonDemo />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <SkeletonDemo />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <SkeletonDemo />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <SkeletonDemo />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <SkeletonDemo />
          </div>
        </div>
        <SheetFooter className="w-full flex flex-row-reverse">
          <Button type="submit" className="max-w-[120px]">
            Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
