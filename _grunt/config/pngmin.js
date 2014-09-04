module.exports = {
    compile: {
        options: {
            ext: '.png',
            force: true,
            iebug: true //IE6
        },
        files: [
            {
                src: ['<%= pkg.name %>/dist/sprite/*.png'],
                dest: '/<%= pkg.name %>/dist/sprite/'
            },
            {
                expand: true,
                cwd: '/<%= pkg.name %>/dist/img',
                src: ['**/*.png'],
                dest: '/<%= pkg.name %>/dist/img',
                ext: '.png'
            }
        ]
    } 
};