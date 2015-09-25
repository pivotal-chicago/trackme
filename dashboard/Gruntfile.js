module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.initConfig({
        jasmine: {
            customTemplate: {
                src: 'src/main/resources/static/js/*.js',
                options: {
                    specs: 'src/test/js/*.spec.js',
                    helpers: 'node_modules/jasmine-ajax/lib/mock-ajax.js',
                    vendor: [
                        "https://api.mapbox.com/mapbox.js/v2.2.2/mapbox.js",
                        "https://code.jquery.com/jquery-2.1.4.min.js",
                        //'https://raw.github.com/jasmine/jasmine-ajax/master/lib/mock-ajax.js'
                    ]
                }
            }
        }
    });
};