module.exports = {
    entry: './client.jsx',
    output: {
        filename: 'myfuckingblog.js',
        path: __dirname+'/public/js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/react']
                }
            }
        ]
    },
    resolve: {
       extensions: ['.js','.jsx']
    }
}