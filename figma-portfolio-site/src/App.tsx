import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Starfield } from "./components/Starfield";
import { AboutPage } from "./pages/AboutPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { HomePage } from "./pages/HomePage";
import { AnantaraPdfRedirect } from "./pages/AnantaraPdfRedirect";
import { ProjectsPage } from "./pages/ProjectsPage";

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
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/anantara" element={<AnantaraPdfRedirect />} />
          <Route
            path="/playground"
            element={<Navigate to="/projects" replace />}
          />
        </Routes>
      </div>
    </>
  );
}
