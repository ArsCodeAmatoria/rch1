import type {MetadataRoute} from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RCH1 Safety Knowledge",
    short_name: "RCH1",
    description: "Bilingual crane and construction safety knowledge platform.",
    start_url: "/en",
    display: "standalone",
    background_color: "#eaf2fb",
    theme_color: "#1f3d7a",
    lang: "en",
    icons: [
      {src: "/icon-192.png", sizes: "192x192", type: "image/png"},
      {src: "/icon-512.png", sizes: "512x512", type: "image/png"}
    ]
  };
}
