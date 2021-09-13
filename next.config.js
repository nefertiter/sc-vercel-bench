/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  optimizeFonts: true,
  crossOrigin: "anonymous",
  images: {
    domains: ["s3.amazonaws.com"],
  },
};
