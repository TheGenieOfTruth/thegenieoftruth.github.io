module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            all: {
                files: ['**/*'],
                tasks: ["ba"],
                options: {
                    spawn: false
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
    grunt.loadNpmTasks('grunt-prettify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.registerTask('ba', 'This hurt, but I think it might work?', function() {
        var projects = ['sample/', '404/'];
        projects.forEach(function(proj) {
            function dash(x) {
                return x.replace("/", "-").replace("_", "-")
            }

            function obj(key, val) {
                var x = new Object()
                x[key] = val
                return x
            }
            grunt.config.set('copy.' + dash(proj) + "c", {
                src: 'base/index.html',
                dest: proj + 'source/index.html',
            });
            grunt.config.set('includes.' + dash(proj) + "c", {
                src: [proj + 'source/index.html'], // Source files
                dest: proj + 'release/index.html', // Destination directory
                flatten: true,
                cwd: '.'
            });
            grunt.config.set('uglify.' + dash(proj) + "c", {
                extDot: true,
                expand: true,
                cwd: proj + "source/",
                src: ['**/*.js'],
                dest: proj + 'release/',
                ext: '.min.js'
                //IF DOLPHINS ARE SO SMART WHY DO THEY LIVE IN [P]IGLOOS!?
            });
            grunt.config.set('cssmin.' + dash(proj) + "c", {
                extDot: true,
                expand: true,
                cwd: proj + "source",
                src: ['**/*.css'],
                dest: proj + 'release/',
                ext: '.min.css'
                //IF DOLPHINS ARE SO SMART WHY DO THEY LIVE IN [P]IGLOOS!?
            });
            grunt.config.set('cssmin.' + dash(proj) + "s", {
                extDot: true,
                expand: true,
                cwd: proj + 'release/temp',
                src: ['**/*.css'],
                dest: proj + 'release/',
                ext: '.min.css'
                //IF DOLPHINS ARE SO SMART WHY DO THEY LIVE IN [P]IGLOOS!?
            })
            grunt.config.set('htmlmin.' + dash(proj) + "c", {
                options: { // Target options (or Walmart options)
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: obj(proj + "index.html", proj + 'release/index.html')
            })
            grunt.config.set('cssbeautifier.' + dash(proj) + "c", {
                src: [proj + "source/**/*.css", "!" + proj + "source/**/*.min.css"],
                options: {
                    indent: '   ',
                    openbrace: 'end-of-line',
                    autosemicolon: true
                }
            })
            grunt.config.set('jsbeautifier.' + dash(proj) + "c", {
                src: [proj + "source/**/*.js", "!" + proj + "source/**/*.min.js"],
                options: {
                    indentChar: "   ",
                    indentSize: 1
                }
            })
            grunt.config.set('prettify.' + dash(proj) + "c", {
                expand: true,
                cwd: proj + "source",
                src: ['**/*.html'],
                dest: proj + 'source/',
                preserve_newlines: true,
                max_preserve_newlines: 1,
            })
            grunt.config.set('sass.' + dash(proj) + "c", {
                files: [{
                    expand: true,
                    cwd: proj + 'source',
                    src: ['**/*.scss'],
                    dest: proj + 'release/temp/',
                    ext: '.css'
                }]
            })
            /*
            (such) Flow:
            (many) build >>
            	includes > source/build (build index)
            	sass > source/build (compile sass, yey)
            (so) compress >>
            	compress CSS > source/ * * / * .css > source/dist (In same directory makeup) (very) leave .js extension
            	compress JS > source/ * * / * .js > source/dist (In same directory makeup, again) leave .css extension
            	compress HTML > source/build/index.html > root
            */
            grunt.task.run("copy:" + dash(proj) + "c")
            grunt.task.run("cssbeautifier:" + dash(proj) + "c")
            grunt.task.run("jsbeautifier:" + dash(proj) + "c")
            grunt.task.run("prettify:" + dash(proj) + "c")
            grunt.task.run("includes:" + dash(proj) + "c")
            grunt.task.run("sass:" + dash(proj) + "c")
            grunt.task.run('cssmin:' + dash(proj) + "c")
            grunt.task.run('cssmin:' + dash(proj) + "s")
            grunt.task.run('uglify:' + dash(proj) + "c")
            grunt.task.run('htmlmin:' + dash(proj) + "c")
        });
        grunt.config.set('jsbeautifier.grunt', {
            src: ["Gruntfile.js"],
            options: {
                indentChar: "   ",
                indentSize: 1
            }
        })
        grunt.task.run('jsbeautifier:grunt')
    });
};
