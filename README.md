#Boilerplate

Personal starting point configuration for web projects.  Incorporates a few different ideas/systems mixed to my liking, use at own risk.

##Configuration
###Sass
For configuration options checkout /css/config.rb, /css/sass/system.scss & /css/sass/core/_settings.scss

####config.rb
For all available properties: http://compass-style.org/help/tutorials/configuration-reference/
Susy is REQUIRED by default.  If you are not planning on using susy you will need to edit the config and remove the 'required' string.

####system.scss
Master import file, susy and compass are enabled, to disable these options comment out their respective @import lines.

####styleguide.scss
Used in conjunction with styleguide.html, should only really need to edit certain styleguide specific variables, everything else will be pulled in from master sheet.

####_settings.scss
Variables & mixins file, as well as custom resets in addition to or overriding _normalize.scss.  Only basic properties added initially.

## Versionlog & Updates
###v1.2
+ Merged 'styleguide' project into this project.
+ Rearranged directories to allow for more indepth config.rb options
+ Made config.rb a bit more detailed
+ Made susy required moving forward(can still be removed, it's just included by default)

###v1.1.1
+ Created placeholder files(_nav.css & _articles.scss) to include missing directories(/css/sass/modules & /css/sass/themes) in repository.

###v1.1
+ Added universal stylesheet for IE8 down, just a minified version of https://code.google.com/p/universal-ie6-css/ by Andy Clarke.
+ Added susy support.