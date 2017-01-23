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
		var projects = ['', '_sample/'];
		projects.forEach(function(proj) {
			function dash(x) {
				return x.replace("/", "-").replace("_", "-")
			}

			function obj(key, val) {
				var x = new Object()
				x[key] = val
				return x
			}
			grunt.config.set('concat.' + dash(proj) + "c-js", {
				src: grunt.file.readJSON(proj + "_source/manifest.json")["js"].map(function(val) {
					return proj + "_source/js/" + val
				}),
				dest: proj + "_build/scripts.js"
			});
			grunt.config.set('concat.' + dash(proj) + "c-css", {
				src: grunt.file.readJSON(proj + "_source/manifest.json")["css"].map(function(val) {
					return proj + "_source/css/" + val
				}),
				dest: proj + "_build/scripts.css"
			});
			grunt.config.set('concat.' + dash(proj) + "c-sass", {
				src: grunt.file.readJSON(proj + "_source/manifest.json")["sass"].map(function(val) {
					return proj + "_source/sass/" + val
				}),
				dest: proj + "_build/scripts.scss"
			});
			grunt.config.set('includes.' + dash(proj) + "c", {
				src: [proj + '_source/index.html'], // Source files
				dest: proj + '_build/index.html', // Destination directory
				flatten: true,
				cwd: '.'
			});
			grunt.config.set('uglify.' + dash(proj) + "c", {
				files: obj(proj+"scripts.js", [proj+'_build/scripts.js'])
			});
			grunt.config.set('cssmin.' + dash(proj) + "c-css", {
				files: obj(proj+'stylesheet.css', [proj+'_build/stlyesheet.css'])
			});
			grunt.config.set('cssmin.' + dash(proj) + "c-sass", {
				files: obj(proj+'sass.css', [proj+'_build/sass.css'])
			});
			grunt.config.set('htmlmin.' + dash(proj) + "c", {
				options: { // Target options
					removeComments: true,
					collapseWhitespace: true
				},
				files: obj(proj+"index.html", proj+'_build/index.html')
			})
			grunt.config.set('sass.' + dash(proj) + "c", {
				files: obj(proj+'_build/sass.css', proj+'_source/sass.scss')
			})
			grunt.task.run('concat:' + dash(proj) + "c-js");
			grunt.task.run('concat:' + dash(proj) + "c-css");
			grunt.task.run('concat:' + dash(proj) + "c-sass");
			grunt.task.run('sass:' + dash(proj) + "c");
			grunt.task.run('includes:' + dash(proj) + "c");
			grunt.task.run('cssmin:' + dash(proj) + "c-css")
			grunt.task.run('cssmin:' + dash(proj) + "c-sass")
			grunt.task.run('htmlmin:' + dash(proj) + "c")
		});
	});
	grunt.registerTask('build', ['concat', 'includes', 'sass', 'uglify', 'cssmin', 'htmlmin']);
	grunt.registerTask('default', ['concat', 'includes', 'sass', 'uglify', 'cssmin', 'htmlmin']);
};
