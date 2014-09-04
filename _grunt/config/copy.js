module.exports = {

    // 分支 -> 开发向
    build_dev: {
        files: [
            {expand: true, cwd: 'src/slice/', src: ['**'], dest: 'dev/slice/'},
            {expand: true, cwd: 'src/img/', src: ['**'], dest: 'dev/img/'},
            {expand: true, cwd: 'src/font/', src: ['**'], dest: 'dev/font/'},
        ]
    },
    // 分支 -> 发布向
    build_dist: {
        files: [
            {expand: true, cwd: 'tmp/css/', src: ['*.css', '!*.timestamp.css', '!*.sprite.css', '!*.min.css'], dest: './dist/css/'},
            {expand: true, cwd: 'src/img/', src: ['**'], dest: './dist/img/'},
            {expand: true, cwd: 'src/font/', src: ['**'], dest: './dist/font/'},
            {expand: true, cwd: 'tmp/sprite/', src: ['**'], dest: './dist/sprite/'}
        ]
    },
    // 移动 slice/ 到 tmp/ 供下一步的 sprite Task 使用
    build_dist_slice: {
        files: [
            {expand: true, cwd: 'src/slice/', src: ['**'], dest: 'tmp/slice/'},
        ]
    },
};