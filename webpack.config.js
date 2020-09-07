const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    context: __dirname,
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            /* This will make the babel-loader handle all .js files. We have set up two presets in
             * our .babelrc file in the project root that tells babel how to handle these files.
             */
            {
                test: /\.(ts|js)x?$/,
                exclude: /(node_modules|dist|storybook-static|src\/vendors)/,
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            parser: '@typescript-eslint/parser',
                            configFile: './.eslintrc.json',
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, '../src'), 'node_modules'],
        extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.tsx', '.d.ts'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        })
    ]
};
