module.exports = function (grunt) {
    require("matchdep").filterDev('grunt-*', '../_grunt/package.json').forEach(grunt.loadNpmTasks);
    grunt.initConfig(require('../_grunt/config/index')(grunt));
    require('../_grunt/tasks.js')(grunt);
};