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
var loc = ["gulp/","harmonicraft/"];
var cwd = "";

function def(x,callback){
  cwd = x
  runSequence('jade','coffee','sass', 'useref', 'fonts','itr',callback);
}
gulp.task('coffee',function(){
  return gulp.src(cwd + 'app/coffee/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest(cwd + 'app/js'));
});
gulp.task('jade', function() {
    return gulp.src(cwd + 'app/**/*.jade')
        .pipe(jade({ pretty: true })) // pip to jade plugin
        .pipe(gulp.dest(cwd + 'app')); // tell gulp our output folder
});
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: cwd
        },
        open: false
    });
});
gulp.task('sass', function() {
    return gulp.src(cwd + 'app/scss/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest(cwd + 'app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('watch', ['default','browserSync'], function(callback) {
    gulp.watch(cwd + 'app/coffee/**/*.coffee',['coffee'])
    gulp.watch(['!app/partials',cwd + 'app/**/*.jade'],['jade']);
    gulp.watch(cwd + 'app/**/*.scss', ['sass']);
    gulp.watch(cwd + 'app/*.html', browserSync.reload);
    gulp.watch(cwd + 'app/js/**/*.js', browserSync.reload);
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
gulp.task('itr',function(){
        return gulp.src(cwd+'dist/index.html')
        .pipe(replace('href="css/','href="dist/css/'))
        .pipe(replace('src="images/','src="dist/images/'))
        .pipe(replace('src="js/','src="dist/js/'))
        .pipe(gulp.dest(cwd));
})
gulp.task('build', function (callback) {
  runSequence('jade','coffee',
    ['sass', 'useref', 'images', 'fonts'],
    callback
);
});
gulp.task('default', function () {
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
    }
}
loop()
});
