var gulp = require('gulp'), 
    uglify = require('gulp-uglify');
gulp.task('script', function () {
    gulp.src('public/javascripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts')); 
    gulp.watch('public/javascripts/*.js',['script']);
});
