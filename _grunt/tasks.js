module.exports = function (grunt) {

    //grunt.registerTask('sprite-cssmin', ['copy:slice', 'sprite', 'timestamp', 'cssmin']);

    //表示几个不同的开发阶段
    // build_dev 开发阶段
    // build_dist 最终发布
    grunt.registerTask('build_dev', ['clean:build_dev', 'less:build_dev', 'copy:build_dev', 'watch', 'clean:tmp']);
    grunt.registerTask('build_dist', ['clean:build_dist', 'less:build_dist', 'copy:build_dist_slice', 'sprite', 'timestamp', 'cssmin', 'copy:build_dist', 'pngmin', 'clean:tmp']);


    //两种发布途径：
    //push 推去到 FTP
    //zip  在项目目录下压缩ZIP包
    grunt.registerTask('push', ['build_dist', 'ftp-deploy:push']);
    grunt.registerTask('zip', ['build_dist', 'compress']);

};