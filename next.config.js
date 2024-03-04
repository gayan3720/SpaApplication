/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/SpaApplication",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
