"use client";
import { useState } from "react";
import { addCar } from "@/app/lib/actions";
import { SubmitButton } from "./buttons";
import SelectImages from "./SelectImages";

const Add = ({ images }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [toggle, setToggle] = useState(false);

  const [vin, setVin] = useState("");
  const [carDetails, setCarDetails] = useState([]);
  const [error, setError] = useState("");

  const fetchCarDetails = async () => {
    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const vehicleData = data.Results[0];
      console.log(vehicleData);
      setCarDetails(vehicleData);
      setError("");
    } catch (err) {
      setError(
        "Failed to fetch car details. Please check the VIN and try again."
      );
      setCarDetails(null);
    }
  };

  const handdleChange = (e) => {
    setVin(e);
    if (vin.trim() !== "") {
      fetchCarDetails();
    } else {
      setError("Please enter a VIN number.");
    }
  };

  const onSelect = (images) => {
    setSelectedImages(images);
  };
  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  console.log(vin, "hello");
  return (
    <div>
      <form action={addCar}>
        <input
          type="hidden"
          name="imageUrl"
          multiple
          value={JSON.stringify(selectedImages)}
        />
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
              defaultValue={vin}
              onChange={(e) => {
                handdleChange(e.target.value);
              }}
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
              defaultValue={carDetails.Make}
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
              defaultValue={carDetails.Model}
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
              defaultValue={carDetails.ModelYear}
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
              defaultValue={carDetails.BodyClass}
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
              defaultValue={carDetails.DisplacementCC}
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
              defaultValue={carDetails.EngineCylinders}
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
              defaultValue={carDetails.EngineHP}
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
              defaultValue={carDetails.FuelTypePrimary}
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
          <input type="checkbox" name="available" defaultChecked={true} />
        </label>
        <div className="m-10">
          <button onClick={handleToggle}>
            <h3>Create Gallery:</h3>
          </button>

          {toggle && <SelectImages images={images} onSelect={onSelect} />}
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default Add;
