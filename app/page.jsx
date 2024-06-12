import Image from "next/image";
import Hero from "@/components/Hero";
import HomeCars from "@/components/HomeCars";
import { Suspense } from "react";
import CarCardSkeleton from "@/components/CarCardSkeleton";

import FeaturedCars from "@/components/FeaturedCars";
export default function Home() {
  return (
    <div>
      <Hero />
      {/* <FeaturedCars /> */}
      <Suspense fallback={<CarCardSkeleton />}>
        <HomeCars />
      </Suspense>
    </div>
  );
}
