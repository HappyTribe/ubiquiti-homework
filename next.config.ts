import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "do.not.pass.images.through.vercel",
        port: "",
      },
    ],
  },
};

export default nextConfig;
