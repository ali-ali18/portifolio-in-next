import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["@hugeicons/react", "motion/react-m"],
  },
  images: {
    qualities: [1, 65, 75, 95],
    deviceSizes: [200, 220, 320, 400, 640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default withMDX(nextConfig);
