import { H1, H2, P } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

import ProductCard from "@/components/custom/product-card";
import CategoryCard from "@/components/custom/category-card";
import StoreCard from "@/components/custom/store-card";

import { ArrowRight } from "lucide-react";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

const HomeCmponent = () => {
  return (
    <div className="w-full h-auto flex flex-col min-h- full justify-center items-center xxs:pt-[30px] xs:pt-[60px] md:pt-[150px] gap-y-[100px]">
      {/*Hero Section*/}
      <div className="w-full flex flex-col justify-center items-center">
        <H1 customClass=" w-full xxs:px-[50px]  xs:px-[10px] xxs:text-[29px] xs:text-[49px]  text-center fade-in">
          Foundation for your commerce platform
        </H1>
        <P customClass="text-muted-foreground  text-center mb-[10px] pt-2 max-w-[480px] w-full xs:px-[10px] xxs:px-[50px] fade-in">
          Skateshop is an open-source platform for building and customizing your
          own commerce platform with ease.
        </P>
        <div className="flex gap-x-5 fade-in">
          <Button>Buy Now</Button>
          <Button variant="outline">Sell Now</Button>
        </div>
      </div>

      {/*Categories*/}
      <div className="flex flex-wrap justify-center gap-5 w-full max-w-[1400px] px-[20px] md:px-[70px]  py-[20px] fade-in">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>

      {/*Products*/}
      <div className="py-10 fade-in">
        <div className="flex flex-row justify-between px-[5%]">
          <div className="flex flex-col fade-in">
            <H2>Featured Products</H2>
            <P customClass="text-muted-foreground">
              Explore products from around the world
            </P>
          </div>
          <Button
            variant="outline"
            className="xxs:hidden xs:hidden md:flex fade-in"
          >
            View all Products <ArrowRight height={17} />
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-5 w-full max-w-[1400px] px-[20px] md:px-[30px] py-[20px]">
          <ProductCard
            title="Electronic Gradient Towel"
            imgSrc=""
            price={251}
            id="1"
          />
          <ProductCard
            title="Electronic Gradient Towel"
            imgSrc=""
            price={251}
            id="1"
          />
          <ProductCard
            title="Electronic Gradient Towel"
            imgSrc=""
            price={251}
            id="1"
          />
          <ProductCard
            title="Electronic Gradient Towel"
            imgSrc=""
            price={251}
            id="1"
          />
          <ProductCard
            title="Electronic Gradient Towel"
            imgSrc=""
            price={251}
            id="1"
          />
          <ProductCard
            title="Electronic Gradient Towel"
            imgSrc=""
            price={251}
            id="1"
          />
          <ProductCard
            title="Electronic Gradient Towel"
            imgSrc=""
            price={251}
            id="1"
          />
          <ProductCard
            title="Electronic Gradient Towel"
            imgSrc=""
            price={251}
            id="1"
          />
        </div>
        <Button
          variant="outline"
          className="xxs:flex xs:flex md:hidden block mx-auto"
        >
          View all Products <ArrowRight height={17} />
        </Button>
      </div>

      {/*Stores*/}
      <div className="py-10 w-full max-w-[1400px]">
        <div className="flex flex-row justify-between px-[5%]">
          <div className="flex flex-col fade-in">
            <H2>Featured Stores</H2>
            <P customClass="text-muted-foreground">
              Explore stores from around the world.
            </P>
          </div>
          <Button
            variant="outline"
            className="xxs:hidden xs:hidden md:flex fade-in"
          >
            View all sotres <ArrowRight height={17} />
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-5 w-full max-w-[1400px] px-[20px] md:px-[30px] py-[20px]">
          <StoreCard
            name="skatesshop"
            description="skateboarding skates for skaters"
            productCount={10}
            id="10"
            status="active"
          />
          <StoreCard
            name="skatesshop"
            description="skateboarding skates for skaters"
            productCount={10}
            id="10"
            status="Inactive"
          />
          <StoreCard
            name="skatesshop"
            description="skateboarding skates for skaters"
            productCount={10}
            id="10"
            status="Inactive"
          />
          <StoreCard
            name="skatesshop"
            description="skateboarding skates for skaters"
            productCount={10}
            id="10"
            status="active"
          />
        </div>
        <Button
          variant="outline"
          className="xxs:flex xs:flex md:hidden block mx-auto fade-in"
        >
          View all Stores <ArrowRight height={17} />
        </Button>
      </div>
    </div>
  );
};

const Component = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HomeCmponent />
      <Footer />
    </div>
  );
};

export default Component;
