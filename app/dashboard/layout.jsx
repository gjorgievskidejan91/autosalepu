import React from "react";
import Link from "next/link";
import AdminNav from "@/components/dashboard/AdminNav";
const Layout = ({ children }) => {
  return (
    <div>
      <AdminNav />

      {children}
    </div>
  );
};

export default Layout;
