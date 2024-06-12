import Image from "next/image";
import Link from "next/link";
const CarCard = ({ car }) => {
  return (
    <div className="relative dark:bg-slate-700 shadow-lg rounded-lg overflow-hidden">
      <Image
        src={car.imageUrl[0]}
        alt=""
        height={0}
        width={0}
        sizes="100vw"
        className="w-full h-auto rounded-t-xl"
      />
      <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-bl-lg">
        ${car.price}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-bold">
            {car.year} {car.make} {car.model}
          </h2>
        </div>

        <div className="mt-4">
          <p className="text-gray-700 dark:text-white">📅 Year: {car.year}</p>
          <p className="text-gray-700 dark:text-white">
            🚗 Mileage: {car.mileage} miles
          </p>
          <p className="text-gray-700 dark:text-white">⚙️ Condition: Used</p>

          <p className="text-gray-700 dark:text-white">
            ⚙️ Transmission: {car.transmission}
          </p>
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="text-green-500 font-medium">Available for Sale</span>
          <Link href={`/cars/${car._id.toString()}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
