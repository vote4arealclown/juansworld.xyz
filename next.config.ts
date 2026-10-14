import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The games section was removed when the site was rebuilt (2026-10-13).
      {
        source: "/games",
        destination: "/",
        permanent: true,
      },
      {
        source: "/games/:slug*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
