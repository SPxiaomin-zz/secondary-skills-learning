const gulp = require('gulp');

gulp.task('copy-index', function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    return gulp.src('images/**/*')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('data', function() {
    return gulp.src()
        .pipe(gulp.dest());
})
