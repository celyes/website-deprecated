const mix = require('laravel-mix');

/**
 * added functionality to use common libraries as externals
 * instead of bundling them along with our app.js
 * 
 */


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public');

mix
    .webpackConfig({
        externals:{
            'jquery':'jQuery',
            'vue':'Vue',
        }
    })
    .js('resources/assets/js/app.js', 'js')
    .sass('resources/assets/sass/app.scss', 'css')
    .autoload({
        jquery: ['$', 'jQuery', 'jquery', 'window.jQuery'],
        'popper.js/dist/umd/popper.js': ['Popper']
    })
    .extract(['jquery', 'popper.js', 'bootstrap'])
    .options({
        processCssUrls: false
    });
