import React from "react";
import CarDetail from "@/components/CarDetail";
import { Suspense } from "react";
import { Loader } from "lucide-react";
import LatestCars from "@/components/LatestCars";
import { BackButton } from "@/components/dashboard/buttons";
const page = ({ params }) => {
  const { id } = params;

  return (
    <div className=" mx-auto md:p-6">
      <BackButton />
      <Suspense fallback={<Loader />}>
        <CarDetail id={id} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <LatestCars />
      </Suspense>
    </div>
  );
};

export default page;
