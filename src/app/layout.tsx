import type { Metadata } from "next";
import { Poppins, Montserrat, Volkhov } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-volkhov",
});

export const metadata: Metadata = {
  title: "Pack&Go",
  description:
    "Pack&Go is your all-in-one travel companion designed to make exploring the world effortless and exciting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${volkhov.variable}`}
    >
      <body className="bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
