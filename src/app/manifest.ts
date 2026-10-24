import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Fountain of Hope",
    description:
      "Woman-led community organization in Garissa County, Kenya working in maternal health, menstrual hygiene, education, and community resilience.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1026",
    theme_color: "#d946ef",
    icons: [
      {
        src: "/fohlogo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    scope: SITE_URL,
  };
}
