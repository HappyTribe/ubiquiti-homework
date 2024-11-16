import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.svc.ui.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
