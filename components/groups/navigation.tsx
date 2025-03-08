import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import React from "react";

const categories: { title: string; href: string; description: string }[] = [
  {
    title: "Electronics",
    href: "/",
    description:
      "Browse the latest electronics including smartphones, laptops, and accessories.",
  },
  {
    title: "Fashion",
    href: "/",
    description:
      "Explore the newest trends in clothing, shoes, and accessories for men and women.",
  },
  {
    title: "Home & Kitchen",
    href: "/",
    description:
      "Find appliances, furniture, and kitchen essentials to enhance your home.",
  },
  {
    title: "Beauty & Health",
    href: "/",
    description:
      "Shop for skincare, haircare, health products, and more to stay healthy and beautiful.",
  },
  {
    title: "Toys & Games",
    href: "/",
    description:
      "Discover a wide range of toys and games for kids of all ages.",
  },
  {
    title: "Sports & Outdoors",
    href: "/",
    description:
      "Get sports gear, fitness equipment, and outdoor adventure tools.",
  },
];

const featuredProducts: { title: string; href: string; description: string }[] =
  [
    {
      title: "Smartphone",
      href: "/product/smartphone",
      description:
        "The latest model with cutting-edge features for an enhanced user experience.",
    },
    {
      title: "Wireless Headphones",
      href: "/product/wireless-headphones",
      description:
        "Experience crisp sound quality and comfort with our top-rated headphones.",
    },
    {
      title: "Laptop",
      href: "/product/laptop",
      description:
        "High-performance laptop perfect for work, study, and entertainment.",
    },
    {
      title: "Blender",
      href: "/product/blender",
      description: "A powerful blender for smoothies, soups, and more.",
    },
    {
      title: "T-shirt",
      href: "/product/t-shirt",
      description: "Stylish and comfortable T-shirts made with soft fabric.",
    },
    {
      title: "Fitness Tracker",
      href: "/product/fitness-tracker",
      description:
        "Track your fitness goals with this sleek and accurate fitness tracker.",
    },
  ];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Start Shopping</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Shop.co</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed products that you can easily shop
                      online. Fast, secure, and convenient.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="About Us">
                Learn more about our company and values.
              </ListItem>
              <ListItem href="/" title="Contact Us">
                Get in touch with our customer support team.
              </ListItem>
              <ListItem href="/" title="FAQs">
                Frequently asked questions about our products and services.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {categories.map((category) => (
                <ListItem
                  key={category.title}
                  title={category.title}
                  href={category.href}
                >
                  {category.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Featured Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {featuredProducts.map((product) => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                >
                  {product.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const NavigationBar = () => {
  return (
    <div className="xxs:hidden xs:hidden md:flex">
      <NavigationMenuDemo />
    </div>
  );
};

export default NavigationBar;
