const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
console.log("PATH"+":"+path.resolve(__dirname));
module.exports = {
    entry:{
        main: "./src/client/js/main.js",
        admin: "./src/client/js/admin.js"
    },
    mode: "development",
    watch:true,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/styles.css"
        })
    ],
    output: {
        filename: "js/[name].js",
        clean: true,
        path: path.resolve(__dirname, "assets")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env", { targets: "defaults"}]],
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }
        ]
    }
}
