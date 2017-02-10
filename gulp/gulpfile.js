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
var loc = ["/gulp","/harmonicraft"];
var cwd = "";

function def(cb,x){
  cwd = x
  runSequence('jade','coffee',
    ['sass', 'useref', 'fonts'],
    cb
  )
}
gulp.task('coffee',function(){
  return gulp.src(cwd + 'app/coffee/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest(cwd + 'app/js'));
})
gulp.task('jade', function() {
    return gulp.src(cwd + 'app/**/*.jade')
        .pipe(jade({ pretty: true })) // pip to jade plugin
        .pipe(gulp.dest(cwd + 'app')); // tell gulp our output folder
});
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: cwd + 'app'
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
gulp.task('build', function (callback) {
  runSequence('jade','coffee',
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
});
gulp.task('default', function (callback) {
loc.forEach(function(val){
    def(callback,val)
})
});
