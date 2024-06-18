import connectDb from "@/config/database";
import { Car, Media, Form, Message } from "./models";
import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 8; // Define the number of items per page

//dashboard edit page, CarDetail
export const fetchCarById = async (id) => {
  noStore();
  try {
    await connectDb();
    const car = await Car.findById(id);

    if (!car) {
      throw new Error(`Car with id ${id} not found`);
    }

    const carPlain = {
      ...car.toObject(),
      _id: car._id.toString(),
    };

    return carPlain;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// Define a function for fetching filtered cars
export const fetchFilteredCars = async (query, currentPage) => {
  noStore();
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    await connectDb();
    let searchQuery = {
      $or: [
        { make: { $regex: query, $options: "i" } },
        { model: { $regex: query, $options: "i" } },
        { transmission: { $regex: query, $options: "i" } },
        // Add other string fields here
      ],
    };

    // Execute the query to fetch cars with pagination
    const cars = await Car.find(searchQuery)
      .sort({ available: -1, createdAt: -1 }) // Sort by createdAt in descending order
      .limit(ITEMS_PER_PAGE)
      .skip(offset);

    return cars;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cars.");
  }
};

//LatestCar carousel,finance, homeCars,
export const fetchLatestCars = async (itemsPerPage) => {
  noStore();
  try {
    await connectDb();

    const data = await Car.find({})
      .sort({ available: -1, createdAt: -1 })
      .limit(itemsPerPage);
    const plainData = data.map((car) => ({
      ...car.toObject(),
      _id: car._id.toString(),
      createdAt: car.createdAt.toISOString(),
      updatedAt: car.updatedAt.toISOString(),
    }));
    return plainData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Fetch total cars for pagination search ////
export const fetchTotalCars = async (query) => {
  try {
    await connectDb();

    const searchQuery = {
      $or: [
        { make: { $regex: query, $options: "i" } },
        { model: { $regex: query, $options: "i" } },
        { year: { $regex: query, $options: "i" } },
        { price: { $regex: query, $options: "i" } },
        { status: { $regex: query, $options: "i" } },
      ],
    };

    const count = await Car.countDocuments(searchQuery);

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of cars.");
  }
};

//add car , edit car , media page ,
export const fetchMedia = async () => {
  noStore();
  try {
    await connectDb();
    const media = await Media.find({}).sort({ createdAt: -1 }).limit(50);
    return media;
  } catch (error) {
    console.log(error);
  }
};

// Fetch Forms /dashboard/forms
export const fetchForms = async () => {
  noStore();
  try {
    await connectDb();
    const forms = await Form.find({});
    return forms;
  } catch (error) {
    console.log(error);
  }
};

//dashboard/messages
export const fetchMessages = async () => {
  try {
    await connectDb();

    const messages = await Message.find({})
      .populate({
        path: "carOfInterest",
        select: "make model", // Select only the make and model fields
      })
      .exec();

    return messages;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch messages");
  }
};
