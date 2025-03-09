import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "ShopUI | Premium eCommerce Shopping Experience",
  description:
    "Discover the latest fashion trends, accessories, and lifestyle products with ShopUI's curated collection. Enjoy seamless shopping experience with fast delivery and exceptional customer service.",
  keywords:
    "ecommerce, fashion, online shopping, premium brands, clothing, accessories",
  authors: [{ name: "ShopUI Team" }],
  category: "eCommerce",
  openGraph: {
    title: "ShopUI | Premium eCommerce Shopping Experience",
    description:
      "Discover the latest fashion trends, accessories, and lifestyle products at ShopUI",
    url: "https://shopui.umairdev.tech",
    siteName: "ShopUI",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/Dark.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/Light.svg",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://shopui.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col w-full items-center min-h-screen h-auto`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header className="w-full max-w-[1400px]">
            {/* Navigation goes here */}
          </header>
          <Separator className="max-w-[1400px]" />
          <main className="flex-1 w-full max-w-[1400px]">{children}</main>
          <Separator className="max-w-[1400px]" />
          <footer className="w-full max-w-[1400px] py-8">
            {/* Footer content goes here */}
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
