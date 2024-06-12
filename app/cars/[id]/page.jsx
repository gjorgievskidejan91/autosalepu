import React from "react";
import CarDetail from "@/components/CarDetail";

const page = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <CarDetail id={id} />
    </div>
  );
};

export default page;
