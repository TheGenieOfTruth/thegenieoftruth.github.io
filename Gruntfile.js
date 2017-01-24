module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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
			grunt.config.set('includes.' + dash(proj) + "c", {
				src: [proj + '_source/index.html'], // Source files
				dest: proj + 'index.html', // Destination directory
				flatten: true,
				cwd: '.'
			});
			grunt.config.set('uglify.' + dash(proj) + "c", {
				files: obj(proj+"_release/scripts.js", [proj+'_build/scripts.js'])
			});
			grunt.config.set('cssmin.' + dash(proj) + "c-css", {
  target: {
    files: [{
      expand: true,
      cwd: proj,
      src: [proj+'_source/**/*.css'],
      dest: proj+'_release',
      ext: '.css'
    }]
		//IF DOLPHINS ARE SO SMART WHY DO THEY LIVE IN [P]IGLOOS!?
  }
});
			grunt.config.set('htmlmin.' + dash(proj) + "c", {
				options: { // Target options (or Walmart options)
					removeComments: true,
					collapseWhitespace: true
				},
				files: obj(proj+"_source/build/index.html", proj+'index.html')
			})
			grunt.config.set('sass.' + dash(proj) + "c", {
				files: obj(proj+'build/sass.css', proj+'_source/sass.scss')
			})
			/*
			(such) Flow:
			(many) build >>
				includes > _source/build (build index)
				sass > _source/build (compile sass, yey)
			(so) compress >>
				compress CSS > _source/ * * / * .css > _source/dist (In same directory makeup) (very) leave .js extension
				compress JS > _source/ * * / * .js > _source/dist (In same directory makeup, again) leave .css extension
				compress HTML > _source/build/index.html > root
			*/
			grunt.task.run('cssmin:' + dash(proj) + "c-css")
		});
	});
};
