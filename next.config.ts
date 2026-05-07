import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  // Trailing slash ensures CDN/static hosts serve index.html correctly
  trailingSlash: true,
  // Compress output for smaller page payloads
  compress: true,
  images: {
    // Required for static export — optimization happens at build/CDN layer
    unoptimized: true,
    // Prefer modern formats when served via an image CDN in front of the export
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
  },
};

export default nextConfig;
