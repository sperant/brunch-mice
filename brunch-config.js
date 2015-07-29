exports.config = {

  files: {
    javascripts: {
      joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: 'css/app.css'
    }
  },

  paths: {
    watched: ['app']
  },

  plugins: {
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions']),
      ]
    }
  },

}