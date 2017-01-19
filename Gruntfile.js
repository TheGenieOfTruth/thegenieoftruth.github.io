module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			js: {
				src: ['_source/**/*.js'],
				dest: '_build/scripts.js'
			},
			css: {
				src: ['_source/**/*.css'],
				dest: '_build/stylesheet.css'
			},
			sass: {
				src: ['_source/**/*.scss'],
				dest: '_build/sass.scss'
			}
		},
		includes: {
			files: {
				src: ['_source/index.html'], // Source files
				dest: '_build/index.html', // Destination directory
				flatten: true,
				cwd: '.'
			}
		},
		uglify: {
			target: {
				files: {
					'scripts.js': ['_build/scripts.js']
				}
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1,
				processImport: false
			},
			css: {
				files: {
					'stylesheet.css': ['_build/stylesheet.css'],
				}
			},
			sass: {
				files: {
					'sass.css': ['_build/sass.css'],
				}
			}
		},
		htmlmin: { // Task
			dist: { // Target
				options: { // Target options
					removeComments: true,
					collapseWhitespace: true
				},
				files: { // Dictionary of files
					'index.html': '_build/index.html' // 'destination': 'source'
				}
			}
		},
		sass: {
			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'_build/sass.css': '_source/sass.scss'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-includes');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-cssbeautifier');
	grunt.loadNpmTasks("grunt-jsbeautifier");
	grunt.loadNpmTasks('grunt-sass');
	grunt.registerTask('ba', 'This hurt, but I think it might work?', function() {
    var projects = [''];

    projects.forEach(function(proj){
		grunt.config.set('concat.'+proj+"c-js", {
    		src: [proj+'_source/**/*.js'],
    		dest: proj+"_build/scripts.js"
		});
		grunt.config.set('concat.'+proj+"c-css", {
    		src: [proj+'_source/**/*.css'],
    		dest: proj+"_build/scripts.css"
		});
		grunt.config.set('concat.'+proj+"c-sass", {
    		src: [proj+'_source/**/*.scss'],
    		dest: proj+"_build/scripts.scss"
		});
		grunt.config.set('includes.'+proj+"c", {
			src: [proj+'_source/index.html'], // Source files
			dest: proj+'_build/index.html', // Destination directory
			flatten: true,
			cwd: '.'
		});
	    	grunt.config.set('uglify.'+proj+"c", {
			files: {
				'scripts.js': ['_build/scripts.js']
			}
		});
	    	grunt.config.set('cssmin.'+proj+"c-css", {
			files: {
				'stylesheet.css': ['_build/stlyesheet.css']
			}
		});
	    	grunt.config.set('cssmin.'+proj+"c-sass", {
			files: {
				'sass.css': ['_build/sass.css']
			}
		});
	    	grunt.config.set('htmlmin.'+proj+"c",{
				options: { // Target options
					removeComments: true,
					collapseWhitespace: true
				},
				files: { // Dictionary of files
					'index.html': '_build/index.html' // 'destination': 'source'
				}
			})
		grunt.config.set('sass'+proj+"c",{
			files: {
					'_build/sass.css': '_source/sass.scss'
				}
		})
		grunt.task.run('concat:'+proj+"c-js");
		grunt.task.run('concat:'+proj+"c-css");
		grunt.task.run('concat:'+proj+"c-sass");
	    grunt.task.run('task:'+proj+"c")
		grunt.task.run('sass:'+proj+"c")
		grunt.task.run('includes:'+proj+"c");
	    grunt.task.run('cssmin:'+proj+"c-css")
	    grunt.task.run('cssmin:'+proj+"c-sass")
		grunt.task.run('htmlmin:'+proj+"c")
    });
});
	grunt.registerTask('build', ['concat', 'includes', 'sass', 'uglify', 'cssmin', 'htmlmin']);
	grunt.registerTask('default', ['concat', 'includes', 'sass', 'uglify', 'cssmin', 'htmlmin']);
};
