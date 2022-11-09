const path = require('path')
const generateEntry = require('./generateEntry')
const generateTemplate = require('./generateTemplate')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const entry = generateEntry()
const templates = generateTemplate(entry)


module.exports = {
    mode: 'development',
    entry,
    output: {
        filename: '[name].[contenthash].js'
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        },
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },
    // target: 'node',
    devServer: {
        host: 'localhost',
        port: 8089,
        open: true
    },
    plugins: [
        ...templates,
        new MiniCssExtractPlugin()
    ]
}