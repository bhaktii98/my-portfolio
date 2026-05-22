import { Link, useLocation } from "react-router-dom";

const RESUME =
  "https://drive.google.com/file/d/1cJ_vu4LZ1OqMLjZEm4Sj3rvOd0qb2Dx-/view?usp=sharing";

export function Navigation() {
  const { pathname } = useLocation();
  const home = pathname === "/";

  return (
    <header className="nav-wrap">
      <nav className="nav-pill" aria-label="Primary">
        {home ? (
          <a href="#top">Bhakti Dangri</a>
        ) : (
          <Link to="/">Bhakti Dangri</Link>
        )}
        <Link
          to="/about"
          aria-current={pathname === "/about" ? "page" : undefined}
        >
          About
        </Link>
        <Link
          to="/projects"
          aria-current={pathname.startsWith("/projects") ? "page" : undefined}
        >
          Projects
        </Link>
        <a href={RESUME} target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>
    </header>
  );
}
