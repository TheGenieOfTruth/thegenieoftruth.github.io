var glob = require("glob")
var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref')
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cssnano = require('gulp-cssnano');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');
var replace = require('gulp-replace');
var fs = require('fs');
var argv = require('yargs').argv;
var loc = ["gulp/","harmonicraft/"];
var cwd = "";
var data = {}
glob.sync("base/jade-partials/**/*.html").forEach(function(val){
    var a = val.split("/")
    a = a[a.length-1]
    a = a.split(".")[0]
    data[a] = read(val)
})
function read(path){
    return fs.readFileSync(path, 'utf8')
}
function def(x,callback){
  cwd = x
  if(argv.c != undefined){
      runSequence('clean:dist','images','jade','jpc','coffee','sass', 'useref', 'fonts','itr','copy-css','copy-js',callback);
  }
  if(argv.b != undefined){
      runSequence('images','jade','jpc','coffee','sass', 'useref', 'fonts','itr','copy-css','copy-js',callback);
  } else{
      runSequence('jade','jpc','coffee','sass', 'useref', 'fonts','itr','copy-css','copy-js',callback);
  }
}
gulp.task('coffee',function(){
  return gulp.src(cwd + 'app/coffee/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest(cwd + 'app/js'))
});
gulp.task('jade', function() {
    //locals.root, used for building via relative paths. NEVER USE IN FRONTEND OR YOU WILL DIE, CHILD
  var stuff = JSON.parse(JSON.stringify(data))
  stuff.times = cwd.split("/").length
  stuff.root = "";
  for(i=0;i<stuff.times;i++){
    stuff.root+="../"
  }
    return gulp.src(cwd + 'app/**/*.jade')
        .pipe(jade({ pretty: true,
        "data": stuff})) // pip to jade plugin
        .pipe(gulp.dest(cwd + 'app')); // tell gulp our output folder
});
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ""
        },
        open: false
    });
});
gulp.task('sass', function() {
    return gulp.src(cwd + 'app/scss/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest(cwd + 'app/css'))
});
gulp.task('watch', function(callback) {
    runSequence('default','browserSync',function(){
        cwd = argv.a != undefined ? argv.a : ""
        browserSync.reload()
        console.log(argv.a)
        console.log(cwd)
        gulp.watch(cwd + 'app/coffee/**/*.coffee',['coffee']); //reload via javascript change
        gulp.watch(cwd + 'app/*.jade',['jade']); //reload via HTML change
        gulp.watch("base/jade-partials/**/*.jade",['jpc'])
        gulp.watch(cwd + 'app/**/*.scss', ['sass']); //reload via CSS change
        gulp.watch(cwd + 'app/*.html',browserSync.reload); //reload
        gulp.watch(cwd + 'app/js/**/*.js',browserSync.reload); //reload
        gulp.watch(cwd + 'app/css/**/*.css',browserSync.reload); //reload
    })
    // Other stoof
});
gulp.task('useref', function() {
    return gulp.src(cwd + 'app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', autoprefixer({browsers:['last 2 versions']})))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest(cwd + 'dist'));
});
gulp.task('images', function() {
    return gulp.src(cwd + 'app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"));
});
gulp.task('fonts', function() {
    return gulp.src(cwd + 'app/fonts/**/*')
        .pipe(gulp.dest(cwd + 'dist/fonts'));
});
gulp.task('clean:dist', function() {
    return del.sync(cwd + 'dist');
});
gulp.task('clean', function() {
  return del.sync(cwd + 'dist').then(function(cb) {
    return cache.clearAll(cb);
  });
});
//Index to root
gulp.task('itr',function(){
        return gulp.src(cwd+'dist/index.html')
        .pipe(replace(/<link(.*)(href="css\/)(.*)>/g,'<link$1href="dist/css/$3>'))
        .pipe(replace(/<img(.*)(src="images\/)(.*)\/>/g,'<img$1src="dist/images/$3/>'))
        .pipe(replace(/<script>(.*)(src="js\/)(.*)<\/script>/g,'<script>$1src="dist/js/$3</script>'))
        .pipe(gulp.dest(cwd));
});
//Jade partial compile
gulp.task('jpc',function(){
    return gulp.src('base/jade-partials/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest("base/jade-partials"))
})
gulp.task('build', ['default'], function () {});
gulp.task('default', ['jpc'], function (callback) {
    var ct = 0
function loop() {
    if (ct < loc.length) {
        console.log("\x1b[34mRunning tasks under directory: " + loc[ct]+"\x1b[0m")
        def(loc[ct],loop)
        ct++;
    } else{
        console.log("")
        console.log("\x1b[32mBUILD PASSED ON TASK 'DEFAULT' :)\x1b[0m")
        console.log("Yay! If the program made it this far, there were no errors, or there were, and there's gonna be hella debugging party for you.")
        callback()
    }
}
loop()
});
gulp.task('copy-js',function(){
    return gulp.src(cwd + 'app/js/**/*.min.js')
        .pipe(gulp.dest(cwd + 'dist/js'));
})
gulp.task('copy-css',function(){
    return gulp.src(cwd + 'app/css/**/*.min.css')
        .pipe(gulp.dest(cwd + 'dist/css'));
})
gulp.task('help',function(){
    console.log("watch:")
    console.log("-a <param> - set a custom directory to watch")
    console.log("default:")
    console.log("-b - run normal tasks but also run imgmin")
    console.log("-c - run normal tasks but also delete /dir")
})
