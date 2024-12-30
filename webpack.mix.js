let mix = require("laravel-mix");

mix
  .postCss("src/css/tailwind.css", "dist/css", [
    require("tailwindcss"),
    require("autoprefixer"),
  ])
  .js("src/js/app.js", "dist/js")
  .setPublicPath("dist")
  .version(); // Optional for cache-busting in production
