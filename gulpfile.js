var gulp = require("gulp");
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var sass = require("gulp-sass");

gulp.task('connect', function() {
  connect.server({
    root:'./app',
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  gulp.src('./app/sass/**/*.scss')
    .pipe(sass('app.css').on('error', sass.logError))
    .pipe(gulp.dest('./app/css/'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('./app/js/**/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/sass/**/*.scss'], ['sass']);
  gulp.watch(['./app/js/**/*.js'], ['js']);
});

gulp.task('vendors-js', function() {
  return gulp.src(['./bower_components/angular/angular.js',
                   './bower_components/jquery/dist/jquery.js'])
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('./app/js'));
});

gulp.task('default', ['connect', 'watch']);
