import HeroSection from "@/components/templates/HeroSection/HeroSection";
import AboutUs from "@/components/templates/AboutUs";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutUs />
    </div>
  );
}
