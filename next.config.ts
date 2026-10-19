import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sahilm416.vercel.app" }],
        destination: "https://www.sahilmulani.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
