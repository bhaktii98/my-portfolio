import { useEffect, useRef } from "react";

/**
 * When this video enters native fullscreen, request portrait orientation (Android
 * Chrome / some Chromium browsers). iOS Safari often uses its own player and
 * may ignore orientation lock.
 */
export function usePortraitVideoFullscreen() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const getFullscreenElement = (): Element | null =>
      document.fullscreenElement ||
      (document as Document & { webkitFullscreenElement?: Element })
        .webkitFullscreenElement ||
      (document as Document & { mozFullScreenElement?: Element })
        .mozFullScreenElement ||
      null;

    const isThisVideoFullscreen = () => {
      const fs = getFullscreenElement();
      return fs === video;
    };

    const onFullscreenChange = () => {
      if (typeof screen === "undefined") return;
      const o = screen.orientation as
        | (ScreenOrientation & {
            lock?: (orientation: string) => Promise<void>;
            unlock?: () => void;
          })
        | undefined;

      if (isThisVideoFullscreen()) {
        o?.lock?.("portrait-primary").catch(() => {
          o?.lock?.("portrait").catch(() => {});
        });
      } else {
        try {
          o?.unlock?.();
        } catch {
          /* noop */
        }
      }
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    document.addEventListener("mozfullscreenchange", onFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
      document.removeEventListener("mozfullscreenchange", onFullscreenChange);
      try {
        const o = screen.orientation as { unlock?: () => void } | undefined;
        if (isThisVideoFullscreen()) o?.unlock?.();
      } catch {
        /* noop */
      }
    };
  }, []);

  return ref;
}
