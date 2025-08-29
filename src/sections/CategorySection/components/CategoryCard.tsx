// CategoryCard.tsx
"use client";
import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
  active?: boolean;
  onClick?: () => void;
};

const CategoryCard: React.FC<Props> = ({
  image,
  title,
  description,
  active,
  onClick,
}) => {
  const outerClasses = [
    "flex flex-col items-center text-center p-6 z-20 transition-all duration-300 cursor-pointer relative",
    active
      ? "rounded-[36px] shadow-[0_100px_80px_rgba(0,0,0,0.02),0_38.52px_25.48px_rgba(0,0,0,0.0121),0_20px_13px_rgba(0,0,0,0.01),0_8.15px_0.52px_rgba(0,0,0,0.0079),0_1.85px_3.15px_rgba(0,0,0,0.0048),inset_0_64.81px_46.85px_rgba(0,0,0,0.0152)]"
      : "",
  ].join(" ");

  return (
    <div
      className={outerClasses}
      role="button"
      tabIndex={0}
      aria-pressed={active}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
  <Image src={image} alt={title} width={80} height={80} className="w-20 h-20 mb-4 object-contain" />
      <h3 className="font-semibold text-xl mb-2 text-header-primary">
        {title}
      </h3>
      <p className="text-base font-medium leading-[26px] text-text-primary">
        {description}
      </p>
      {active && (
        <div className="w-[100px] z-10 absolute -bottom-8 -left-12 h-[100px] bg-[#DF6951] rounded-tl-[25px] rounded-br-[25px]"></div>
      )}
    </div>
  );
};

export default CategoryCard;
