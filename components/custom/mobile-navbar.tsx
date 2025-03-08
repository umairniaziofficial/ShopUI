import Link from "next/link";
import { Button } from "../ui/button";
import { AlignLeft, ShoppingBag } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";

type AccordionLink = {
  linkTitle: string;
  link: string;
};

type AccordionData = {
  title: string;
  links: AccordionLink[];
};

const accordtionData: AccordionData[] = [
  {
    title: "Start Buying",
    links: [
      { linkTitle: "link 1", link: "" },
      { linkTitle: "link 2", link: "" },
      { linkTitle: "link 3", link: "" },
      { linkTitle: "link 4", link: "" },
      { linkTitle: "link 5", link: "" },
    ],
  },
  {
    title: "Categories",
    links: [
      { linkTitle: "link 1", link: "" },
      { linkTitle: "link 2", link: "" },
      { linkTitle: "link 3", link: "" },
      { linkTitle: "link 4", link: "" },
      { linkTitle: "link 5", link: "" },
    ],
  },
  {
    title: "Products",
    links: [
      { linkTitle: "link 1", link: "" },
      { linkTitle: "link 2", link: "" },
      { linkTitle: "link 3", link: "" },
      { linkTitle: "link 4", link: "" },
      { linkTitle: "link 5", link: "" },
    ],
  },
];

import { ThemeToggleButton } from "../ui/theme-toggle-button";

export function LinkAccordion({ title, links }: AccordionData) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={title}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.link}>{link.linkTitle}</Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function NavbarSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="xxs:flex xs:flex md:hidden">
          <AlignLeft height={26} className="border-none" />
        </Button>
      </SheetTrigger>

      <SheetContent
        className="xxs:max-w-[270px] xs:max-w-[300px] md:max-w-[350px] xxs:flex xs:flex flex-col md:hidden"
        side="left"
      >
        <SheetHeader className="flex flex-col">
          <SheetTitle className="flex items-center">
            <ShoppingBag height={21} /> Shop.co
          </SheetTitle>
        </SheetHeader>
        <Separator />
        {accordtionData.map((data, index) => (
          <LinkAccordion key={index} title={data.title} links={data.links} />
        ))}
        <ThemeToggleButton />
      </SheetContent>
    </Sheet>
  );
}
