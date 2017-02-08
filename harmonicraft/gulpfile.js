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
function def(cb){
  runSequence('jade','coffee',
    ['sass', 'useref', 'fonts','images'],
    cb
  )
}
gulp.task('coffee',function(){
  return gulp.src('app/coffee/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('app/js'));
})
gulp.task('jade', function() {
    return gulp.src('app/**/*.jade')
        .pipe(jade({ pretty: true })) // pip to jade plugin
        .pipe(gulp.dest('app')); // tell gulp our output folder
});
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
        open: false
    });
});
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('watch', ['browserSync'], function(callback) {
    gulp.watch('app/coffee/**/*.coffee',['coffee'])
    gulp.watch(['!app/partials/**/*.jade','app/**/*.jade'],['jade','useref']);
    gulp.watch('app/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    // Other stoof
});
gulp.task('useref', function() {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', autoprefixer({browsers:['last 2 versions']})))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'));
});
gulp.task('images', function() {
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"));
});
gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});
gulp.task('clean:dist', function() {
    return del.sync('dist');
});
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
});
gulp.task('build', function (callback) {
  def(callback)
});
gulp.task('default', function (callback) {
  def(callback)
});
