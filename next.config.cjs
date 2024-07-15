module.exports = {
  images: {
    domains: [
      'localhost', // For local development
      'marie-sooty.vercel.app', // Your Vercel deployment
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    return config;
  },
};
