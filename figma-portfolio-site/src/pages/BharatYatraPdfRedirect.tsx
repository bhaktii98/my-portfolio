import { useEffect } from "react";

/** Legacy URL `/projects/bharatyatra` → static PDF */
export function BharatYatraPdfRedirect() {
  useEffect(() => {
    window.location.replace(
      `${import.meta.env.BASE_URL}bharatyatra/BharatYatra.pdf`,
    );
  }, []);
  return null;
}
