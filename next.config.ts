import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ allow production builds to continue even if ESLint finds warnings or errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
