let mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix
  .js("src/js/app.js", "assets")
  .postCss("src/css/tailwind.css", "assets")
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("tailwind.config.js")],
  });