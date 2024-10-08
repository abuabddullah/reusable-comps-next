/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
