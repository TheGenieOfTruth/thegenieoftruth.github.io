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
var loc = ["gulp/", "harmonicraft/"];
var cwd = "";
var htmlprettify = require('gulp-html-beautify');
var jsprettify = require('gulp-jsbeautifier');
var cssprettify = require('gulp-cssbeautify');
var pugprettify = require('gulp-pug-beautify');
function
def(x, callback) {
	cwd = x;
		runSequence('clean','beautify-css','beautify-js','beautify-html','beautify-pug', 'images', 'pug', 'coffee', 'copy-base', 'sass', 'useref', 'fonts', 'itr', 'copy-css', 'copy-js', callback);
}
gulp.task('coffee', function() {
	return gulp.src(cwd + 'app/coffee/**/*.coffee')
		.pipe(coffee())
		.pipe(gulp.dest(cwd + 'app/js'));
});
gulp.task('pug', function() {
	//locals.root, used for building via relative paths. NEVER USE IN FRONTEND OR YOU WILL DIE, CHILD
	var data = {}
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

    data.config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
    data.a = function(){
        arguments[1] = arguments[1] === undefined || arguments[1] === null ? {} : arguments[1]
        return require("pug").renderFile(arguments[0],Object.assign(arguments[1],data))
    }
	return gulp.src(cwd + 'app/**/*.pug')
		.pipe(pug({
            pretty:true,
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
		"notify":false
	});
});
gulp.task('sass', function() {
	return gulp.src(cwd + 'app/scss/**/*.scss')
		.pipe(sass()) // Using gulp-sass
		.pipe(gulp.dest(cwd + 'app/css'));
});
gulp.task('watch', function(callback) {
	runSequence('default', 'browserSync', function() {
			cwd = argv.a != undefined ? argv.a : ""
			browserSync.reload()
			gulp.watch(cwd + 'app/coffee/**/*.coffee', ['coffee']); //reload via javascript change
			gulp.watch(cwd + 'app/*.pug', ['pug']); //reload via HTML change
			gulp.watch(cwd + 'app/**/*.scss', ['sass']); //reload via CSS change
			gulp.watch(cwd + 'app/*.html', browserSync.reload); //reload
			gulp.watch(cwd + 'app/js/**/*.js', browserSync.reload); //reload
			gulp.watch(cwd + 'app/css/**/*.css', browserSync.reload); //reload
			gulp.watch('base/scss/*.scss',['copy-base','pug']);
			gulp.watch("base/pug/*.pug",["pug"]);
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
gulp.task('build', ['default'], function() {});
gulp.task('default',['beautify-root-pug'],function(callback) {
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
gulp.task('copy-base',function(){
	return gulp.src("base/scss/*.scss")
		.pipe(gulp.dest(cwd+"app/scss/base"));
})
gulp.task('copy-js', function() {
	return gulp.src(cwd + 'app/js/**/*.min.js')
		.pipe(gulp.dest(cwd + 'dist/js'));
})
gulp.task('copy-css', function() {
	return gulp.src(cwd + 'app/css/**/*.min.css')
		.pipe(gulp.dest(cwd + 'dist/css'));
})
gulp.task('beautify-css', function(){
	return gulp.src(cwd + 'app/css/**/*.css')
		.pipe(cssprettify())
		.pipe(gulp.dest(cwd + "app/css"))
});
gulp.task('beautify-js', function(){
	return gulp.src(cwd + 'app/js/**/*.js')
		.pipe(jsprettify())
		.pipe(gulp.dest(cwd + "app/js"))
});
gulp.task('beautify-html', function(){
	return gulp.src(cwd + 'app/**/*.html')
		.pipe(htmlprettify())
		.pipe(gulp.dest(cwd + "app"))
});
gulp.task('beautify-pug',function(){
	return gulp.src(cwd + 'app/**/*.pug')
		.pipe(pugprettify({
			tab_size:4,
			fill_tab:false
		}))
		.pipe(gulp.dest(cwd + "app"))
})
gulp.task('beautify-root-pug',function(){
    return gulp.src('base/pug/**/*.pug')
		.pipe(pugprettify({
			tab_size:4,
			fill_tab:false
		}))
		.pipe(gulp.dest("base/pug"))
})
gulp.task('help', function() {
	console.log("watch:")
	console.log("-a <param> - set a custom directory to watch")
	console.log("default:")
	console.log("-b - run normal tasks but also run imgmin")
	console.log("-c - run normal tasks but also delete /dir")
})
