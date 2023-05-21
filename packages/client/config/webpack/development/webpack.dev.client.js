const { merge } = require('webpack-merge');
const commonConfig = require('../../webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 3001,
        historyApiFallback: true
    },
    resolve: {
        fallback: {
            fs: false,
            path: false,
            os: false,
        },
    },
};

module.exports = merge(commonConfig, devConfig);
