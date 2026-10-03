import HeroSection from "@/components/templates/Home/HeroSection/HeroSection";
import AboutUs from "@/components/templates/Home/AboutUs";
import Rules from "@/components/templates/Home/Rules";
import Services from "@/components/templates/Home/Services/Services";
import Residence from "@/components/templates/Home/Residence";
import Video from "@/components/templates/Home/Video/Video";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutUs />
      <Rules />
      <Services />
      <Residence />
      <Video />
    </div>
  );
}
