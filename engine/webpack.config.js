var config = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: "./build"
  },
  devtool: "source-map",
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}

module.exports = config;