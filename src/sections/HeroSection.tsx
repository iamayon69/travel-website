import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-16 min-h-[500px] font-poppins">
      {/* Left half: Text */}
      <div className="flex-1 flex flex-col justify-center items-start gap-6 md:pr-12">
        <h1 className="text-xl font-bold text-[#DF6951] uppercase">
          Best Destinations around the world
        </h1>
        <div className="relative">
          <h1 className="text-[84px] relative z-20 tracking-[-4%] font-bold text-[#181E4B] leading-[89px] font-volkhov">
            Travel, enjoy and live a new and full life
          </h1>
          <div className="absolute z-10 top-18 right-2">
            <Image
              src="/images/decore.svg"
              alt="decore"
              width={385}
              height={12}
              className="w-[385px] h-[12px]"
            />
          </div>
        </div>
        <p className="text-lg md:text-xl text-[#212832] max-w-lg">
          Built to help you explore the world, find the best deals, and create
          unforgettable journeys with ease.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="bg-[#F1A501] text-white font-medium text-lg px-8 py-3 rounded-lg shadow-md hover:bg-[#d18e01] transition">
            Find out more
          </button>
        </div>
      </div>
      {/* Right half: SVG Image */}
      <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
        <Image
          src="/images/hero.svg"
          alt="Hero"
          width={800}
          height={800}
          className="w-full h-auto size-[765px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
