import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pack&Go",
  description:
    "Pack&Go is your all-in-one travel companion designed to make exploring the world effortless and exciting. Whether you’re planning a weekend getaway, a luxury vacation, or a spontaneous adventure, Pack&Go helps you discover destinations, compare the best deals, and create unforgettable journeys with ease. With smart tools, curated guides, and seamless booking, we make sure you spend less time planning and more time experiencing the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
  <body style={{ fontFamily: "Volkhov, serif", backgroundColor: "#ffffff" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
