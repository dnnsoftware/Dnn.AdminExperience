const isAnalyze = process.env.NODE_ENV === "analyze";
const isProduction = process.env.NODE_ENV === "production";
const packageJson = require("./package.json");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const webpackExternals = require("dnn-webpack-externals");

module.exports = {
    entry: "./src/main.jsx",
    output: {
        path: path.resolve(__dirname, "../admin/personaBar/scripts/bundles/"),
        filename: "pages-bundle.js",
        publicPath: isProduction ? "" : "http://localhost:8080/dist/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "eslint-loader", options: { fix: true } },
                enforce: "pre"               
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { 
                    loader: "babel-loader", 
                    options: { presets: ["@babel/preset-env", "@babel/preset-react"] } 
                }
            },
            { 
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                },{
                    loader: "less-loader"
                }]
            },
            { 
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                }]            
            },
            { 
                test: /\.(ttf|woff|gif|png)$/,
                use: {
                    loader: "url-loader?limit=8192"
                }
            }
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".json", ".jsx"],
        modules: [
            path.resolve('./src'),          // Look in src first
            path.resolve('./node_modules')  // Last fallback to node_modules
        ]
    },
    externals: webpackExternals,
    optimization: isProduction ? {
        minimizer: [new UglifyJsPlugin()]
    } : {

    },
    plugins: isProduction ? [
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