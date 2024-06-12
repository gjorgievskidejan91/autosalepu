import React from "react";
import { addMedia } from "@/app/lib/media";
import { SubmitButton } from "./buttons";

const AddMedia = () => {
  return (
    <div>
      <h2>Add media Link</h2>
      <form action={addMedia}>
        <input
          type="file"
          name="images"
          id="images"
          placeholder="images"
          multiple
        />
        <SubmitButton />
      </form>
    </div>
  );
};

export default AddMedia;
