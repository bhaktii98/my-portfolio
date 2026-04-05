import { FeaturedProjects } from "../components/FeaturedProjects";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HireMe } from "../components/HireMe";
import { LifeAround } from "../components/LifeAround";
import { MainPlots } from "../components/MainPlots";
import { Sketches } from "../components/Sketches";
import { UxSlides } from "../components/UxSlides";

export function HomePage() {
  return (
    <>
      <Hero />
      <MainPlots />
      <FeaturedProjects />
      <UxSlides />
      <HireMe />
      <Sketches />
      <LifeAround />
      <Footer />
    </>
  );
}
