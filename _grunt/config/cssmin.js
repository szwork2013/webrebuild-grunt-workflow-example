module.exports = {
    min: {
        files: [
            {
                expand: true,
                cwd: 'tmp/css',
                src: ['*.timestamp.css'],
                dest: 'tmp/css',
                ext: '.css'
            }
        ]
    }
};