import React from "react";
import CarCard from "./CarCard";
const FeaturedCars = () => {
  return (
    <section className="bg-blue-50 px-4 pt-6 pb-10">
      <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
        Featured Cars
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </section>
  );
};

export default FeaturedCars;
