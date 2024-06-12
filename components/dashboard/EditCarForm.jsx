import React from "react";
import { updateCar } from "@/app/lib/actions";
import { fetchCarById } from "@/app/lib/data";
import Image from "next/image";
const EditCarForm = async ({ id }) => {
  const car = await fetchCarById(id);

  return (
    <div className="max-w-lg mx-auto dark:text-white  bg-white shadow-lg rounded-lg p-6">
      {" "}
      <form action={updateCar}>
        <input type="hidden" name="id" value={id} />
        <div className="mb-4">
          <label htmlFor="make" className="block   text-gray-700">
            Make
          </label>
          <input
            type="text"
            id="make"
            name="make"
            defaultValue={car.make}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="model" className="block text-gray-700">
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            defaultValue={car.model}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700">
            Year
          </label>
          <input
            type="number"
            id="year"
            name="year"
            defaultValue={car.year}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={car.price}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mileage" className="block text-gray-700">
            Mileage
          </label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            defaultValue={car.mileage}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="condition" className="block text-gray-700">
            Condition
          </label>
          <select
            id="condition"
            name="condition"
            defaultValue={car.condition}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="serviceHistory" className="block text-gray-700">
            Service History
          </label>
          <select
            id="serviceHistory"
            name="serviceHistory"
            defaultValue={car.serviceHistory}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="Full">Full</option>
            <option value="Partial">Partial</option>
            <option value="None">None</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="color" className="block text-gray-700">
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            defaultValue={car.color}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="transmission" className="block text-gray-700">
            Transmission
          </label>
          <select
            id="transmission"
            name="transmission"
            defaultValue={car.transmission}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-gray-700">
            Add more photos
          </label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            multiple
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="available" className="block text-gray-700">
            Available
          </label>
          <input
            type="checkbox"
            id="available"
            name="available"
            defaultChecked={car.available}
            className="mt-1 block border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <div className="grid grid-cols-2">
            {car.imageUrl.map((image, index) => (
              <div key={index}>
                <Image src={image} width={33} height={33} alt={image} />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Insert Car
        </button>
      </form>
    </div>
  );
};

export default EditCarForm;
