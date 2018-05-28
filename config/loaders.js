const { APP_DIR } = require('./paths');

module.exports = function getLoaders(mode) {
  const isProd = mode === 'production';
  return [
    {
      test: /\.js?$/,
      include: APP_DIR,
      exclude: [
        /node_modules/,
        /\.min\.js$/,
      ],
      use: 'babel-loader',
    },
    {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ];
};
