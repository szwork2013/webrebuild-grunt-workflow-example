module.exports = {
    files: 'src/css/*.less',
    tasks: ['clean:build_dev', 'less:build_dev', 'copy:build_dev', 'clean:tmp']
};