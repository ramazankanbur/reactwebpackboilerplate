const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [ //eğer birden fazla loader kullanılacaksa use kullanılır
          'style-loader',
          'css-loader',
          'sass-loader' //arka planda node-sass paketini kullanır. bu paket bu paket scss i css e dönüştürür. sass-loader ise sayfaya import işlemi yapar
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map', //bu arkadaş hata vermesi durumunda console da doğru bir şekilde hata referansını gösteriyor
  devServer: {
    contentBase: path.join(__dirname, 'public') //değişiklikler ram'de tutulur dolayısı ile oldukça hızlıdır
  }
};
