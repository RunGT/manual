import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
// To fix cors issue when attempting to fetch the quiz from the API
  async rewrites() {
    return [
      {
        source: "/api/quiz",
        destination:
          "https://manual-case-study.herokuapp.com/questionnaires/972423.json",
      },
    ];
  },
};

export default nextConfig;
