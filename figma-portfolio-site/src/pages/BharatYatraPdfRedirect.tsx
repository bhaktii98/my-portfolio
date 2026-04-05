import { useEffect } from "react";

/** Legacy URL `/projects/bharatyatra` → static PDF */
export function BharatYatraPdfRedirect() {
  useEffect(() => {
    window.location.replace("/bharatyatra/BharatYatra.pdf");
  }, []);
  return null;
}
