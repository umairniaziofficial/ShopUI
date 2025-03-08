import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Box } from "lucide-react";

const CategoryCard = () => {
  return (
    <Card className="flex flex-col flex-grow basis-1/4  min-w-[200px] md:max-w-[250px] hover:cursor-pointer hover:bg-muted-foreground/5 fade-in">
      <CardHeader>
        <CardTitle className="font-light">Testing</CardTitle>
        <CardDescription>Stylish and Comfortable Clothes</CardDescription>
      </CardHeader>
      <CardFooter>
        <CardDescription className="flex">
          <Box height={17}></Box>
          Products
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
