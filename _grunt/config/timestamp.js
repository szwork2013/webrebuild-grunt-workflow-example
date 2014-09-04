module.exports = {
    timestamp: {
        files: [{
            // Use dynamic extend name
            expand: true,
            // Open source dir
            cwd: 'tmp/css',
            // Match files
            src: ['*.sprite.css'],
            // Output files
            dest: 'tmp/css',
            // Set extend middle name
            ext: '.timestamp'
        }],
        options: {
            // Timestamp display text
            'timestampName': 'Timetamp',
            // Date format
            'timestampFormat': 'yyyy/mm/dd HH:MM:ss',
            // Add timestamp at the end of the files' content(.css/.js).
            'timestampType': 'time',
            // Timestamp type like time(2014/04/02 22:17:07) | md5/sha1/ha256/sha512).
            'fileEndStamp': false,
            // Add timestamp at images of CSS style.
            'cssImgStamp': false,
            // Rename file name with timestamp inside.
            'fileNameStamp': false
        }
    }
};