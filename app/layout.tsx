import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import IntroCurtain from "@/components/IntroCurtain/IntroCurtain";

export const metadata: Metadata = {
  title: "AJ Technology | AI Journey",
  description:
    "AJ Technology builds intelligent AI systems, digital products, and scalable technology solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <IntroCurtain />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}