"use client";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { sendMessage } from "@/app/lib/actions";
import toast from "react-hot-toast";
import ContactForm from "./ContactForm";

export function ContactDialog({ id }) {
  const [isOpen, setIsOpen] = useState(false);

  async function onSubmit(formData) {
    console.log(formData);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const res = await sendMessage(formData);
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(res.message);
        setIsOpen(false);
      }
    } catch (error) {
      toast.error(res.message);
      setLoading(false);
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full py-2 rounded-md">Send Message</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Contact Seller</DialogTitle>
        </DialogHeader>
        <div className=" ">
          <ContactForm id={id} onSubmit={onSubmit} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
