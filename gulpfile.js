var glob = require("glob");
var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var browserSync = require('browser-sync')
    .create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cssnano = require('gulp-cssnano');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var coffee = require('gulp-coffee');
var replace = require('gulp-replace');
var fs = require('fs');
var argv = require('yargs')
    .argv;
var webpack = require('gulp-webpack');
var babel = require('gulp-babel');
var loc = [
    "gulp/",
    "harmonicraft/",
    "blog/",
    "projects/water/",
];
var cwd = "";
var htmlprettify = require('gulp-html-beautify');
var jsprettify = require('gulp-jsbeautifier');
var cssprettify = require('gulp-cssbeautify');
var pugprettify = require('gulp-pug-beautify');
var rename = require("gulp-rename");
var standard = argv.b != undefined || argv.c != undefined
var a = standard ? "" : "app/"
function def(x, callback) {
    cwd = x;
    runSequence('clean', 'beautify-css', 'beautify-js', 'beautify-html', 'beautify-pug', 'images', 'pug', 'coffee', 'copy-base', 'sass', 'useref', 'fonts', 'itr', 'copy-css', 'copy-js', callback);
}

function makeData() {
    data = {}
    data.times = cwd.split("/")
        .length;
    data.root = "";
    for (i = 0; i < data.times; i++) {
        data.root += "../";
    }
    data.a = data.root + "base/pug/"
    glob.sync("base/pug/*.pug")
        .forEach(function(val) {
            var a = val.split("/");
            a = a[a.length - 1];
            a = a.split(".")[0];
            data[a] = val
        });
    data.config = JSON.parse(fs.readFileSync('serverside/config.json', 'utf8'));
    data.a = function() {
        arguments[1] = arguments[1] === undefined || arguments[1] === null ? {} : arguments[1]
        return require("pug")
            .renderFile(arguments[0], Object.assign(arguments[1], data))
    }
}
gulp.task('coffee', function() {
    return gulp.src(cwd + 'app/coffee/**/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest(cwd+'app/js'));
});
gulp.task('babel',function(){
    return gulp.src(cwd + 'scripts/**/*.+(babel|es5|js)')
    .pipe(babel({
        presets: ['es2015-without-strict'],
    }))
        .pipe(gulp.dest(cwd+'cscripts'));
})
gulp.task('pug', function() {
    //locals.root, used for building via relative paths. NEVER USE IN FRONTEND OR YOU WILL DIE, CHILD
    makeData()
    return gulp.src(cwd + 'app/**/*.pug')
        .pipe(pug({
            pretty: true,
            "data": data
        })) // pip to pug plugin
        .pipe(gulp.dest(cwd + 'app')); // tell gulp our output folder
});
gulp.task('browserSync', function() {
    browserSync.init({
        "server": {
            "baseDir": ""
        },
        "open": false,
        "notify": false
    });
});
gulp.task('sass', function() {
    return gulp.src(cwd + 'app/scss/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest(cwd + 'app/css'));
});
gulp.task('webpack',function(){
    return gulp.src("")
    .pipe(webpack(require('./webpack.js')(cwd)))
    .pipe(gulp.dest(""))
    .pipe(browserSync.stream());
})
gulp.task('wsync',function(){
    runSequence('babel','webpack')
})
gulp.task('watch', function(callback) {
    tasks = ["browserSync"]
    if(argv.d === undefined){
        tasks.push("default")
    }
    runSequence(tasks, function() {
            cwd = argv.a != undefined ? argv.a : ""
            var all = argv.b != undefined
            var webpack = argv.c != undefined
            browserSync.reload()
            gulp.watch('base/scss/*.scss', ['copy-base', 'pug']);
            gulp.watch("base/pug/*.pug", ["pug"]);
            if(argv.c){
                gulp.watch(cwd + 'scripts/**/*.js',['wsync'])
                gulp.watch(cwd + 'index.html', browserSync.reload); //reload
                gulp.watch(cwd + '/**/*.css', browserSync.reload); //reload
            } else{
            if (argv.b) {
                gulp.watch(cwd + '**/*.coffee', ['coffee']); //reload via javascript change
                gulp.watch(cwd + '**/*.pug', ['pug']); //reload via HTML change
                gulp.watch(cwd + '**/*.scss', ['sass']); //reload via CSS change
                gulp.watch(cwd + '**/*.html', browserSync.reload); //reload
                gulp.watch(cwd + '**/*.js', browserSync.reload); //reload
                gulp.watch(cwd + '**/*.css', browserSync.reload); //reload
            } else {
                gulp.watch(cwd + 'app/coffee/**/*.coffee', ['coffee']); //reload via javascript change
                gulp.watch(cwd + 'app/*.pug', ['pug']); //reload via HTML change
                gulp.watch(cwd + 'app/**/*.scss', ['sass']); //reload via CSS change
                gulp.watch(cwd + 'app/*.html', browserSync.reload); //reload
                gulp.watch(cwd + 'app/js/**/*.js', browserSync.reload); //reload
                gulp.watch(cwd + 'app/css/**/*.css', browserSync.reload); //reload
            }}
        })
        // Other stoof
});
gulp.task('useref', function() {
    return gulp.src(cwd + 'app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', autoprefixer({
            browsers: ['last 2 versions']
        })))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest(cwd + 'dist'));
});
gulp.task('images', function() {
    return gulp.src(cwd + 'app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest(cwd + "dist/images"));
});
gulp.task('fonts', function() {
    return gulp.src(cwd + 'app/fonts/**/*')
        .pipe(gulp.dest(cwd + 'dist/fonts'));
});
gulp.task('clean', function() {
    return del([cwd + 'dist/**/*']);
});
//Index to root
gulp.task('itr', function() {
    return gulp.src(cwd + 'dist/index.html')
        .pipe(replace(/<link(.*)(href="css\/)(.*)>/g, '<link$1href="dist/css/$3>'))
        .pipe(replace(/<img(.*)(src="images\/)(.*)>/g, '<img$1src="dist/images/$3/>'))
        .pipe(replace(/<script>(.*)(src="js\/)(.*)<\/script>/g, '<script>$1src="dist/js/$3</script>'))
        .pipe(gulp.dest(cwd));
});
//pug template clean
gulp.task('build', function(callback) {
    cwd = argv.a != undefined ? argv.a : ""
    console.log("\x1b[34mRunning tasks under directory: " + cwd + "\x1b[0m")
    def(cwd, callback)
    browserSync.reload()
});
gulp.task('default', ['beautify-root-pug','blog'], function(callback) {
    var ct = 0

    function loop() {
        if (ct < loc.length) {
            console.log("\x1b[34mRunning tasks under directory: " + loc[ct] + "\x1b[0m")
            def(loc[ct], loop)
            ct++;
        } else {
            console.log("")
            console.log("\x1b[32mBUILD PASSED ON TASK 'DEFAULT' :)\x1b[0m")
            console.log("Yay! If the program made it this far, there were no errors, or there were, and there's gonna be hella debugging party for you.")
            callback()
        }
    }
    loop()
});
gulp.task('copy-base', function() {
    return gulp.src("base/scss/*.scss")
        .pipe(gulp.dest(cwd + "app/scss/base"));
})
gulp.task('copy-js', function() {
    return gulp.src(cwd + 'app/js/**/*.min.js')
        .pipe(gulp.dest(cwd + 'dist/js'));
})
gulp.task('copy-css', function() {
    return gulp.src(cwd + 'app/css/**/*.min.css')
        .pipe(gulp.dest(cwd + 'dist/css'));
})
gulp.task('beautify-css', function() {
    return gulp.src(cwd + 'app/css/**/*.css')
        .pipe(cssprettify())
        .pipe(gulp.dest(cwd + "app/css"))
});
gulp.task('beautify-js', function() {
    return gulp.src(cwd + 'app/js/**/*.js')
        .pipe(jsprettify())
        .pipe(gulp.dest(cwd + "app/js"))
});
gulp.task('beautify-html', function() {
    return gulp.src(cwd + 'app/**/*.html')
        .pipe(htmlprettify())
        .pipe(gulp.dest(cwd + "app"))
});
gulp.task('beautify-pug', function() {
    return gulp.src(cwd + 'app/**/*.pug')
        .pipe(pugprettify({
            tab_size: 4,
            fill_tab: false
        }))
        .pipe(gulp.dest(cwd + "app"))
})
gulp.task('beautify-root-pug', function() {
    return gulp.src('base/pug/**/*.pug')
        .pipe(pugprettify({
            tab_size: 4,
            fill_tab: false
        }))
        .pipe(gulp.dest("base/pug"))
})
gulp.task('blog', function() {
    var blog = JSON.parse(fs.readFileSync('serverside/blog.json', 'utf8'));
    makeData()
    var ct = 0

    function loop() {
        if (ct < blog.length) {
            if (!fs.existsSync('blog/' + (ct + 1).toString())) {
                fs.mkdirSync('blog/' + (ct + 1).toString())
            }
            if (fs.existsSync('blog/' + (ct + 1).toString() + "/index.html")) {
                fs.unlinkSync('blog/' + (ct + 1).toString() + "/index.html");
            }
            //fs.writeFileSync('blog/'+(index+1).toString()+"/index.html", '<h2>'+val.title+'</h2>'+'<p>'+val.content+'</p>');
            var hold = Object.assign({},data)
            hold.title = blog[ct].title
            hold.content = blog[ct].content
            hold.date = blog[ct].date
            hold.author = blog[ct].author
            if(ct>0){

            hold.previous = "<a class = 'smallish' href = '../"+(ct).toString()+"'><i class = 'fa fa-long-arrow-left' aria-hidden = 'true'></i> Previous</a>"
          } else{
            hold.previous = "<span class = 'gray smallish'>Previous</span>"
          }
            if(ct+2<=blog.length){
              hold.next = "<a class = 'smallish pull-right' href = '../"+(ct+2).toString()+"'>Next <i class = 'fa fa-long-arrow-right' aria-hidden = 'true'></i></a>"
            } else{
              hold.next = "<span class = 'gray smallish pull-right'>Next</span>"
            }
            gulp.src('blog/template.pug')
                .pipe(pug({
                    "pretty": true,
                    "data": hold
                })) // pip to pug plugin
                .pipe(rename("index.html"))
                .pipe(gulp.dest('blog/' + (ct + 1).toString()));
            //Clean up and get better page later. Perhaps a pug thing?
            ct++;
            loop()
        } else {
        }
    }
    loop()
    var hold = Object.assign({},data)
    hold.list = blog
    gulp.src('blog/all.pug')
        .pipe(pug({
            pretty:true,
            data:hold
        }))
        .pipe(rename("index.html"))
        .pipe(gulp.dest('blog/all/'))
})
gulp.task('help', function() {
    console.log("watch:")
    console.log("-a <param> - set a custom directory to watch")
    console.log("default:")
    console.log("-b - run normal tasks but also run imgmin")
    console.log("-c - run normal tasks but also delete /dir")
})
