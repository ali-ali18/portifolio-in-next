import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental:{
    optimizePackageImports: ["@hugeicons/react", "motion/react-m"],
  },
  images:{
    qualities:[75, 95],
    deviceSizes: [200, 220, 320, 400, 640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      }
    ]
  },
  compiler:{
    removeConsole: process.env.NODE_ENV === "production",
  }
};

export default nextConfig;
