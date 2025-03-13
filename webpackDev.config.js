const path = require("path")
const Dotenv = require('dotenv-webpack');

module.exports = {
    target: "node",
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build")
    },
    watch: true,
    plugins: [
        new Dotenv()
    ]
}