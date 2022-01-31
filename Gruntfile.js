module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'jg@allmail.net',
                token: '4a42a736-bd38-4886-aaa2-dc0fd3e018a6',
                branch: 'default',
                //server: 'season'
            },
            dist: {
                src: ['scripts/*.js']
            }
        }
    });
}
