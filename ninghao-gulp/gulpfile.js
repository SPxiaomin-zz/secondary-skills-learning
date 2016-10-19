const gulp = require('gulp');
const sass = require('gulp-sass');
const less = require('gulp-less');
const connect = require('gulp-connect');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const minifyCSS = require('gulp-minify-css');
const imagemin = require('gulp-imagemin');

gulp.task('scripts', function() {
    return gulp.src(['javascripts/jquery.js', 'javascripts/modernizr.js'])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('vendor.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('server', function() {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('copy-index', function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('images', function() {
    return gulp.src('images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('data', function() {
    return gulp.src(['xml/*.xml', 'json/*.json', '!json/secret-*.json'])
        .pipe(gulp.dest('dist/data'));
});

gulp.task('build', ['copy-index', 'images', 'data'], function() {
    console.log('编译成功！');
});

gulp.task('watch', function() {
    gulp.watch('index.html', ['copy-index']);
    gulp.watch('images/**/*.{jpg,png}', ['images']);
    gulp.watch(['xml/*.xml', 'json/*.json', '!json/secret-*.json'], ['data']);
});

gulp.task('sass', function()  {
    return gulp.src('stylesheets/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('less', function()  {
    return gulp.src('stylesheets/**/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css/less'));
});

gulp.task('default', ['server', 'watch']);
