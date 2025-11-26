/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

  eslint: {
    // allows production builds to succeed even if
    // ESLint has errors in the project
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
