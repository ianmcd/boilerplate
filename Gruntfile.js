module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
	            src: [
	            	'dev/js/jquery.2.0.3.min.js',
	            	'dev/js/main.js'
	            ],
	            dest: 'prod/js/production.js',
            }
        },
        uglify: {
	        build: {
		        src: 'prod/js/production.js',
		        dest: 'prod/js/production.min.js'
	        }
        }, 
        imagemin: {
	        dynamic: {
		        files: [{
			        expand: true,
			        cwd: 'dev/img/',
			        src: ['**/*.{png,jpg,gif}'],
			        dest: 'prod/img/'
		        }]
	        }
        }, 
        sass: {
	        dist: {
		        options: {
			        style: 'compressed',
			        compass: 'true', 
			        require: 'susy'
		        },
		        files: {
			        'prod/css/system.css': 'dev/sass/system.scss',
			        'prod/css/styleguide.css': 'dev/sass/styleguide.scss'
		        }
	        }
        },
        watch: {
	        scripts: {
		        files: ['dev/js/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
			        spawn: false
		        }
	        }, 
	        css: {
		        files: ['dev/sass/*.scss'],
		        tasks: ['sass'],
		        options: {
			        spawn: false
		        }
	        }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'watch']);
};