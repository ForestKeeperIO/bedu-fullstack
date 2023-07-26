const path = require('path');
const HtmlWebpackPlgin = require('html-webpack-plugin');

module.expors = {
    entry: './src/index.js',
    output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
},
    plugins: [
        new HtmlWebpackPlgin({
            filename: 'index.html',
            template: './src/index.html'
        })
        
    ]
}