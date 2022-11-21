/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['.']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/l2s/overview',
        permanent: false
      },
      {
        source: '/l2s',
        destination: '/l2s/overview',
        permanent: false
      }
    ];
  }
};

const withTM = require('next-transpile-modules')([
  'lightweight-charts',
  'fancy-canvas',
  '@makerdao-dicu/makerdao-ui'
]);

module.exports = withTM(nextConfig);
