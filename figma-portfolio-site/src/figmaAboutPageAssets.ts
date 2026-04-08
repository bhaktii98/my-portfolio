/**
 * About page imagery — local files in /public/about/
 */

const BASE_URL = import.meta.env.BASE_URL;

export const figmaAbout = {
  heroPortrait: `${BASE_URL}about/hero.png`,
  polaroid1: `${BASE_URL}about/polaroid-1.jpeg`,
  polaroid2: `${BASE_URL}about/bharatanatyam-performance.jpeg`,
  polaroid3: `${BASE_URL}about/polaroid-3.jpeg`,
  polaroid4: `${BASE_URL}about/polaroid-4.jpeg`,
} as const;
