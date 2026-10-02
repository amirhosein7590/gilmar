import HeroSection from "@/components/templates/HeroSection/HeroSection";
import AboutUs from "@/components/templates/AboutUs";
import Rules from "@/components/templates/Rules/Rules";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutUs />
      <Rules />
    </div>
  );
}
