/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // SECURITY FIX: Replace the dangerous wildcard '**' with a strict allow-list.
        // This prevents SSRF and abuse of Vercel's image optimization service.
        hostname: 'avatars.githubusercontent.com', // For GitHub profile pictures
      },
      {
        protocol: 'https',
        // Common CDN for project images
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  // Performance and Security Headers
  async headers() {
    return [
      {
        // Apply headers to all routes
        source: '/:path*',
        headers: [
          // 1. Strict-Transport-Security (HSTS)
          // Forces communication over HTTPS for a long duration, protecting against protocol downgrade attacks.
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload', // 2 years
          },
          // 2. X-Content-Type-Options
          // Prevents the browser from MIME-sniffing a response away from the declared content-type (defense against XSS).
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // 3. X-Frame-Options
          // Prevents clickjacking by prohibiting the site from being loaded in a frame/iframe.
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // 4. Content-Security-Policy (CSP)
          // A strong defensive layer. This simple policy allows Vercel deployment and Google Fonts/Analytics (common dependencies).
          // NOTE: You MUST verify and adjust this policy for all your third-party scripts.
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self';` +
                   `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;` +
                   `font-src 'self' https://fonts.gstatic.com;` +
                   `img-src 'self' data: https://avatars.githubusercontent.com https://res.cloudinary.com;` + // Image domains from previous fix
                   `script-src 'self' 'unsafe-eval' 'unsafe-inline';` // Next.js often requires 'unsafe-eval'/'unsafe-inline' for development/inline scripts (like the FOUC fix). Review this carefully for production.
          },
        ],
      },
      // Caching for Static Assets (e.g., images, fonts, JS/CSS bundles in _next/static)
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year cache
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;