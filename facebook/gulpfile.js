var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task("sidewide", function() {
  gulp.src("./app/styles/sitewide/main.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ["last 2 versions"],
      cascade: false
    }))
    .pipe(gulp.dest("./assets/styles"));
});

gulp.task('default',function() {
    gulp.watch('./app/styles/**/*.sass', ['sidewide']);
});
