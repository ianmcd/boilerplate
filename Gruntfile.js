'use strict';

module.exports = function(grunt) {
	//	loads grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	//	times tasks for future optimization
	require('time-grunt')(grunt);

	//configurable paths
	var config = {
		dev: 'http/dev',
		dist: 'http/dist'
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		config: config,

		//	js concatenation
		concat: {
			dev: {
				src: ['http/dev/js/lib/jquery.2.0.3.min.js', 'http/dev/js/lib/**/*.js', 'http/dev/js/**/*.js', '!http/dev/js/production.js' ],
				dest: 'http/dev/js/production.js',
			},
		},

		//	grunt server
		connect: {
			options: {
				port: 4444,
				hostname: 'localhost',
				open: true,
				livereload: 35729
			},
			dev: {
				options: {
					base: 'http/dev'
				}
			},
			dist: {
				options: {
					base: 'http/dist'
				}
			}
		},

		//	html minification
		htmlmin: {
			dist: {
				options: {
					collapseWhitespace: true,
					collapseBooleanAttributes: true,
					removeComments: true,
					removeRedundantAttributes: true,
          useShortDoctype: true
				},
				files: [{
					expand: true,
					cwd: 'http/dev',
					src: '**/*.html',
					dest: 'http/dist',
				}],
			},
		},

		//	image minification
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'http/dev',
					src: ['**/*.{png,jpg,jpeg,gif,svg}'],
					dest: 'http/dist',
				}],
			},
		},

		//	basic error checking for js files
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			beforeconcat: ['Gruntfile.js', 'http/dev/js/**/*.js', '!http/dev/js/lib/**/*.js', '!http/dev/js/production.js', '!http/dev/js/production.min.js'],
		},

		//	sass
		sass: {
			options: {
				sourcemap: true,
				style: 'compressed',
				compass: 'true',
				require: 'susy'
		    },
			dev: {
		    files: {
			    'http/dev/css/system.css': 'http/dev/sass/system.scss',
		    },
	    },
	    dist: {
		    files: {
			    'http/dist/css/system.css': 'http/dev/sass/system.scss',
		    },
	    },
		},

		// clean dist directory
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
					]
				}],
				server: '.tmp'
			}
		},

		//	js minification
		uglify: {
			options: {
				sourceMap: true,
			},
	    dev: {
		    src: 'http/dev/js/production.js',
		    dest: 'http/dev/js/production.min.js',
	    },
	    dist: {
		    src: 'http/dev/js/production.js',
		    dest: 'http/dist/js/production.min.js',
	    },
		},

		//	watches files / runs tasks as needed
		watch: {
			js: {
				files: ['http/dev/js/*.js', '!http/dev/js/production.min.js'],
		    tasks: ['jshint:beforeconcat', 'concat', 'uglify:dev'],
			},
	    css: {
		    files: ['http/dev/sass/**/*.scss'],
		    tasks: ['sass:dev'],
	    },
	    livereload: {
		    options: {
		      livereload: true,
		    },
		    files: [
		      'http/dev/**/*.html',
		      'http/dev/**/*.css',
					'http/dev/**/*.js',
		    ],
	    }
		},

		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: 'http/dev',
					src: '*.{txt,ico}',
					dest: 'http/dist',
				}],
			},
		},
	});

	//	TASKS

	grunt.registerTask('serve', [
		'concat',
		'uglify:dev',
		'sass:dev',
		'connect:dev',
		'watch',
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'concat',
		'uglify:dist',
		'sass:dist',
		'htmlmin',
		'imagemin',
		'copy',
		'connect:dist',
		'watch'
	]);

	grunt.registerTask('default', [
		'build',
		'serve',
	]);
};
