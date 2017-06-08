var config = {
   entry: './index.js',
	
   output: {
      path:__dirname+'./build',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 7878
   },
	
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
         query: {
            presets: ['es2015', 'react']
         }
      },
        {
      test: /\.css$/,
      loader: "style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase",
      exclude: /node_modules\lib/
       },
       {
        test: /\.json$/,
        loader: 'json-loader'
      }

       ]
   }
	
}

module.exports = config;