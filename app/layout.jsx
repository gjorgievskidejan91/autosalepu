"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "./embla.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <Toaster position="bottom-center" />
          <SessionProvider>{children}</SessionProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
