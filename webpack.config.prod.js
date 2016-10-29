var path = require('path');
    webpack = require('webpack');

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
            loader: "style-loader!raw-loader!sass-loader"
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
        })
    ]
};
