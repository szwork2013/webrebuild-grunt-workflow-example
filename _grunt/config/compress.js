module.exports = {
    main: {
        options: {
            archive: 'dist.zip'
        },
        files: [
            { expand: true, src: "**/*", cwd: "dist/" }
        ]
    }   
};