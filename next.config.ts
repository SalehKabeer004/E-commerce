import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://e-commerce-nine-vert-99.vercel.app/api/:path*", // Aapka live backend API endpoint
      },
    ];
  },
};

export default nextConfig;