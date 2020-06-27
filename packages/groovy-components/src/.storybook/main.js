module.exports = {
  stories: [
    '../docs/*.stories.mdx',
  ],

  addons: [
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        sourceLoaderOptions: null,
      },
    },
  ],
};
