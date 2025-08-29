import React from "react";
import bookingCofig from "../../utils/bookingCofig";

const BookingSection = () => {
  return (
    <div className="flex gap-x-[20%] mt-30">
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
      </div>
      <div className="flex flex-col gap-y-8">
        {bookingCofig.map((step, idx) => (
          <div key={idx} className="flex items-start gap-x-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#F3F4F6]">
              <img src={step.image} alt={step.title} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2 font-poppins">
                {step.title}
              </h3>
              <p className="text-base text-[#6B6B7A] max-w-[520px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSection;
