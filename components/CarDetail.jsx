import React from "react";
import { fetchCarById } from "@/app/lib/data";
import EmblaCarousel from "./EmblaCarousel";
import { ContactDialog } from "./ContactDialog";
import { MobileCallButton } from "./dashboard/buttons";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
const CarDetail = async ({ id }) => {
  const car = await fetchCarById(id);

  const OPTIONS = {};

  return (
    <>
      {/* <Detail car={car} /> */}

      <div>
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          {/* Main Image Section */}
          <div className="col-span-1 md:col-span-6 p-4 space-y-4">
            <EmblaCarousel car={car.imageUrl} options={OPTIONS} />
          </div>

          {/* Car Details Section */}
          <div className="md:col-span-3  space-y-4 p-2 rounded shadow-md">
            <h1 className="text-3xl font-bold">
              {car.make} {car.model}
            </h1>
            <p className="text-2xl text-red-600">${car.price}</p>
            <div className="space-y-2">
              <p>
                <strong>Year:</strong> {car.year}
              </p>
              <p>
                <strong>Mileage:</strong> {car.mileage}
              </p>

              <p>
                <strong>Transmission:</strong> {car.transmission}
              </p>
              <p>
                <strong>Fuel Type:</strong>
                {car.fuelTypePrimary}
              </p>
              <p>
                <strong>Engine Size:</strong>
                {car.engineDisplacement}
              </p>

              <p>
                <strong>Cylinders:</strong>
                {car.engineCylinders}
              </p>
              <p>
                <strong>Engine HP:</strong>
                {car.engineHP}
              </p>
              <p>
                <strong>Body Class:</strong>
                {car.bodyClass}
              </p>
              <p>
                <strong>VIN:</strong>
                {car.vin}
              </p>
            </div>
            <div className="space-y-2 p-2">
              <ContactDialog id={car._id.toString()} />

              <MobileCallButton />
              <Link href={"/finance"}>
                <Button className="w-full mt-2 bg-orange-500 text-white py-2 rounded-md">
                  Finance
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-8">
          {/* <h2 className="text-2xl font-bold mb-4">Description</h2> */}
          {/* <p>{car.description}</p> */}
          {/* <p>Description</p> */}
        </div>
      </div>
    </>
  );
};

export default CarDetail;
