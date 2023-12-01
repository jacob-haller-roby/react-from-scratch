const path = require("path")
module.exports = {
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public", "javascripts")
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },

            }
        ]
    }
}