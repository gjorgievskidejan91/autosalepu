import Image from "next/image";
import Link from "next/link";
import { Calendar, Settings, Car, Gauge } from "lucide-react"; // Importing required icons from Lucide-react
import sold from "@/public/sold.png";

const CarCard = ({ car }) => {
  return (
    <div className="relative dark:bg-slate-700 shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <Image
          src={car.imageUrl[0]}
          alt={`${car.make} ${car.model}`}
          height={150}
          width={150}
          className="w-full h-auto rounded-t-xl"
        />
        {car.available === false && (
          <div className="absolute inset-0 bg-opacity-75">
            <Image
              src={sold}
              alt="Sold"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
        )}
      </div>

      <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-bl-lg">
        ${car.price}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-bold">
            {car.make} {car.model}
          </h2>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-gray-700 dark:text-white flex items-center">
            <Calendar className="mr-2" /> Year: {car.year}
          </p>
          <p className="text-gray-700 dark:text-white flex items-center">
            <Gauge className="mr-2" /> Mileage: {car.mileage} miles
          </p>
          <p className="text-gray-700 dark:text-white flex items-center">
            <Settings className="mr-2" /> Transmission: {car.transmission}
          </p>
          <p className="text-gray-700 dark:text-white flex items-center">
            <Car className="mr-2" /> Engine: {car.engineDisplacement} L
          </p>
        </div>

        <div className="flex justify-between items-center mt-6">
          <span
            className={` font-medium ${
              car.available ? "text-green-500" : "text-red-500"
            }`}
          >
            {car.available ? "Available for Sale" : "Sold"}
          </span>
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
