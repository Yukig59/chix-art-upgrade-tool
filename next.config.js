const nextConfig = {
  distDir: "build",
  env:{
    HELIUS_API_KEY: process.env.HELIUS_API_KEY,
  }
};

module.exports = nextConfig;
