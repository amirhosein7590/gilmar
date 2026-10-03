import HeroSection from "@/components/templates/HeroSection/HeroSection";
import AboutUs from "@/components/templates/AboutUs";
import Rules from "@/components/templates/Rules";
import Services from "@/components/templates/Services/Services";
import Residence from "@/components/templates/Residence";
import { VideoPlayer } from "@/components/modules/VideoPlayer";
import Video from "@/components/templates/Video/Video";

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
