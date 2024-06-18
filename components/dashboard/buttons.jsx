"use client";

import Link from "next/link";
import { PencilIcon, TrashIcon } from "lucide-react";
import { deleteCar, updateCarStatus } from "@/app/lib/actions";
import { useFormStatus } from "react-dom";
import { deleteMedia } from "@/app/lib/media";
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        className="rounded-md border bg-sky-800 text-white p-2 hover:bg-gray-100"
        // disabled={pending}
      >
        {pending ? "Adding" : "Add"}
      </button>
    </>
  );
}
export function EditButton({ id }) {
  return (
    <Link
      href={`/dashboard/edit/${id}/`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export const DeleteMedia = ({ imageUrl, mediaId }) => {
  const handleDelete = async () => {
    try {
      const res = await deleteMedia(imageUrl, mediaId);
      toast.success(res.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className="rounded-md  border p-2 hover:bg-gray-100"
      onClick={handleDelete}
    >
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-5" color="red" />
    </button>
  );
};
export function DeleteButton({ id }) {
  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want do delete this violation?"
    );

    if (isConfirmed) {
      try {
        const res = await deleteCar(id);

        if (res.error) {
          console.log("Filed");
        } else {
          console.log("Successfully deleted");
        }
      } catch (error) {
        console.log("Filed to delete violation");
      }
    }
  };
  return (
    <form action={handleDelete}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

export function UpdateButton({ id }) {
  const handleUpdate = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want do delete this violation?"
    );

    if (isConfirmed) {
      try {
        const res = await updateCarStatus(id);

        if (res.error) {
          console.log("Filed");
        } else {
          console.log("Successfully deleted");
        }
      } catch (error) {
        console.log("Filed to delete violation");
      }
    }
  };
  return (
    <form action={handleUpdate}>
      <button className="rounded-md border p-2 hover:bg-gray-100 bg-yellow-400">
        <span className="sr-only">Mark as Sold</span>
        Mark As sold
      </button>
    </form>
  );
}

export function MobileCallButton() {
  return (
    <button className="w-full md:hidden mt-2 bg-green-500 text-white py-2 rounded-md">
      <a href="tel:+1234567890">Call Us</a>
    </button>
  );
}

export function BackButton() {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();

    router.push("/cars");
  }
  return (
    <button
      onClick={handleClick}
      className="flex items-center px-4 py-2 mb-5 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      style={{ marginTop: "-33px" }}
    >
      <ArrowLeft className="mr-2" />
      Back
    </button>
  );
}
