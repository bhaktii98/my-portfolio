import { Link, useLocation } from "react-router-dom";

const RESUME =
  "https://drive.google.com/file/d/1Nv1QZcsyUaFVUVMmNG-yBwTQ-paiQSsq/view";

export function Navigation() {
  const { pathname } = useLocation();
  const home = pathname === "/";
  const about = pathname === "/about";

  if (about) {
    return (
      <header className="nav-wrap nav-wrap--figma">
        <nav className="nav-figma" aria-label="Primary">
          <Link to="/" className="nav-figma__brand">
            Bhakti Dangri
          </Link>
          <div className="nav-figma__links">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <a href={RESUME} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="nav-wrap">
      <nav className="nav-pill" aria-label="Primary">
        {home ? (
          <a href="#top">Bhakti Dangri</a>
        ) : (
          <Link to="/">Bhakti Dangri</Link>
        )}
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <a href={RESUME} target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>
    </header>
  );
}
