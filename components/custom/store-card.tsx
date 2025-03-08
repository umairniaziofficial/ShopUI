import { Box } from "lucide-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  id: string;
  name: string;
  description: string;
  productCount: number;
  status: string;
}

const StoreCard = (props: CardProps) => {
  return (
    <Card className=" relative flex flex-col flex-grow basis-1/4 min-w-[200px] md:max-w-[250px] hover:cursor-pointer hover:bg-muted-foreground/5 fade-in">
      <span
        className={`absolute py-[1.5px] px-4 font-[500] rounded-md w-auto top-3 right-2 text-[12px] border-[1px]  ${
          props.status === "active"
            ? " bg-red-200 text-red-600 border-red-600"
            : "bg-green-200 text-green-600 border-green-600"
        }`}
      >
        {props.status === "active" ? "Active" : "Inactive"}
      </span>
      <CardHeader>
        <CardTitle className="font-light">{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <CardDescription className="flex">
          <Box height={17}></Box>
          {props.productCount} Products
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default StoreCard;
