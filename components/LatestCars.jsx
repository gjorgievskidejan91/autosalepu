import { LatestCarousel } from "./LatestCarousel";
import { fetchLatestCars } from "@/app/lib/data";
const LatestCars = async () => {
  const cars = await fetchLatestCars();

  return (
    <div className=" md:max-w-screen-xl mx-auto border">
      <h1 className="text-center text-4xl pt-3">Latest Cars</h1>
      <LatestCarousel cars={cars} />
    </div>
  );
};

export default LatestCars;
