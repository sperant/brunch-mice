exports.config = {

  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  paths: {
    watched: ["app/assets", "app/scripts", "app/styles"]
  },

  plugins: {
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions']),
      ]
    }
  },

}