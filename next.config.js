/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.freetogame.com"],
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA(nextConfig);
