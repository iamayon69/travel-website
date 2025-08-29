"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image?: string | StaticImageData;
  name: string;
  designation?: string;
  testimonial: string;
  imageAlt?: string;
  className?: string;
};

const TestimonialCard: React.FC<Props> = ({
  image,
  name,
  designation,
  testimonial,
  imageAlt,
  className = "",
}) => {
  const src = image ?? "/images/bookingCardBg.svg";

  return (
    <figure
      className={`font-poppins bg-white rounded-lg p-5 max-w-[500px] shadow-sm ${className}`}
      aria-label={`Testimonial by ${name}`}
    >
      <blockquote className="text-base text-text-primary max-w-[400px] leading-[32p] font-medium mb-8">
        “{testimonial}”
      </blockquote>

      <figcaption className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={src}
            alt={imageAlt ?? name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <div className="text-lg font-semibold text-text-primary leading-none">
            {name}
          </div>
          {designation && (
            <div className="text-sm text-text-primary mt-1 font-medium">
              {designation}
            </div>
          )}
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
