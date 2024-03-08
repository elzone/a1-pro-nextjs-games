/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2norla3tyc4cn.cloudfront.net",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
