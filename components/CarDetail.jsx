import React from "react";
import Gallery from "./Gallery";
import { fetchCarById } from "@/app/lib/data";

const CarDetail = async ({ id }) => {
  const car = await fetchCarById(id);

  return (
    <>
      {/* <Detail car={car} /> */}

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          {/* Main Image Section */}
          <div className="col-span-1 md:col-span-6 p-4 space-y-4">
            <div className="relative h-96 md:h-auto ">
              <Gallery car={car} />
            </div>
          </div>

          {/* Car Details Section */}
          <div className="md:col-span-3  space-y-4">
            <h1 className="text-3xl font-bold">
              {car.make} {car.model}
            </h1>
            <p className="text-2xl text-red-600">${car.price}</p>
            <div className="space-y-2">
              <p>
                <strong>Year:</strong> {car.year}
              </p>
              <p>
                <strong>Condition:</strong>
                {/* {car.condition} */}
              </p>
              <p>
                <strong>Color:</strong>
                {/* {car.color} */}
              </p>
              <p>
                <strong>Drive Type:</strong>
                {/* {car.driveType} */}
              </p>
              <p>
                <strong>Transmission:</strong> {car.transmission}
              </p>
              <p>
                <strong>Fuel Type:</strong>
                {/* {car.fuelType} */}
              </p>
              <p>
                <strong>Engine Size:</strong>
                {/* {car.engineSize} */}
              </p>
              <p>
                <strong>Doors:</strong>
                {/* {car.doors} */}
              </p>
              <p>
                <strong>Cylinders:</strong>
                {/* {car.cylinders} */}
              </p>
              <p>
                <strong>VIN:</strong>
                {/* {car.vin} */}
              </p>
            </div>
            <div className="space-y-2">
              <button className="w-full bg-green-500 text-white py-2 rounded-md">
                Chat via WhatsApp
              </button>
              <button className="w-full bg-orange-500 text-white py-2 rounded-md">
                Send message
              </button>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          {/* <p>{car.description}</p> */}
          <p>Description</p>
        </div>
      </div>
    </>
  );
};

export default CarDetail;
