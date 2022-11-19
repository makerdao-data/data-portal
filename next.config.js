/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
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
        destination: '/l2s#overview',
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
