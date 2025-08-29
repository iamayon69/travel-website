import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};

const BookingSteps: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div className="flex items-start gap-x-4">
      <div className="min-w-12 min-h-12 rounded-lg flex items-center justify-center">
    <Image src={image} alt={title} width={48} height={48} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-text-primary mb-1 font-poppins">
          {title}
        </h3>
        <p className="text-base text-[#6B6B7A]">{description}</p>
      </div>
    </div>
  );
};

export default BookingSteps;
