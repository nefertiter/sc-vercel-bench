/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  // {
  //   key: "Access-Control-Allow-Origin",
  //   value: "*",
  // },
  // {
  //   key: "Sec-Fetch-Mode",
  //   value: "no-cors",
  // },
];

module.exports = {
  reactStrictMode: true,
  optimizeFonts: true,
  crossOrigin: "anonymous",
  images: {
    domains: ["s3.amazonaws.com"],
  },
  font: {
    domains: ["s3.amazonaws.com"],
  },
  css: {
    domains: ["s3.amazonaws.com"],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
