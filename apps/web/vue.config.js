const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            fallback: {
                fs: false,
                net: false,
                tls: false,
                crypto: require.resolve('crypto-browserify'),
                stream: require.resolve('stream-browserify'),
                url: require.resolve('url'),
                zlib: require.resolve('browserify-zlib'),
                http: require.resolve('stream-http'),
                https: require.resolve('https-browserify'),
                assert: require.resolve('assert'),
                os: require.resolve('os-browserify'),
                path: require.resolve('path-browserify'),
                'process/browser': require.resolve('process/browser'),
            },
        },
        plugins: [
            new webpack.ProvidePlugin({
                process: 'process/browser',
                Buffer: ['buffer', 'Buffer'],
            }),
        ],
    },
    chainWebpack: (config) => {
        config.module
            .rule('ignore')
            .test(/\.wasm$/)
            .use('ignore-loader')
            .loader('ignore-loader')
    },
})
