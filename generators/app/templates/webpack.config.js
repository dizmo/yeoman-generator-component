module.exports = {
    devtool: 'source-map',
    entry: [
        './dist/lib/index.js'
    ],
    module: {
        rules: [{
            test: /\.js$/i,
            use: ['source-map-loader'],
            enforce: 'pre'
        }, {
            test: /\.(s[ac]ss|css)$/i,
            use: [{
                loader: 'style-loader',
                options: { insert }
            }, {
                loader: 'css-loader',
                options: { sourceMap: false }
            }, {
                loader: 'sass-loader',
                options: { sourceMap: false }
            }]
        }]
    },
    output: {
        environment: {
            arrowFunction: false
        }
    }
};
function insert(style) {
    const head = document.querySelector('head');
    const links = head.querySelectorAll('link');
    if (links.length > 0) {
        head.insertBefore(style, links[links.length - 1]);
    } else {
        head.append(style);
    }
}
