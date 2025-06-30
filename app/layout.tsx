import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Excellence Academy",
  description:
    "A leading educational institution committed to academic excellence and character development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-950 transition-colors duration-300`}
      >
        <Navbar />
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
