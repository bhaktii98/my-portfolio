import { useEffect } from "react";

const JALSANCHAY_PDF =
  "/jalsanchay/" + encodeURIComponent("Jal sanchay (1).pdf");

/** Legacy URL `/projects/jalsanchay` → static PDF */
export function JalSanchayPdfRedirect() {
  useEffect(() => {
    window.location.replace(JALSANCHAY_PDF);
  }, []);
  return null;
}
