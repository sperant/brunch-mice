exports.config = {

  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      order: {
        before: ['vendor/styles/normalize.css'],
      },
      joinTo: 'app.css'
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