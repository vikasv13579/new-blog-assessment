/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static generation for production
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,

  // Image optimization settings
  images: {
    unoptimized: true,
    domains: ['example.com'],
  },

  // Optimize for static generation
  trailingSlash: false,

  // Enable compression
  compress: true,
};

export default nextConfig;
