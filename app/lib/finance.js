"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connectDb from "@/config/database";
import { Form } from "./models";

export const sendFinanceForm = async (formData) => {
  try {
    await connectDb();

    const newForm = new Form(formData);
    console.log(newForm);
    await newForm.save();
    console.log(newForm);
    return { message: "Successfuly Send!", status: 200 };
  } catch (error) {
    return { message: "Failed to send a form" };
  }
};
