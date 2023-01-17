/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/games",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["www.freetogame.com"],
  },
};

module.exports = nextConfig;
