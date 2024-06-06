"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connectDb from "@/config/database";
import { Car } from "./models";
import cloudinary from "@/config/cloudinary";

export const addCar = async (formData) => {
  const data = Object.fromEntries(formData);

  const images = formData
    .getAll("imageUrl")
    .filter((image) => image.name !== "");
  console.log(images);
  data.available = data.available === "on";

  const imageUploadPromises = [];

  for (const image of images) {
    // Assuming image is a File object, extract the file data
    const imageBuffer = await image.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);

    // Convert the image data to base64
    const imageBase64 = imageData.toString("base64");

    // Upload the image data as a base64 string to Cloudinary
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: "propertypulsedev",
      }
    );

    imageUploadPromises.push(result.secure_url);
  }
  // Wait for all image uploads to complete
  const uploadedImages = await Promise.all(imageUploadPromises);

  // Add the uploaded images to the propertyData object
  data.imageUrl = uploadedImages;

  const newCar = new Car(data);

  try {
    await newCar.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const updateCar = async (formData) => {
  const data = Object.fromEntries(formData);

  data.available = data.available === "on";

  try {
    await Car.findByIdAndUpdate(data.id, data);
    console.log("sucess");
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const updateCarStatus = async (id) => {
  console.log(id);

  try {
    await Car.findByIdAndUpdate(id, { available: false });
  } catch (error) {}
};
export const deleteCar = async (id) => {
  try {
    await connectDb();
    await Car.findByIdAndDelete(id);
  } catch (error) {
    console.error("Error deleting violation:", error);
  }
  revalidatePath(`/dashboard`);
};
