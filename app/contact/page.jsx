"use client";
import React from "react";
import ContactForm from "@/components/ContactForm";
import toast from "react-hot-toast";
import { sendMessage } from "../lib/actions";

export default function page() {
  async function onSubmit(formData) {
    console.log(formData);

    try {
      const res = await sendMessage(formData);

      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(res.message);
      }
    } catch (error) {
      toast.error(res.message);
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <ContactForm onSubmit={onSubmit} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Our Location</h3>
              <p>1234 Street Name, City, State, ZIP Code</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p>info@yourcompany.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Our Location</h3>
      </div>
      <div className="w-full h-64 rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.234830408481!2d-122.41941518468222!3d37.77492927975871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b4d6e57%3A0xa7f0eeb6c3c0dcb0!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1622653542812!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
