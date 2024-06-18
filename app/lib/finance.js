"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import connectDb from "@/config/database";
import { Form } from "./models";

import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
});

const CreateForm = formSchema.omit({});

export const sendFinanceForm = async (formData) => {
  try {
    await connectDb();

    const newForm = new Form(formData);

    await newForm.save();
    revalidatePath("/dashboard/messages");
    return { message: "Successfuly Send!", status: 200 };
  } catch (error) {
    return { message: "Failed to send a form" };
  }
};
