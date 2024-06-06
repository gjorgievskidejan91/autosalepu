"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const AdminNav = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex space-x-2 mb-5">
        <Link
          href="/dashboard"
          className={`${
            pathname === "/dashboard" ? "bg-black" : ""
          } text-white hover:bg-gray-900 hover:text-white bg-blue-500 rounded-md px-3 py-2`}
        >
          Home
        </Link>
        <Link
          href="/dashboard/add"
          className={`${
            pathname === "/dashboard/add" ? "bg-black" : ""
          } text-white hover:bg-gray-900 hover:text-white bg-blue-500 rounded-md px-3 py-2`}
        >
          Add Car
        </Link>
        <Link
          href="/dashboard/media"
          className={`${
            pathname === "/dashboard/media" ? "bg-black" : ""
          } text-white hover:bg-gray-900 hover:text-white bg-blue-500 rounded-md px-3 py-2`}
        >
          Media
        </Link>
      </div>
    </div>
  );
};

export default AdminNav;
