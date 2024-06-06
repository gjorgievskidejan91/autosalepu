"use client";

import Link from "next/link";
import { PencilIcon, TrashIcon } from "lucide-react";
import { deleteCar, updateCarStatus } from "@/app/lib/actions";

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
        const res = await updateCar(id);

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
