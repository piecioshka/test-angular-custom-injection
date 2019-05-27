const path = require('path');

module.exports = {
    mode: 'development',
    // mode: 'production',

    resolve: {
        extensions: ['.ts', '.js']
    },

    entry: path.join(__dirname, 'src', 'main.ts'),

    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /.ts$/,
                use: 'ts-loader'
            }
        ]
    }
};
