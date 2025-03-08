import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NotFoundProduct() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Product Not Found
      </h1>
      <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
        We could not find the product youre looking for. It might have been
        removed or does not exist.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <Button asChild variant="outline">
          <Link href="/shop">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Link>
        </Button>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for products"
            className="pl-8 sm:w-[300px]"
          />
        </div>
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        If you believe this is an error, please contact our{" "}
        <Link
          href="/support"
          className="font-medium underline underline-offset-4"
        >
          customer support
        </Link>
        .
      </p>
    </div>
  );
}
