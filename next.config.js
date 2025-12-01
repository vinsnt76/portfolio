const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    // No 'unoptimized' flag needed for Vercel.
    // Add remote image domains here if you use external images in the future.
    // domains: ['example.com'],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};