/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['.']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/l2s#overview',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
