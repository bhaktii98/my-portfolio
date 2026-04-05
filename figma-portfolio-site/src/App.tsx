import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Starfield } from "./components/Starfield";
import { AboutPage } from "./pages/AboutPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { HomePage } from "./pages/HomePage";
import { AnantaraPdfRedirect } from "./pages/AnantaraPdfRedirect";
import { BharatYatraPdfRedirect } from "./pages/BharatYatraPdfRedirect";
import { JalSanchayPdfRedirect } from "./pages/JalSanchayPdfRedirect";
import { ProjectsPage } from "./pages/ProjectsPage";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Starfield />
      <div className="page-shell">
        <Navigation />
        <div className="page-route-body" key={location.pathname}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience/:slug" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/anantara" element={<AnantaraPdfRedirect />} />
            <Route
              path="/projects/bharatyatra"
              element={<BharatYatraPdfRedirect />}
            />
            <Route
              path="/projects/jalsanchay"
              element={<JalSanchayPdfRedirect />}
            />
            <Route
              path="/playground"
              element={<Navigate to="/projects" replace />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
