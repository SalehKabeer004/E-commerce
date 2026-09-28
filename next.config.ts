import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Agar aap ke backend/database mein kisi aur domain (e.g. Cloudinary, S3, etc.) ki images hain, unhe bhi yahan add kar dein:
      // {
      //   protocol: 'https',
      //   hostname: 'res.cloudinary.com',
      // },
    ],
  },
};

export default nextConfig;
