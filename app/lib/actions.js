"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connectDb from "@/config/database";
import { Car, Media } from "./models";

import { put } from "@vercel/blob";
import { model } from "mongoose";

export const addCar = async (formData) => {
  const data = Object.fromEntries(formData);
  data.available = data.available === "on";
  data.imageUrl = JSON.parse(data.imageUrl);

  // await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(data);
  try {
    await connectDb();
    const newCar = new Car({
      make: data.make,
      model: data.model,
      year: data.year,
      bodyClass: data.bodyClass,
      engineDisplacement: data.engineDisplacement,
      engineCylinders: data.engineCylinders,
      engineHP: data.engineHP,
      fuelTypePrimary: data.fuelTypePrimary,
      price: data.price,
      mileage: data.mileage,
      transmission: data.transmission,
      imageUrl: data.imageUrl,
      available: data.available,
      isFeatured: data.isFeatured,
    });
    console.log(newCar);
    await newCar.save();
  } catch (error) {
    console.log(error);
  }
  // revalidatePath("/dashboard");
  // redirect("/dashboard");
};

export const updateCar = async (formData) => {
  const data = Object.fromEntries(formData);

  data.available = data.available === "on";
  const images = formData
    .getAll("imageUrl")
    .filter((image) => image.name !== "");

  const imageUploadPromises = [];

  if (images[0].name === "undefined") {
    console.log("no files ");
    throw new Error("No images");
  }

  for (const image of images) {
    // Assuming image is a File object, extract the file data
    try {
      const blob = await put(image.name, image, {
        access: "public",
      });
      imageUploadPromises.push(blob.url);
      console.log(" image uploded");
      await new Media({ url: blob.url }).save();
      console.log("success DB");
    } catch (error) {
      console.log(error);
    }
  }
  // Wait for all image uploads to complete
  const uploadedImages = await Promise.all(imageUploadPromises);

  // Add the uploaded images to the propertyData object
  data.imageUrl = uploadedImages;

  console.log(data);

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
  } catch (error) {
    console.log(error);
  }
  revalidatePath(`/dashboard`);
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
