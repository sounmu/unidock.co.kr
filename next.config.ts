import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    // The extension's store listing and update notice link to /privacy.html.
    return [{ source: "/privacy.html", destination: "/privacy", permanent: true }];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
