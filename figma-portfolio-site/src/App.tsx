import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Starfield } from "./components/Starfield";
import { AboutPage } from "./pages/AboutPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { HomePage } from "./pages/HomePage";
import { PlaygroundPage } from "./pages/PlaygroundPage";

export default function App() {
  return (
    <>
      <Starfield />
      <div className="page-shell">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience/:slug" element={<ExperiencePage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
        </Routes>
      </div>
    </>
  );
}
