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
        destination: '/teleport/overview',
        permanent: false
      },
      {
        source: '/governance',
        destination: '/teleport/overview',
        permanent: false
      }
    ];
  }
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')([
  'lightweight-charts',
  'fancy-canvas',
  '@makerdao-dicu/makerdao-ui'
]);

module.exports = withTM(nextConfig);
