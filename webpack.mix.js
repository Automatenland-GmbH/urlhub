let mix = require('laravel-mix');
require('laravel-mix-auto-extract');

mix.setPublicPath('public')
   .options({
      autoprefixer: false,
      processCssUrls: false,
      purifyCss: true
   })
   .autoExtract();

mix.sass('resources/sass/bootstrap-custom.scss', 'css/bootstrap-custom.css')
   .js('resources/js/frontend.js', 'js/frontend.js')
   .js('resources/js/backend.js', 'js/backend.js')
   .version([
      'public/css/backend.css',
      'public/css/frontend.css'
   ]);
