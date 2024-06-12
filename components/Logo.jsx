// components/Logo.js
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = () => {
  const { theme } = useTheme();

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
