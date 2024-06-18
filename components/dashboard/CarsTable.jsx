import React from "react";
import { fetchFilteredCars } from "@/app/lib/data";
import Image from "next/image";
import { EditButton, DeleteButton, UpdateButton } from "./buttons";

const CarsTable = async ({ query, currentPage }) => {
  const cars = await fetchFilteredCars(query, currentPage);

  if (!cars) {
    return <h2>No cars data</h2>;
  }

  return (
    <div>
      <div className="px-3 mx-auto my-5">
        <h2 className="text-2xl font-bold mb-6">Car List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-x-2  shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left">
                  Image
                </th>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left">
                  Make
                </th>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left">
                  Model
                </th>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left">
                  Year
                </th>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left">
                  Price
                </th>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left">
                  Actions
                </th>

                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 text-left">
                  Available
                </th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr key={index}>
                  <td className="py-2 px-2 border-b border-gray-200">
                    <Image
                      src={car.imageUrl[0]}
                      alt="Car Image"
                      width={50}
                      height={50}
                      className="w-16 h-16 object-cover rounded-xl"
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {car.make}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {car.model}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {car.year}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    ${car.price}
                  </td>

                  <td className="py-2 px-4 border-b border-gray-200">
                    {car.available ? (
                      <UpdateButton id={car._id.toString()} />
                    ) : (
                      "sold"
                    )}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <div className="flex gap-3">
                      <EditButton id={car._id.toString()} />
                      <DeleteButton id={car._id.toString()} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CarsTable;
