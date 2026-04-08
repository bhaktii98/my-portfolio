import { useEffect } from "react";

/** Legacy URL `/projects/anantara` → full navigation to static PDF */
export function AnantaraPdfRedirect() {
  useEffect(() => {
    window.location.replace(`${import.meta.env.BASE_URL}anantara/Anantara.pdf`);
  }, []);
  return null;
}
