module.exports = {
    sprite: {
        files: [
            {
                expand: true, //启用动态扩展
                cwd: 'tmp/css', // css文件源的文件夹
                src: ['*.css'], // 匹配规则
                dest: 'tmp/', //导出css和雪碧图的路径地址
                ext: '.sprite.css' // 导出的css名
            }
        ],
        // options
        options: {
            // OPTIONAL: Rendering engine: auto, canvas, gm
            'engine': 'gm',
            // OPTIONAL: Image placing algorithm: top-down, left-right, diagonal, alt-diagonal
            'algorithm': 'binary-tree',
            // 默认给雪碧图追加时间戳
            'imagestamp': false,
            // 默认给样式文件追加时间戳
            'cssstamp': false,
            // 文件新命名
            'newsprite': false
        }
    }
};