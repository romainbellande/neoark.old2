module.exports = {
  stories: ['../src/**/*.stories.(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register',
  ],
  presets: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {},
      },
    },
    // {
    //   name: '@storybook/addon-docs/react/preset',
    //   options: {
    //     configureJSX: true,
    //     babelOptions: {},
    //     sourceLoaderOptions: null,
    //   },
    // },
  ],
};
