import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "립밤 알리미",
    short_name: "립밤 알림",
    description: "정기적으로 림밥을 바를 시간을 알려줍니다.",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/bell.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/bell.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/bell-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
