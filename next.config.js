const basePath = process.env.NODE_ENV === 'production' ? '/nextpirates' : '';

module.exports = {
  reactStrictMode: true,
  basePath,
  assetPrefix: `${basePath}/`
};