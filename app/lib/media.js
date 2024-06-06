"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connectDb from "@/config/database";
import { Media } from "./models";
import cloudinary from "@/config/cloudinary";

export const addMedia = async (formData) => {
  try {
    const media = formData.get("media");
    console.log(media);
    const newMedia = new Media({
      url: media,
    });
    console.log(newMedia);
    await newMedia.save();
  } catch (error) {
    console.log(error);
  }
};
