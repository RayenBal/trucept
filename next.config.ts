import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ allow production builds to continue even if ESLint finds warnings or errors
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
