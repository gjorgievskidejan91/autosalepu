import connectDb from "@/config/database";
import { Car, Media, Form } from "./models";

export const fetchCars = async () => {
  try {
    await connectDb();

    // Fetch cars and sort by createdAt in descending order
    const data = await Car.find({}).sort({ createdAt: -1 });

    // Convert each car document to a plain object
    const plainData = data.map((car) => ({
      ...car.toObject(),
      _id: car._id.toString(),
      createdAt: car.createdAt.toISOString(),
      updatedAt: car.updatedAt.toISOString(),
    }));

    return plainData;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw new Error("Failed to fetch cars.");
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

const ITEMS_PER_PAGE = 3; // Define the number of items per page

// Define a function for fetching filtered cars
export const fetchFilteredCars = async (query, currentPage) => {
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
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order
      .limit(ITEMS_PER_PAGE)
      .skip(offset);

    return cars;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cars.");
  }
};
export const fetchForms = async () => {
  try {
    await connectDb();
    const forms = await Form.find({});
    return forms;
  } catch (error) {
    console.log(error);
  }
};
