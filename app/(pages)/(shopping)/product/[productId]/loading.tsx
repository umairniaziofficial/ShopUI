"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, Minus, Plus, Star, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import Placeholder from "../../../../assets/placeholder.png";
import ProductCard from "@/components/custom/product-card";
import { P } from "@/components/ui/typography";

export default function Component() {
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-[1400px]">
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="bg-muted rounded-lg overflow-hidden">
            {loading ? (
              <Skeleton className="w-full h-full" />
            ) : (
              <Image
                src={Placeholder}
                alt="Small Bronze Hat"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Content Section */}
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold">
                  {loading ? (
                    <Skeleton className="w-48 h-8" />
                  ) : (
                    "Small Bronze Hat"
                  )}
                </h1>
                <p className="text-muted-foreground">
                  {loading ? <Skeleton className="w-24 h-4" /> : "skateshop"}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className="w-6 h-6"
                  fill={isFavorite ? "currentColor" : "none"}
                />
              </Button>
            </div>
            <Separator />

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">
                  {loading ? <Skeleton className="w-16 h-8" /> : "$505"}
                </span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 3
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">
                {loading ? <Skeleton className="w-20 h-4" /> : "100 in stock"}
              </p>
            </div>

            {/* Quantity and Buttons */}
            <div className="inline-flex border rounded-lg">
              <Button
                variant="ghost"
                className="rounded-none border-r px-3"
                onClick={decrementQuantity}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="flex items-center justify-center w-12">
                {loading ? <Skeleton className="w-6 h-6" /> : quantity}
              </div>
              <Button
                variant="ghost"
                className="rounded-none border-l px-3"
                onClick={incrementQuantity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2 space-x-3">
              <Button className="w-[45%]" variant="default">
                {loading ? <Skeleton className="w-full h-10" /> : "Buy now"}
              </Button>
              <Button variant="outline" className="w-[45%]">
                {loading ? <Skeleton className="w-full h-10" /> : "Add to cart"}
              </Button>
            </div>
            <Separator />

            {/* Description */}
            <div className="border-none rounded-lg">
              <button
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                className="w-full px-4 py-3 flex justify-between items-center"
              >
                <span className="font-semibold">
                  {loading ? <Skeleton className="w-24 h-4" /> : "Description"}
                </span>
                {isDescriptionOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>
              {isDescriptionOpen && !loading && (
                <div className="px-4 pb-1">
                  <p className="text-muted-foreground">
                    The Apollotech B340 is an affordable wireless mouse with
                    reliable connectivity, 12 months battery life and modern
                    design
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Products */}
      <div className="py-10 fade-in">
        <div className="flex flex-row justify-between px-[5%]">
          <P customClass="text-muted-foreground">
            {loading ? (
              <Skeleton className="w-64 h-4" />
            ) : (
              "Explore products from around the world"
            )}
          </P>
          {!loading && (
            <Button
              variant="outline"
              className="xxs:hidden xs:hidden md:flex fade-in"
            >
              View all Products <ArrowRight height={17} />
            </Button>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-5 w-full max-w-[1400px] px-[20px] md:px-[30px] py-[20px]">
          {loading ? (
            Array(4)
              .fill(null)
              .map((_, idx) => (
                <Skeleton key={idx} className="w-[250px] h-[350px]" />
              ))
          ) : (
            <>
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
            </>
          )}
        </div>

        {!loading && (
          <Button
            variant="outline"
            className="xxs:flex xs:flex md:hidden block mx-auto"
          >
            View all Products <ArrowRight height={17} />
          </Button>
        )}
      </div>
    </div>
  );
}
