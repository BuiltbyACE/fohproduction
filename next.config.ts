import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  serverExternalPackages: ["nodemailer"],
  allowedDevOrigins: ["172.25.80.1", "localhost", "127.0.0.1"],
};

export default nextConfig;
