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
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: false,
            minimize: isProd
          }
        },
      ]
    }
  ];
};
