module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'polymer-webpack-loader'
        }
      ]
    },]
  }
}