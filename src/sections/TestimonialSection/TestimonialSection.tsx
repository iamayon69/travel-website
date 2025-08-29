"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import TestimonialCard from "./components/TestimonialCard";
import testimonials from "@/utils/testimonialConfig";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
  };

  return (
    <div className="mt-30 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Side: Title + Custom Bullets */}
      <div>
        <h1 className="text-lg text-left font-semibold text-text-primary mb-2 font-poppins">
          TESTIMONIALS
        </h1>
        <h2 className="text-[50px] font-bold font-volkhov text-header-primary text-left">
          What Our Customers Say
        </h2>
        <h2 className="text-[50px] font-bold font-volkhov text-header-primary text-left mb-6">
          About Us
        </h2>

        {/* Custom Dots */}
        <div className="flex gap-3 mt-20">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => sliderRef.current?.slickGoTo(i)}
              className={`w-4 h-4 rounded-full transition ${
                activeSlide === i ? "bg-[#38425d]" : "bg-[#e5e5e5]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Side: Carousel with Arrows */}
      <div className="flex gap-4 pt-10 relative h-[260px] overflow-y-hidden">
        <div>
          <Slider
            ref={sliderRef}
            {...settings}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="h-[400px] flex items-center justify-center pt-4"
              >
                <TestimonialCard
                  name={t.name}
                  designation={t.designation}
                  testimonial={t.testimonial}
                  image={t.image}
                  imageAlt={t.imageAlt}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Manual Navigation */}
        <div className="flex flex-col gap-12 absolute top-[32%] right-[15%]">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="flex items-center justify-center"
          >
            <IoIosArrowUp className="text-2xl text-gray-800" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className=" flex items-center justify-center"
          >
            <IoIosArrowDown className="text-2xl text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
