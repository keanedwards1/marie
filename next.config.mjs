/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      // Add any custom webpack configurations here
      return config;
    },
    swcMinify: true,
  };
  
  export default nextConfig;