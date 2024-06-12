"use client";
import { fetchMedia } from "@/app/lib/data";
import { addCar } from "@/app/lib/actions";
import { SubmitButton } from "./buttons";
const AddCarForm = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
      {" "}
      <form>
        <div className="mb-4">
          <label htmlFor="make" className="block text-gray-700">
            Make
          </label>
          <input
            type="text"
            id="make"
            name="make"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            // required
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
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            // required
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
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            // required
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
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            // required
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
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            // required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="condition" className="block text-gray-700">
            Condition
          </label>
          <select
            id="condition"
            name="condition"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            // required
          >
            <option value="New">New</option>
            <option value="Used">Used</option>
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
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            // required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="transmission" className="block text-gray-700">
            Transmission
          </label>
          <select
            id="transmission"
            name="transmission"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            // required
          >
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-gray-700">
            Image URL
          </label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            multiple
            // required
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
            className="mt-1 block border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* <div>
          <h3>Select Images:</h3>
          <div className="grid grid-cols-3 gap-4">
            {images.map((item) => (
              <div
                key={item._id}
                // onClick={() => handleImageSelect(item._id)}
                // className={`cursor-pointer ${
                //   selectedImages.includes(item._id)
                //     ? "border-2 border-blue-500"
                //     : ""
                // }`}
              >
                <img src={item} alt={item} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div> */}
        <SubmitButton />
      </form>
    </div>
  );
};

export default AddCarForm;