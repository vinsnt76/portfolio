/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // No 'unoptimized' flag needed for Vercel.
    // Add remote image domains here if you use external images in the future.
    // domains: ['example.com'],
  },
};

export default nextConfig;