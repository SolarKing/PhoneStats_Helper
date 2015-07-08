var gulp = require("gulp");
var connect = require("gulp-connect");
var sass = require('gulp-sass');

/**
 * This task will create a livereload server.
 * http://localhost:3000
 */
gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 3000,
  });
});

gulp.task('html', function() {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./**/*.scss'], ['sass']);
});

gulp.task('default', ['connect', 'watch']);
