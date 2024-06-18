"use client";
import { useState } from "react";
import { updateCar } from "@/app/lib/actions";

import { SubmitButton } from "./buttons";
import SelectImages from "./SelectImages";
const EditCarForm = ({ car, images }) => {
  const carImages = car.imageUrl;
  const [selectedImages, setSelectedImages] = useState(carImages);
  const [toggle, setToggle] = useState(false);

  const [carDetails, setCarDetails] = useState(car);

  console.log(typeof carImages);

  const onSelect = (images) => {
    setSelectedImages(images);
  };
  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <div>
      <form action={updateCar}>
        <input
          type="hidden"
          name="imageUrl"
          multiple
          value={JSON.stringify(selectedImages)}
        />
        <input type="hidden" name="id" multiple value={carDetails._id} />
        <div className="md:grid md:grid-cols-4 gap-3 ">
          <div className="mb-2">
            <label
              htmlFor="vin"
              className="block text-gray-700 dark:text-white  "
            >
              Vin
            </label>
            <input
              type="text"
              name="vin"
              defaultValue={carDetails.vin}
              placeholder="Enter Vin"
              className="mt-1 block w-full border border-blue-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="make"
              className="block text-gray-700 dark:text-white  "
            >
              Make
            </label>
            <input
              type="text"
              name="make"
              placeholder="Make"
              defaultValue={carDetails.make}
              className="mt-1 block w-full border border-blue-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="model"
              className="block text-gray-700 dark:text-white "
            >
              Model
            </label>
            <input
              type="text"
              name="model"
              placeholder="Model"
              defaultValue={carDetails.model}
              className="mt-1 block w-full border border-blue-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="year"
              className="block text-gray-700 dark:text-white"
            >
              Year
            </label>
            <input
              type="text"
              name="year"
              placeholder="Year"
              defaultValue={carDetails.year}
              className="mt-1 block w-full border border-blue-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="bodyClass"
              className="block text-gray-700 dark:text-white"
            >
              Body Class
            </label>
            <input
              type="text"
              name="bodyClass"
              placeholder="bodyClass"
              defaultValue={carDetails.bodyClass}
              className="mt-1 block w-full border border-blue-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="engineDisplacement"
              className="block text-gray-700 dark:text-white"
            >
              Engine displacement
            </label>
            <input
              type="text"
              name="engineDisplacement"
              placeholder="   Engine displacement"
              defaultValue={carDetails.engineDisplacement}
              className="mt-1 block w-full border border-blue-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="engineDisplacement"
              className="block text-gray-700 dark:text-white"
            >
              EngineCylinders
            </label>
            <input
              type="text"
              name="engineCylinders"
              placeholder="EngineCylinders"
              defaultValue={carDetails.engineCylinders}
              className="mt-1 block w-full border border-blue-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="EngineHP"
              className="block text-gray-700 dark:text-white"
            >
              EngineHP
            </label>
            <input
              type="text"
              name="engineHP"
              placeholder="EngineHP"
              defaultValue={carDetails.engineHP}
              className="mt-1 block w-full border border-blue-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="FuelTypePrimary"
              className="block text-gray-700 dark:text-white"
            >
              FuelTypePrimary
            </label>
            <input
              type="text"
              name="fuelTypePrimary"
              placeholder="FuelTypePrimary"
              defaultValue={carDetails.fuelTypePrimary}
              className="mt-1 block w-full border border-blue-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="price"
              className="block text-gray-700 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              defaultValue={carDetails.price}
              className="mt-1 block w-full border border-blue-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="mileage"
              className="block text-gray-700 dark:text-white"
            >
              Mileage
            </label>

            <input
              type="number"
              id="mileage"
              name="mileage"
              defaultValue={carDetails.mileage}
              className="mt-1 block w-full border border-blue-300 rounded-md p-2"
              // required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="transmission"
              className="block text-gray-700 dark:text-white"
            >
              Transmission
            </label>
            <select
              id="transmission"
              name="transmission"
              defaultValue={carDetails.transmission}
              className="mt-1 block w-full border border-blue-300 rounded-md p-2"
              // required
            >
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
        </div>
        <label>
          Available:
          <input
            type="checkbox"
            name="available"
            defaultChecked={carDetails.available}
          />
        </label>
        <div className="m-10">
          <button onClick={handleToggle}>
            <h3>Create Gallery:</h3>
          </button>

          {toggle && (
            <SelectImages
              images={images}
              selectedI={selectedImages}
              onSelect={onSelect}
            />
          )}
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default EditCarForm;
