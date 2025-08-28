import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-12 py-16 min-h-[500px]">
      {/* Left half: Text */}
      <div className="flex-1 flex flex-col justify-center items-start gap-6 md:pr-12">
        <h1 className="text-[50px] md:text-[70px] font-bold text-[#212832] font-volkhov leading-tight">
          Travel, enjoy and live a new and full life
        </h1>
        <p className="text-lg md:text-xl text-[#212832] font-poppins max-w-lg">
          Built to help you explore the world, find the best deals, and create unforgettable journeys with ease.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="bg-[#F1A501] text-white font-poppins font-medium text-lg px-8 py-3 rounded-lg shadow-md hover:bg-[#d18e01] transition">Find out more</button>
        </div>
      </div>
      {/* Right half: SVG Image */}
      <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
        <Image src="/hero.svg" alt="Hero" width={500} height={500} className="w-full h-auto max-w-[500px]" />
      </div>
    </section>
  );
};

export default HeroSection;