"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SearchIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  return (
    <header className="py-2 shadow-md">
      <div className="container mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/cars" className="hover:text-gray-400">
            Cars
          </Link>
          <Link href="/finance" className="hover:text-gray-400">
            Finance
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <button className="text-white focus:outline-none ml-4">
            <SearchIcon className="h-6 w-6 text-gray-950 dark:text-white" />
          </button>
        </nav>
        <div className="flex items-center">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none md:hidden ml-4"
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-dark-900 py-4">
          <Link href="/" className="block px-4 py-2 hover:text-gray-400">
            Home
          </Link>
          <Link href="/cars" className="block px-4 py-2 hover:text-gray-400">
            Cars
          </Link>
          <Link href="/finance" className="block px-4 py-2 hover:text-gray-400">
            Finance
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:text-gray-400">
            Contact
          </Link>
          <button className="text-white focus:outline-none mt-2 px-4 py-2">
            <SearchIcon className="h-6 w-6 mb-2" />
            <ThemeToggle />
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
