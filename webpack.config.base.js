var path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015'
          ],
          plugins: [
            'transform-object-assign'
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
					test: /\.css$/,
					loader: "style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]",
					include: __dirname
      },
      {
					test: /\.(png|svg|ttf|woff)$/,
					loader: 'file?emitFile=false'
			},
    ]
  },
  resolve: {
    root: [
      path.join(__dirname, 'src')
    ],
    extensions: ['', '.js']
  },
  output: {
    library: 'ReactHtmlParser',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React'
  }
};
