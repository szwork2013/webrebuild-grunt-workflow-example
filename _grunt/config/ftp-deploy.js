module.exports = {
    push: {
        auth: {
            host: '<%= pkg.ftp.host %>',
            port: '<%= pkg.ftp.port %>',
            authKey: 'ftp'
        },
        src: 'dist/',
        dest: '<%= options.project_dir_name %>/',
        exclusions: ['**/.DS_Store', '**/Thumbs.db', 'tmp']
    }
};