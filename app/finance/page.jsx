import React from "react";
import { FinanceForm } from "@/components/FinanceForm";
import { TestForm } from "@/components/TestForm";
import { fetchCars } from "../lib/data";

const page = async () => {
  const cars = await fetchCars();

  return (
    <div className="min-h-screen md:p-10 max-w-screen-md mx-auto rounded-md bg-gray-100 dark:bg-gray-900 p-4">
      <FinanceForm cars={cars} />
    </div>
  );
};

export default page;
