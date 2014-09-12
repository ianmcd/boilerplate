'use strict';

module.exports = function(grunt) {
	//	loads grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	//	times tasks for future optimization
	require('time-grunt')(grunt);

	//configurable paths
	var config = {
		dev: 'http/dev',
		dist: 'http/www'
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		config: config,

		//	js concatenation
		concat: {
			dev: {
				src: ['<%= config.dev =%>/js/lib/jquery.2.0.3.min.js', '<%= config.dev =%>/js/lib/**/*.js', '<%= config.dev =%>/js/**/*.js', '!<%= config.dev =%>/js/production.js' ],
				dest: '<%= config.dev =%>/js/production.js',
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
				base: '<%= config.dev =%>'
			},
			dist: {
				base: '<%= config.dist =%>'
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
					cwd: '<%= config.dev =%>',
					src: '**/*.html',
					dest: '<%= config.dist =%>',
				}],
			},
		},

		//	image minification
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: '<%= config.dev =%>',
					src: ['**/*.{png,jpg,jpeg,gif,svg}'],
					dest: '<%= config.dist =%>',
				}],
			},
		},

		//	basic error checking for js files
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			beforeconcat: ['Gruntfile.js', '<%= config.dev =%>/js/**/*.js', '!<%= config.dev =%>/js/lib/**/*.js', '!<%= config.dev =%>/js/production.js', '!<%= config.dev =%>/js/production.min.js'],
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
			    '<%= config.dev =%>/css/system.css': '<%= config.dev =%>/sass/system.scss',
		    },
	    },
	    dist: {
		    files: {
			    '<%= config.dist =%>/css/system.css': '<%= config.dev =%>/sass/system.scss',
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
		    src: '<%= config.dev =%>/js/production.js',
		    dest: '<%= config.dev =%>/js/production.min.js',
	    },
	    dist: {
		    src: '<%= config.dev =%>/js/production.js',
		    dest: '<%= config.dist =%>/js/production.min.js',
	    },
		},

		//	watches files / runs tasks as needed
		watch: {
			js: {
				files: ['<%= config.dev =%>/js/*.js'],
		    tasks: ['jshint:beforeconcat', 'concat', 'uglify'],
			},
	    css: {
		    files: ['<%= config.dev =%>/sass/**/*.scss'],
		    tasks: ['sass:dev'],
	    },
	    livereload: {
		    options: {
		      livereload: true,
		    },
		    files: [
		      '<%= config.dev =%>/**/*.html',
		      '<%= config.dev =%>/**/*.css',
					'<%= config.dev =%>/**/*.js',
		    ],
	    }
		},

		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= config.dev =%>',
					src: '*.{txt,ico}',
					dest: '<%= config.dist =%>',
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
		'connect: dist',
	]);

	grunt.registerTask('default', [
		'build',
		'serve',
	]);
};
