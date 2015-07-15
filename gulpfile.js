var gulp = require("gulp");
var connect = require('gulp-connect');
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
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css/app.css'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('./app/js/**/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/sass/**/*.scss'], ['scss']);
  gulp.watch(['./app/js/**/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);
