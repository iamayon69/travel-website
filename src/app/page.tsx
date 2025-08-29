import BookingSection from "@/sections/BookingSection/BookingSection";
import BrandsSection from "@/sections/BrandsSection/BrandsSection";
import CategorySection from "@/sections/CategorySection/CategorySection";
import DestinationsSection from "@/sections/DestinationsSection/DestinationsSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import TestimonialSection from "@/sections/TestimonialSection/TestimonialSection";

export default function page() {
  return (
    <div className="mt-3 px-[140px]">
      <HeroSection />
      <CategorySection />
      <DestinationsSection />
      <BookingSection />
      <TestimonialSection />
      <BrandsSection />
    </div>
  );
}
