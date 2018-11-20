﻿const webpack = require("webpack");
const path = require("path");
const packageJson = require("./package.json");
const isProduction = process.env.NODE_ENV === "production";
const moduleName = "vocabulary";
module.exports = {
    entry: "./src/main.jsx",
    output: {
        path: path.resolve(__dirname, '../admin/personaBar/scripts/bundles/'),
        publicPath: isProduction ? "" : "http://localhost:8080/dist/",
        filename: moduleName + "-bundle.js"
    },
    resolve: {
        extensions: ["*", ".js", ".json", ".jsx"],
        modules: [
            path.resolve('./src'),           // Look in src first
            path.resolve('./node_modules')   // Last fallback to node_modules
        ]
    },

    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                enforce: "pre",
                use: [
                    'eslint-loader' 
                ]
            },
            { 
                test: /\.less$/, 
                use: [{
                    loader: 'style-loader'  // creates style nodes from JS strings
                  }, {
                    loader: 'css-loader'    // translates CSS into CommonJS
                  }, {
                    loader: 'less-loader'   // compiles Less to CSS
                  }]
            },
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            { 
                test: /\.(ttf|woff)$/, 
                use: {
                    loader: 'url-loader?limit=8192'
                }
            }
        ]
    },


    externals: require("dnn-webpack-externals"),

    plugins: isProduction ? [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(packageJson.version),
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        })
    ] : [
            new webpack.DefinePlugin({
                VERSION: JSON.stringify(packageJson.version)
            })
        ]
};