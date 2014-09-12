#Boilerplate

Personal starting point configuration for web projects.  Incorporates a few different ideas/systems mixed to my liking, use at own risk.  Newest version is still very new and parts are untested.


##Configuration
Use of this system assumes you know how to configure [Grunt](http://gruntjs.com/), [Sass](http://sass-lang.com/) and optionally [Susy](http://susy.oddbird.net/).  To remove Susy support edit Gruntfile.js and system.scss.

####system.scss
Master import file, susy and compass are enabled, to disable these options comment out their respective @import lines.

####_settings.scss
Variables & mixins file, as well as custom resets in addition to or overriding _normalize.scss.  Only basic properties added initially.


##Basic usage

In console:

	grunt serve

Starts a livereload server on port :4444 and watches the dev directory for file changes, compiling sass and minifying js before refreshing.

	grunt build

Builds application from dev directory, minifying and optimizing into dist directory.


## Versionlog & Updates
###v0.2.4
####VERSION CURRENTLY UNTESTED
+ Fixed more(heh) README mispellings!
+ Added grunt tasks: grunt-contrib-clean, grunt-concurrent
+ Updated package versions
+ Added configurable paths to Gruntfile.js
+ Added Sass sourcemapping
+ Added JS sourcemapping


###v0.2.3
+	Added bootstrap.css cdn for convenience(rapid dev)
+ Fixed issue where css building would repeat after changes to sass files
+ Updated the concat statement in Gruntfile.js to always load jquery first followed by every other lib file
+ Removed errant punctuation from README file ;)

###v0.2.2
+ Fixed issue where LiveReload was not firing on updates to css & js files
+ Fixed issue where jshint was debugging library files & already concatenated files
+ Removed jshint:afterconcat from Grunfile.js
+	Removed angular.js & main.js from lib directory
+ Removed following grunt plugins:
	+ grunt-ngmin
	+ karma
	+ grunt-karma

###v0.2.1
+ Restructured to be a bit more effective
+ Removed styleguide
+ Added angular.js and grunt-ngmin
+ Add multiple grunt plugins:
	+ grunt-contrib-connect
	+ grunt-contrib-copy
	+ grunt-contrib-htmlmin
	+ grunt-contrib-jshint
	+ grunt-ngmin
	+ jshint-stylish
	+ karma
	+ grunt-karma
	+ time-grunt
	+ load-grunt-tasks

###v0.2.0
+ Completely rearranged directory structure
+ Added grunt & grunt configuration files, added support for:
	+ grunt-contrib-concat(https://github.com/gruntjs/grunt-contrib-concat)
	+ grunt-contrib-uglify(https://github.com/gruntjs/grunt-contrib-uglify)
	+ grunt-contrib-imagemin(https://github.com/gruntjs/grunt-contrib-imagemin)
	+ grunt-contrib-sass(https://github.com/gruntjs/grunt-contrib-sass)
	+ grunt-contrib-watch(https://github.com/gruntjs/grunt-contrib-watch)

###v0.1.2
+ Merged 'styleguide' project into this project.
+ Rearranged directories to allow for more indepth config.rb options
+ Made config.rb a bit more detailed
+ Made susy required moving forward(can still be removed, it's just included by default)

###v0.1.1
+ Created placeholder files(_nav.css & _articles.scss) to include missing directories(/css/sass/modules & /css/sass/themes) in repository

###v0.1
+ Added universal stylesheet for IE8 down, just a minified version of https://code.google.com/p/universal-ie6-css/ by Andy Clarke
+ Added susy support
