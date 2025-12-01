const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // No 'unoptimized' flag needed for Vercel.
    // Add remote image domains here if you use external images in the future.
    // domains: ['example.com'],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  experimental: {
    turbo: false,
  },
};

module.exports = nextConfig;