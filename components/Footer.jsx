"use client";
import React from "react";

import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-200 dark:bg-slate-900 dark:text-white py-4 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="mb-4 md:mb-0">
            <Link className="flex flex-shrink-0 items-center" href="/">
              <Logo />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <Link href="/cars">Cars</Link>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-gray-500 mt-2 md:mt-0 dark:text-white">
              &copy; 2024 AutoSalePu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
