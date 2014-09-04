var path = require('path');

module.exports = function (grunt) {
    return {
        options: {
            project_dir_name:  process.cwd().split(path.sep).pop()
        },
        pkg: grunt.file.readJSON('package.json'),
        clean: require('./clean'),
        compress: require('./compress'),
        copy: require('./copy'),
        cssmin: require('./cssmin'),
        timestamp: require('./timestamp'),
        "ftp-deploy": require('./ftp-deploy'),
        less: require('./less'),
        pngmin: require('./pngmin'),
        sprite: require('./sprite'),
        watch: require('./watch')
    };
};