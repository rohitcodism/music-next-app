import HeroSection from "@/components/HeroSection";

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
      </main>
    </div>
  );
}
