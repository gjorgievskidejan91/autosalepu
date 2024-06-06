import React from "react";
import { addMedia } from "@/app/lib/media";

const AddMedia = () => {
  return (
    <div>
      <h2>Add media Link</h2>
      <form action={addMedia}>
        <input type="text" name="media" id="media" placeholder="media" />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddMedia;
