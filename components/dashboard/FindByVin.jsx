"use client";
import { useState } from "react";

export default function FindByVin() {
  const [vin, setVin] = useState("");
  const [carDetails, setCarDetails] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setVin(e.target.value);
  };

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
      setCarDetails(vehicleData);
      setError("");
    } catch (err) {
      setError(
        "Failed to fetch car details. Please check the VIN and try again."
      );
      setCarDetails(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vin.trim() !== "") {
      fetchCarDetails();
    } else {
      setError("Please enter a VIN number.");
    }
  };

  return (
    <div>
      <h1>Car Details Lookup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={vin}
          onChange={handleInputChange}
          placeholder="Enter VIN"
        />
        <button type="submit">Fetch Details</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {carDetails && (
        <div>
          <h2>Car Details:</h2>
          <p>Make: {carDetails.Make}</p>
          <p>Model: {carDetails.Model}</p>
          <p>Model Year: {carDetails.ModelYear}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}
