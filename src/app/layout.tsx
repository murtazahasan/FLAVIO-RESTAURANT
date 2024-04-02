import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FLAVIO RESTAURANT",
  description:
    "Flavio Restaurant honors tradition with a modern twist. Our chefs draw inspiration from family recipes, infusing each dish with love and authenticity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favi.png" sizes="any" />
      </head>

      <body className={oswald.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}