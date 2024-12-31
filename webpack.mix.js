let mix = require("laravel-mix");

mix
  .postCss('src/css/tailwind.css', 'assets', [ // Outputs to assets/tailwind.css
    require('tailwindcss'),
    require('autoprefixer'),
  ])
  .js('src/js/app.js', 'assets') // Outputs to assets/app.js
  .setPublicPath('./') // Sets the public path to the project root
  .version(); // Add versioning
  
