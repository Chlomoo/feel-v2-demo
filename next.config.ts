import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Commenté temporairement pour le développement local
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
