"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connectDb from "@/config/database";
import { Media } from "./models";
import { put, del } from "@vercel/blob";

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
    revalidatePath("/dashboard/media");
    redirect("/dashboard/media");
  } catch (error) {
    console.log(error);
  }
};

export const deleteMedia = async (imageUrl, mediaId) => {
  console.log(imageUrl);
  console.log(mediaId);
  try {
    await Media.findByIdAndDelete(mediaId);
    await del(imageUrl);

    revalidatePath("/dashboard/media");
    return { message: "success" };
  } catch (error) {
    console.log(error);
  }
};
