import React from "react";
import ShowCars from "@/components/ShowCars";
import { Suspense } from "react";
import CarCardSkeleton from "@/components/CarCardSkeleton";
import Pagination from "@/components/Pagination";
import { fetchTotalCars } from "../lib/data";
const CarsPage = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchTotalCars(query);
  return (
    <div id="showCars">
      <Suspense fallback={<CarCardSkeleton />}>
        <ShowCars query={query} currentPage={currentPage} />
      </Suspense>

      <div className="my-3 md:my-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default CarsPage;
