const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}))
          return webpackConfig
        },
      },
    },
  ],
  jest: {
    configure: {
      moduleNameMapper: { "^@(pages|routes|common|components|interface|img)/(.+)$": "<rootDir>/src/$1/$2" },
    },
  },
}
