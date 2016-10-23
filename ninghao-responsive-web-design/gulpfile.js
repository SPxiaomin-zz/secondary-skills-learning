const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: '.',
            directory: true
        },
        files: ['./**/*.html', './**/css/*.css']
    });

    gulp.watch('./javascripts/*.js', ['lint']);
});

gulp.task('lint', () => {
    return gulp.src('./javascripts/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(browserSync.stream());
});

gulp.task('default', ['browser-sync']);
