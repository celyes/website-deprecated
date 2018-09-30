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

mix.react('resources/assets/js/index.js', 'js')
    .sass('resources/assets/sass/app.scss', 'css')

mix.webpackConfig({
    output: {
        publicPath: "https://localhost:8000/public"
    },
    devServer: {
        hot: true, // this enables hot reload
        inline: true, // use inline method for hmr
    contentBase: path.join(__dirname, "public"),
    https: true, //true
    port: 8080,
    headers: { "Access-Control-Allow-Origin": "*" },
    watchOptions: {
        exclude: [/bower_components/, /node_modules/]
}
    },
    node: {
    fs: "empty",
    module: "empty"
    },
    });
    // Per this issue: https://github.com/JeffreyWay/laravel-mix/issues/1483
    
    Mix.listen("configReady", webpackConfig => {
    if (Mix.isUsing("hmr")) {
    // Remove leading '/' from entry keys
    webpackConfig.entry = Object.keys(webpackConfig.entry).reduce(
    (entries, entry) => {
    entries[entry.replace(/^\//, "")] = webpackConfig.entry[entry];
    // }
    console.log(entries);
    return entries;
    },
    {}
    );
    // Remove leading '/' from ExtractTextPlugin instances
    webpackConfig.plugins.forEach(plugin => {
    if (plugin.constructor.name === "ExtractTextPlugin") {
    console.log(plugin.filename);
    plugin.filename = plugin.filename.replace(/^\//, "");
    console.log(plugin.filename);
    }
    });
    }
});
