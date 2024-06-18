import React from "react";
import { fetchMedia } from "@/app/lib/data";
import Add from "@/components/dashboard/Add";

const page = async () => {
  const media = await fetchMedia();
  const images = media.map((item) => item.url);

  return (
    <div className=" border mb-5 dar:text-white mx-5 shadow-lg rounded-lg p-10">
      <h1 className="text-xl">Add a car</h1>
      {/* <FindByVin /> */}

      <Add images={images} />
    </div>
  );
};

export default page;
