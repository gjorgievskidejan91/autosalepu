import CarCard from "./CarCard";
import Link from "next/link";
import { fetchLatestCars } from "@/app/lib/data";

const HomeCars = async () => {
  //the number is limit per page
  const cars = await fetchLatestCars(4);

  return (
    <div>
      <>
        <section className="px-4 py-6 dark:bg-slate-800 ">
          <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {cars.length === 0 ? (
                <p>No Cars Found</p>
              ) : (
                cars.map((car, index) => <CarCard car={car} key={index} />)
              )}
            </div>
          </div>
        </section>

        <section className="m-auto max-w-lg my-10 px-6">
          <Link
            href="/cars"
            className="block bg-black text-white dark:bg-blue-500 text-center py-4 px-6 rounded-xl hover:bg-gray-700 "
          >
            View All Cars
          </Link>
        </section>
      </>
    </div>
  );
};

export default HomeCars;
