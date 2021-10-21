const path = require('path')

module.exports = async ({ config }) => {
  config.module.rules.push({
    // test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff2?$|\.ttf$|\.eot|\.wav$|\.mp3$/,

    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  })
  return config
}
