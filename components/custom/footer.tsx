import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Github, ShoppingBag, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background text-foreground w-full">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div>
            <Link
              className="flex items-center gap-2 text-lg font-semibold"
              href="#"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Shop.co</span>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Credits</h3>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              OneStopShop
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              Acme Corp
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              craft.mxkaske.dev
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              Taxonomy
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              shadcn/ui
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Help</h3>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              Contact
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              Terms
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              Privacy
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Social</h3>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              X
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              GitHub
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              Discord
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              cal.com
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Lofi</h3>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              beats to study to
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              beats to chill to
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              a fresh start
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="#"
            >
              coffee to go
            </Link>
          </div>

          <div className="col-span-2 md:col-span-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">
                Subscribe to our newsletter
              </h3>
              <div className="flex max-w-sm gap-2">
                <Input
                  type="email"
                  placeholder="skate@gmail.com"
                  className="bg-transparent border-input"
                />
                <Button>
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
              {/* <p className="text-sm text-destructive">
                Please enter a valid email address.
              </p> */}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">Built by Umair.</p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
