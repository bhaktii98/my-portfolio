/**
 * Image URLs from Figma MCP (html.to.design portfolio import).
 * These links expire after ~7 days — re-export from Figma or replace with permanent CDN URLs.
 * Source file: https://www.figma.com/design/5ocVsmRlUXEabgaFEquK67/...
 */

const BASE_URL = import.meta.env.BASE_URL;

export const assets = {
  avatar1: `${BASE_URL}about/polaroid-1.jpeg`,
  avatar2: `${BASE_URL}about/bharatanatyam-performance.jpeg`,
  avatar3: `${BASE_URL}about/polaroid-3.jpeg`,
  heroIllustration:
    "https://www.figma.com/api/mcp/asset/3a36e58a-a4cd-4575-856f-2c4909e4eee3",
  heroGlow: "https://www.figma.com/api/mcp/asset/7abd4f7a-7e52-4c28-a50d-c48cde2c919d",
  project1a:
    "https://www.figma.com/api/mcp/asset/79b099c1-4c8b-46e7-a89c-4ac18f7be03a",
  project1b:
    "https://www.figma.com/api/mcp/asset/139e4b89-5c77-4d95-a190-0b7c4b2d472e",
  project2a:
    "https://www.figma.com/api/mcp/asset/00a51619-db1e-466c-b53f-611fb068666e",
  project2b:
    "https://www.figma.com/api/mcp/asset/a900de3b-4a6d-4dd4-b915-e8ae71321210",
  project3a:
    "https://www.figma.com/api/mcp/asset/e029fd97-b8e7-4ea5-a455-594330f59b10",
  project3b:
    "https://www.figma.com/api/mcp/asset/cfb0ca4a-3e2f-4b90-8c7c-0f56beb415f0",
  project4a:
    "https://www.figma.com/api/mcp/asset/b8483983-4578-4428-ac1f-87d75bf80718",
  project4b:
    "https://www.figma.com/api/mcp/asset/7677a75e-6e5b-4c3d-9dd3-3ce9e0705e7e",
  hireA:
    "https://www.figma.com/api/mcp/asset/c2240d12-434c-4912-b0c6-b81cae4c3993",
  hireB:
    "https://www.figma.com/api/mcp/asset/b619051b-02e8-4e1a-9d3b-f45dd73ca4cc",
  hireC:
    "https://www.figma.com/api/mcp/asset/420c97d2-383a-4ee3-8ea5-c95f976ede3a",
  hireD:
    "https://www.figma.com/api/mcp/asset/2a75548c-e476-4010-9acc-c42c2ed5446f",
  hireFullscreen:
    "https://www.figma.com/api/mcp/asset/3c7656ba-bde5-48f6-9666-9d96378351ef",
} as const;
