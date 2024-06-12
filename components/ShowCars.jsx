import CarCard from "./CarCard";
import { fetchCars, fetchFilteredCars } from "@/app/lib/data";
import Pagination from "./Pagination";
import SearchFilter from "./SearchFilter";
const ShowCars = async ({ query, currentPage }) => {
  const cars = await fetchFilteredCars(query, currentPage);

  if (!cars) {
    return <h2>No cars data</h2>;
  }

  return (
    <div>
      <>
        <SearchFilter />
        <section className="px-4 py-6">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
              {cars.length === 0 ? (
                <p>No Properties Found</p>
              ) : (
                cars.map((car, index) => <CarCard car={car} key={index} />)
              )}
            </div>
            {/* <Pagination /> */}
          </div>
        </section>
      </>
    </div>
  );
};

export default ShowCars;
