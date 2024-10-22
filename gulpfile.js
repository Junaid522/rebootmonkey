const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('minify-scss', function () {
  return gulp.src('path/to/your/scss/files/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('path/to/your/destination/folder'));
});

gulp.task('default', gulp.series('minify-scss'));
