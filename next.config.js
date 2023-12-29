/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["demo2.wpopal.com"],
  },
};

module.exports = nextConfig;

const withVideos = require("next-videos");

module.exports = withVideos();
