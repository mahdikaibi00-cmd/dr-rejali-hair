/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rejalimedical.com',
      },
      // You can add a generic placeholder domain here too since we used them in the code
      {
        protocol: 'https',
        hostname: 'api.placeholder.com', // Update this if you use a specific placeholder service
      }
    ],
  },
};

export default nextConfig; // Use `module.exports = nextConfig;` if it's a .js file instead of .mjs