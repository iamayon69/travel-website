import React from "react";
import BookingSteps from "./components/BookingSteps";
import bookingConfig from "../../utils/bookingConfig";
import BookingCard from "./components/BookingCard";
import Image from "next/image";

const BookingSection = () => {
  return (
    <div className="grid grid-cols-[6fr_6fr] gap-x-[20%] mt-30 font-poppins items-center">
      <div>
        <h1 className="text-lg text-left font-semibold text-text-primary mb-2 font-poppins">
          Easy and Fast
        </h1>
        <h2 className="text-[50px] font-bold font-volkhov text-header-primary text-left">
          Book Your Next Trip
        </h2>
        <h2 className="text-[50px] font-bold font-volkhov text-header-primary text-left mb-[68px]">
          In 3 Easy Steps
        </h2>

        <div className="flex flex-col gap-y-8 font-poppins">
          {bookingConfig.map((step, index) => (
            <BookingSteps
              key={index}
              image={step.image}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="relative z-20">
          <BookingCard />
        </div>
        <div className="absolute z-30 right-30 bottom-5">
          <Image
            width={500}
            height={500}
            src="/bookingImages/travelCard.svg"
            alt="Booking Image"
            className="w-[360px] h-[129px] object-contain"
          />
        </div>
        <div className="size-[360px] z-10 rounded-full bg-[#59B1E6] absolute -top-12 left-12 blur-[150px]"></div>
      </div>
    </div>
  );
};

export default BookingSection;
