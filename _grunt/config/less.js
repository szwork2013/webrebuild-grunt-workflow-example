module.exports = {
    // 分支 -> 开发向
    build_dev: {
        files: [
            {
                expand: true, //启用动态扩展
                cwd: 'src/css/', // css文件源的文件夹
                src: ['*.less', '!import*.less', '!mod-*.less', '!lib-*.less'], // 匹配规则
                dest: 'dev/css/', //导出css和雪碧图的路径地址
                ext: '.css' // 导出的css名
            }
        ],
        options: {
            yuicompress: false
        }
    },
    // 分支 -> 发布向
    build_dist: {
        files: [
            {
                expand: true, //启用动态扩展
                cwd: 'src/css/', // css文件源的文件夹
                src: ['*.less', '!import*.less', '!mod-*.less', '!lib-*.less'], // 匹配规则
                dest: 'tmp/css/', //导出css和雪碧图的路径地址
                ext: '.css' // 导出的css名
            }
        ],
        options: {
            yuicompress: true
        }
    }
};