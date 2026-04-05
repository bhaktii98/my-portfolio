import { Achievements } from "../components/Achievements";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HireMe } from "../components/HireMe";
import { MainPlots } from "../components/MainPlots";

export function HomePage() {
  return (
    <div className="stack-fade-sections">
      <Hero />
      <MainPlots />
      <Achievements />
      <HireMe />
      <Footer />
    </div>
  );
}
