import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Enter Valid Email" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message is required" }),
  // carOfInterest: z.string().optional(),
});

export const financeFormSchema = z.object({
  vehicleOfInterest: z
    .string()
    .nonempty({ message: "Vehicle of Interest is required." }),
  preferredTerm: z
    .string()
    .nonempty({ message: "Preferred Term is required." }),
  downPayment: z.string().nonempty({ message: "Down Payment is required." }),
  firstName: z.string().min(1, { message: "First Name is required." }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "Last Name is required." }),
  ssnTin: z.string().optional(),
  dateOfBirth: z.string().nonempty({ message: "Date of Birth is required." }),
  address: z.string().nonempty({ message: "Address is required." }),
  city: z.string().nonempty({ message: "City is required." }),
  state: z.string().nonempty({ message: "State is required." }),
  zip: z.string().nonempty({ message: "Zip is required." }),
  country: z.string().nonempty({ message: "Country is required." }),
  residenceType: z
    .string()
    .nonempty({ message: "Residence Type is required." }),
  lengthAtAddress: z
    .string()
    .nonempty({ message: "Length at Address is required." }),
  homePhone: z.string().nonempty({ message: "Home Phone Number is required." }),
  phoneNumber: z.string().nonempty({ message: "Phone Number is required." }),
  workPhone: z.string().nonempty({ message: "Work Phone is required." }),
  email: z.string().email({ message: "Email is required." }),
  employmentType1: z
    .string()
    .nonempty({ message: "Employment Type is required." }),
  employerName1: z.string().nonempty({ message: "Employer Name is required." }),
  employerPhone1: z
    .string()
    .nonempty({ message: "Employer Phone Number is required." }),
  lengthAtJob1: z.string().nonempty({ message: "Length at Job is required." }),
  incomeType1: z.string().nonempty({ message: "Income Type is required." }),
  grossSalary1: z
    .string()
    .nonempty({ message: "Gross Salary/Month is required." }),
  employmentType2: z.string().optional(),
  employerName2: z.string().optional(),
  employerPhone2: z.string().optional(),
  lengthAtJob2: z.string().optional(),
  incomeType2: z.string().optional(),
  grossSalary2: z.string().optional(),
});
