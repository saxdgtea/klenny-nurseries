// src/app/layout.tsx
import "@/app/globals.css";
import { ReactNode } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

export const metadata = {
  title: "FarmLife | Landscaping & Nurseries",
  description:
    "Landscaping and nursery services to bring your outdoor vision to life.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-green-50 to-white text-gray-900">
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
