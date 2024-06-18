import CarsTable from "@/components/dashboard/CarsTable";
import Pagination from "@/components/Pagination";
import { fetchTotalCars } from "../lib/data";
import { Suspense } from "react";
const DashboardPage = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchTotalCars(query);
  return (
    <>
      <div id="showCars">
        <Suspense fallback={<></>}>
          <CarsTable currentPage={currentPage} query={query} />
        </Suspense>

        <div className="my-3 md:my-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
