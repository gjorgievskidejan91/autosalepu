import CarCard from "./CarCard";
import Link from "next/link";

const HomeCars = ({ cars }) => {
  return (
    <div>
      <>
        <section className="px-4 py-6">
          <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
              Recent Cars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CarCard />
            </div>
          </div>
        </section>

        <section className="m-auto max-w-lg my-10 px-6">
          <Link
            href="/properties"
            className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 "
          >
            View All Cars
          </Link>
        </section>
      </>
    </div>
  );
};

export default HomeCars;
