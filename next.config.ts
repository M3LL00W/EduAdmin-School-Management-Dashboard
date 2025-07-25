/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: false, // <-- We are turning automatic registration OFF
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  // Your Next.js config can go here
};

module.exports = withPWA(nextConfig);