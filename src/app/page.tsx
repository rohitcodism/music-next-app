import Description from "@/components/Description";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
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
        <Instructors />
        <Footer />
      </main>
    </div>
  );
}
