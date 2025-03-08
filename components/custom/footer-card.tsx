import React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FooterCard = () => {
  return (
    <Card className="flex flex-col flex-grow basis-1/4  min-w-[200px] md:max-w-[250px] fade-in border-none">
      <CardHeader>
        <CardTitle className="font-light">Credits</CardTitle>
        <CardDescription>About</CardDescription>
        <CardDescription>Contact</CardDescription>
        <CardDescription>Terms</CardDescription>
        <CardDescription>Privacy</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FooterCard;
