import React from "react";
import ShowCars from "@/components/ShowCars";
import { Suspense } from "react";
import CarCardSkeleton from "@/components/CarCardSkeleton";
import Pagination from "@/components/Pagination";

const CarsPage = ({ searchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <div className="">
        <Suspense fallback={<CarCardSkeleton />}>
          <ShowCars query={query} currentPage={currentPage} />
        </Suspense>
        <Pagination />
      </div>
    </div>
  );
};

export default CarsPage;
