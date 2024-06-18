// components/Logo.js
"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <Image
        src="/logo1.png"
        alt="Logo"
        className=" w-full"
        width={150}
        height={100}
        priority
      />
    );
  }
  return (
    <div className="flex items-center">
      {theme === "dark" ? (
        <Image
          src="/dark.png"
          className="h-20 w-full"
          alt="Logo"
          width={150}
          height={50}
          priority
        />
      ) : (
        <Image
          src="/logo1.png"
          alt="Logo"
          className="h-20 w-full"
          width={150}
          height={100}
          priority
        />
      )}
    </div>
  );
};

export default Logo;
