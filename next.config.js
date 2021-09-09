/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    domains: ["s3.amazonaws.com"],
  },
};
