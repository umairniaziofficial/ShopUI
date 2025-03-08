import React from "react";
import { P } from "../ui/typography";

import { Card } from "@/components/ui/card";

interface CardProps {
  title: string;
  id: string;
  imgSrc: string;
  price: number;
}

import Placeholder from "../../app/assets/placeholder.png";

import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

import Image from "next/image";

import Link from "next/link";

const ProductCard = (props: CardProps) => {
  return (
    <Card className="min-w-[280px] h-auto fade-in">
      <Link href={`/product/${props.title}`}>
        <Image
          src={Placeholder}
          alt="Image"
          className="rounded-md object-cover rounded-b-none  h-auto  max-w-[280px]"
        />
      </Link>
      <div className="px-2 pb-3">
        <div className="flex flex-col gap-0 ">
          <P customClass="pt-3">{props.title}</P>
          <P customClass="text-muted-foreground mt-0 mb-3">{props.price} $</P>
        </div>
        <div>
          <Button className="w-full ">
            <ShoppingCart height={17} /> Add to cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
