module.exports = {
    entry: {
       app:"./test/app.js",
       html:"./test/index.html",
       css:"./test/css.js"
    },
    output: {
        path: "./dist/js/",
        filename: "[name].js"
    },
    module: {
        loaders:  [
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|woff|woff2|eot|ttf|svg)/, loader: 'url-loader?limit=100000' },
            {test:/\.html$/,loader:'file-loader?name=[name].[ext]' }
        ]
    }
};
