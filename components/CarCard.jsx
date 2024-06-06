import React from "react";

const CarCard = () => {
  return (
    <div className="relative  bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://mkdautosales.com/wp-content/uploads/2024/06/3131de2c-aef7-455b-a55a-4e8b5884432a.jpg"
        alt="Car Image"
      />
      <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-bl-lg">
        $18,999
      </div>
      <div className="p-6">
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-bold">2018 Toyota Camry</h2>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">📅 Year: 2018</p>
          <p className="text-gray-700">🚗 Mileage: 45,000 miles</p>
          <p className="text-gray-700">⚙️ Condition: Used</p>
          <p className="text-gray-700">🔧 Service History: Full</p>
          <p className="text-gray-700">🎨 Color: Silver</p>
          <p className="text-gray-700">⚙️ Transmission: Automatic</p>
        </div>
        <div className="flex justify-between items-center mt-6">
          <span className="text-green-500 font-medium">Available for Sale</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
