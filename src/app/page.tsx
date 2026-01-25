import AboutSection from "../components/about-section";
import HeroSection from "../components/hero-section";
import WorkSection from "../components/work-section";



export default function Home() {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <WorkSection />
      <AboutSection />
    </main>
  );
}
