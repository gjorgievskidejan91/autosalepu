import connectDb from "@/config/database";
import { Car, Media } from "./models";

export const fetchCars = async () => {
  try {
    await connectDb();

    const cars = await Car.find({});
    return cars;
  } catch (error) {
    console.log(error);
  }
};
export const fetchCarById = async (id) => {
  try {
    await connectDb();
    const car = await Car.findById(id);
    return car;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMedia = async () => {
  try {
    await connectDb();
    const media = await Media.find({});
    return media;
  } catch (error) {
    console.log(error);
  }
};
