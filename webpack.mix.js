let mix = require('laravel-mix');

mix
  .sass('src/style.scss', 'css')
  .js('src/script.js', 'js').vue({ version: 2 });
