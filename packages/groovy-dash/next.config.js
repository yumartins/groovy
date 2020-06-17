const withFonts = require('next-fonts');
const withImages = require('next-images');
const path = require('path');

module.exports = withFonts(
  withImages({
    exclude: path.resolve(__dirname, 'src/assets/svgs'),
    webpack (config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      });

      return config;
    },

    exportTrailingSlash: true,
  }),
);
