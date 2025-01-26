/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export',
images: {
    unoptimized: true,
},
pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Ignore files directory during build
  webpack: (config) => {
    config.module.rules.push({
      test: /\/files\//,
      loader: 'ignore-loader',
    });
    return config;
  },
  // Tell Next.js to treat /files as static
  trailingSlash: true,
  assetPrefix: '.',
};

export default nextConfig;
