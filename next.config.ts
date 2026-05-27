import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  compress: true,

  // Remove console.log in production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Speed up builds by skipping type-check (run tsc separately in CI)
  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'ui-avatars.com' },
    ],
  },

  // Improve module resolution performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
