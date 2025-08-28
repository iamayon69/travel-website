import CategorySection from "@/sections/CategorySection/CategorySection";
import HeroSection from "@/sections/HeroSection/HeroSection";

export default function page() {
  return (
    <div className="mt-3 px-[140px]">
      <HeroSection />
      <CategorySection />
    </div>
  );
}
