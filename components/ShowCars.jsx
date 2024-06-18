import CarCard from "./CarCard";
import { fetchFilteredCars } from "@/app/lib/data";

const ShowCars = async ({ query, currentPage }) => {
  // fetching by query and page, by defult fetches latest
  const cars = await fetchFilteredCars(query, currentPage);

  if (!cars) {
    return <h2>No cars data</h2>;
  }

  return (
    <>
      <section className="px-4 py-6 bg-slate-200 dark:bg-slate-800 ">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {cars.length === 0 ? (
              <p>No Properties Found</p>
            ) : (
              cars.map((car, index) => <CarCard car={car} key={index} />)
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCars;
