import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  serverExternalPackages: ["nodemailer"],
  allowedDevOrigins: ["172.25.80.1", "localhost", "127.0.0.1"],
  async headers() {
    return [
      {
        // Keep the default Netlify site URL out of search results. The custom
        // production domain is canonical; this host is only a deployment alias.
        source: "/:path*",
        has: [{ type: "host", value: "fohproduction.netlify.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
