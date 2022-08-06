/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: ""
  },
  basePath: "/kansha-training",
  assetPrefix: "/kansha-training"
}

module.exports = nextConfig
