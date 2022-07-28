// next.config.js
module.exports = {
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/pack',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/pack',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/ca/pack',
        destination: '/ca',
        permanent: true,
      },
    ]
  },
};
