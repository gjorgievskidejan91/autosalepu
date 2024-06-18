import { mongoose, model, models } from "mongoose";
const { Schema } = mongoose;

const carSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    vin: {
      type: String,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    bodyClass: { type: String },
    engineDisplacement: { type: String },
    engineCylinders: { type: String },
    engineHP: { type: String },
    fuelTypePrimary: { type: String },
    price: {
      type: String,
      required: true,
    },
    mileage: {
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

const formSchema = new mongoose.Schema({
  vehicleOfInterest: { type: String, required: true },
  preferredTerm: { type: String, required: true },
  downPayment: { type: String, required: true },
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  ssnTin: { type: String },
  dateOfBirth: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
  residenceType: { type: String, required: true },
  lengthAtAddress: { type: String, required: true },
  homePhone: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  workPhone: { type: String, required: true },
  email: { type: String, required: true },
  employmentType1: { type: String, required: true },
  employerName1: { type: String, required: true },
  employerPhone1: { type: String, required: true },
  lengthAtJob1: { type: String, required: true },
  incomeType1: { type: String, required: true },
  grossSalary1: { type: String, required: true },
  employmentType2: { type: String },
  employerName2: { type: String },
  employerPhone2: { type: String },
  lengthAtJob2: { type: String },
  incomeType2: { type: String },
  grossSalary2: { type: String },
});
const testSchema = new mongoose.Schema({
  dormData: String,
});

export const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
    carOfInterest: {
      type: Schema.Types.ObjectId,
      ref: "Car",
      default: null,
    },
  },
  { timestamps: true }
);
export const Car = models.Car || model("Car", carSchema);
export const Media = models.Media || model("Media", mediaSchema);
export const Form = models.Form || model("Form", formSchema);
export const Dorm = models.Dorm || model("Dorm", testSchema);
export const Message = models.Message || model("Message", messageSchema);
