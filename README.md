# Brunch-mice

A simple brunch skeleton for front-end design creation.

Built with:
  - Jekyll
  - SASS
  - Babel for ES6 Support
  - Normalize.css
  - PostCSS with Autoprefixer

### Usage

Run for development purposes: ```jekyll build --watch & brunch watch --server```

Build for production: ```jekyll build & brunch build --production```


### Directory Structure

    .
    ├── app
    │   ├── assets
    │   │   ├── feed.xml
    │   │   └── index.html
    │   ├── jekyll
    │   │   ├── _includes
    │   │   │   └── head.html
    │   │   ├── _layouts
    │   │   │   └── default.html
    │   │   ├── _posts
    │   │   ├── feed.xml
    │   │   └── index.html
    │   ├── scripts
    │   │   └── app.js
    │   └── styles
    │       ├── _base.scss
    │       ├── _typography.scss
    │       ├── _variables.scss
    │       └── main.scss
    ├── bower_components/
    ├── node_modules/
    ├── public/
    ├── _config.yml
    ├── bower.json
    ├── brunch-config.json
    ├── package.json
    └── README.md