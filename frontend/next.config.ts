import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;
const isStaticExport = process.env.NEXT_STATIC_EXPORT === 'true';
const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:5000';

const nextConfig: NextConfig = {
  output: isStaticExport ? 'export' : undefined,
  basePath,
  trailingSlash: true,
  compress: true,

  // Proxy the Express/Mongo backend through a same-origin path so the
  // browser never needs CORS. Not available in static export mode.
  ...(!isStaticExport && {
    async rewrites() {
      return [
        { source: '/api-backend/:path*', destination: `${backendUrl}/api/:path*` },
        { source: '/uploads/:path*', destination: `${backendUrl}/uploads/:path*` },
      ];
    },
  }),

  // Remove console.log in production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Speed up builds by skipping type-check (run tsc separately in CI)
  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    unoptimized: process.env.NEXT_STATIC_EXPORT === 'true',
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
