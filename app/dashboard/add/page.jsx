import React from "react";
import { fetchMedia } from "@/app/lib/data";
import AddCar from "@/components/dashboard/AddCar";

const page = async () => {
  const media = await fetchMedia();
  const images = media.map((item) => item.url);

  return (
    <div className=" border mb-5 dar:text-white mx-5 shadow-lg rounded-lg p-10">
      <h1 className="text-xl">Add a car</h1>

      <AddCar images={images} />
    </div>
  );
};

export default page;
