import Image from "next/image";
import Hero from "@/components/Hero";
import HomeCars from "@/components/HomeCars";

import FeaturedCars from "@/components/FeaturedCars";
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCars />
      <HomeCars />
    </>
  );
}
