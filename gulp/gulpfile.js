var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref')
var browserSync = require('browser-sync').create();
gulp.task('browserSync',function(){
    browserSync.init({
        server:{
            baseDir: 'app'
        },
        open:false
    })
});
gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream:true
    }))
});
gulp.task('watch', ['browserSync','sass'], function(){
    gulp.watch('app/**/*.scss',['sass']);
    gulp.watch('app/*.html',browserSync.reload)
    gulp.watch('app/js/**/*.js',browserSync.reload)
    // Other stoof
});
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});
