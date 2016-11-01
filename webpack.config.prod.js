var path = require('path');
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');;

module.exports = {
    entry: {
        index: [
            './src/my_component_name'
        ]
    },
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: "my-component-name",
        libraryTarget: "umd"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: [
                path.join(__dirname, 'examples'),
                path.join(__dirname, 'src')
            ]
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style-loader', // is our "before"
                ['raw-loader', 'sass-loader']
            )
        }]
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new ExtractTextPlugin('index.css'),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                 NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};
