/* THIS FILE ALLOWS YOU TO DO WEBPACK CONFIGURATIONS OR PLUGINS AND STYLING */

// WHAT'S NEEDED FOR SASS
const withSass = require("@zeit/next-sass");
const withCSS = require('@zeit/next-css');

//const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')
module.exports = withSass(withCSS({
    // webpack(config) {
    //     config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
    //     return config
    // }
}))
