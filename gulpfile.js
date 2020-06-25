const 
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const paths = {
  sass: ['./app/sass/styles.scss'],
  html: ['./app/**/*.html'],
  js: ['./app/**/*.js']
}

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./app"
    },
    notify: false
  });
    
  browserSync.watch(paths.html, gulp.series('html'));
  browserSync.watch(paths.sass, gulp.series('sass'));
  browserSync.watch(paths.js, gulp.series('js'));
});

gulp.task('js', () => {
  return gulp.src(paths.html)
    .pipe(reload({ stream: true }));
});

gulp.task('html', () => {
  return gulp.src(paths.html)
    .pipe(reload({ stream: true }));
});

gulp.task('sass', () => {
  return gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
    .pipe(reload({ stream: true }));
});