import Image from "next/image";
import Hero from "@/components/Hero";
import HomeCars from "@/components/HomeCars";
import { Suspense } from "react";
import CarCardSkeleton from "@/components/CarCardSkeleton";
import AuthComponent from "@/components/dashboard/AuthComponent";

import FeaturedCars from "@/components/FeaturedCars";
export default function Home() {
  return (
    <div>
      <Hero />
      {/* <FeaturedCars /> */}
      <h1 className="text-center text-4xl font-bold mb-6">Latest Cars</h1>
      <Suspense fallback={<CarCardSkeleton />}>
        <HomeCars />
      </Suspense>
    </div>
  );
}
