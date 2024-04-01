import Description from "@/components/Description";
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import UpComingWebinars from "@/components/UpComingWebinars";

export default function Home() {
  return (
    <div
      className="
        width-full
        height-[100vh]
        text-400
      "
    >
      <main
        className="
          min-h-screen
          bg-black/[0.96]
          antialiased
          bg-grid-white/[0.02]
        "
      >
        <HeroSection />
        <Featured />
        <Description />
        <Testimonials />
        <UpComingWebinars />
      </main>
    </div>
  );
}
