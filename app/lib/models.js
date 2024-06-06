import { mongoose, model, models } from "mongoose";

const carSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    condition: {
      type: String,
      required: true,
      enum: ["New", "Used"], // Ensures the condition is either 'New' or 'Used'
    },
    serviceHistory: {
      type: String,
      required: true,
      enum: ["Full", "Partial", "None"], // Common service history statuses
    },
    color: {
      type: String,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
      enum: ["Automatic", "Manual"], // Ensures the transmission is either 'Automatic' or 'Manual'
    },
    imageUrl: [
      {
        type: String,
      },
    ],
    available: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const mediaSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      requred: true,
    },
  },
  { timestamps: true }
);

export const Car = models.Car || model("Car", carSchema);
export const Media = models.Media || model("Media", mediaSchema);
