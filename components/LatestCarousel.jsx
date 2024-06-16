"use client";
import React from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import Image from "next/image";
export function LatestCarousel({ cars }) {
  return (
    <Carousel
      className="p-5"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {cars.map((car, index) => (
          <CarouselItem key={index} className="basis-1/2 mx-auto lg:basis-1/4 ">
            <div className="">
              <Image
                src={car.imageUrl[0]}
                width={250}
                height={250}
                className="rounded-xl"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
