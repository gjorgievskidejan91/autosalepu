import React from "react";
import MessageCard from "@/components/MessageCard";
import { Suspense } from "react";
const page = () => {
  return (
    <div>
      <h2>Messages</h2>
      <Suspense fallback={<div>Loading</div>}>
        <div className="grid grid-cols-3 gap-3 m-3">
          <MessageCard />
        </div>
      </Suspense>
    </div>
  );
};

export default page;
