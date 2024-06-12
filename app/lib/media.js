"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connectDb from "@/config/database";
import { Media } from "./models";
import cloudinary from "@/config/cloudinary";
import { put } from "@vercel/blob";

export const addMedia = async (formData) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    await connectDb();
    const images = formData.getAll("images");
    console.log(images);
    if (images.length === 1) {
      console.log("no files ");
      throw new Error("No images");
    }
    for (const image of images) {
      try {
        const blob = await put(image.name, image, {
          access: "public",
        });
        console.log(" image uploded");
        await new Media({ url: blob.url }).save();
        console.log("success DB");
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/media");
  redirect("/dashboard/media");
};
export const deleteMedia = async (id) => {
  try {
    await connectDb();

    await Media.findByIdAndDelete(id);
    revalidatePath("/dashboard/media");
    return { message: "success" };
  } catch (error) {
    console.log(error);
  }
};
