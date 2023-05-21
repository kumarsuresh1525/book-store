const { merge } = require('webpack-merge');
const commonConfig = require('../../webpack.common');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: envFile.REMOTE_ENTRY_BASE_PATH,
    }
};

module.exports = merge(commonConfig, prodConfig);
