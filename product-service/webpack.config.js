
const webpack = require('webpack')
const slsw = require('serverless-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isLocal = slsw.lib.webpack.isLocal;

module.exports = (async () => {
  const accountId = await slsw.lib.serverless.providers.aws.getAccountId();
  return {
    mode: isLocal ? 'development' : 'production',
    entry: slsw.lib.entries,
    target: 'node',
    plugins: [new ForkTsCheckerWebpackPlugin()],
    module: {
      loaders: []
    }
  };
})();