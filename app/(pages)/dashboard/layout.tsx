"use client";

import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Activity,
  BarChart3,
  LogOut,
  Menu,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

import * as React from "react";
import { useState } from "react";

const sidebarItems = [
  { icon: BarChart3, label: "Dashboard", href: "/dashboard" },
  { icon: ShoppingCart, label: "Orders", href: "/dashboard/orders" },
  { icon: Package, label: "Products", href: "/dashboard/products" },
  { icon: Users, label: "Customers", href: "/dashboard/customers" },
  { icon: Activity, label: "Analytics", href: "/dashboard/analytics" },
];

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden w-full">
      <aside className="hidden w-64 overflow-y-auto border-r md:block">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-lg">Shop.co</span>
            </Link>
          </div>
          <ScrollArea className="flex-1 p-3">
            <nav className="flex flex-col gap-1">
              {sidebarItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent ${
                    pathname === item.href ? "bg-accent" : ""
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </div>
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <Link className="flex items-center gap-2 font-semibold" href="#">
                <ShoppingCart className="h-6 w-6" />
                <span className="text-lg">Shop.co</span>
              </Link>
              <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
                <nav className="flex flex-col gap-2">
                  {sidebarItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent ${
                        pathname === item.href ? "bg-accent" : ""
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </ScrollArea>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1"></div>
          <ThemeToggleButton />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="@shadcn"
                  />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">shadcn</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    m@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
