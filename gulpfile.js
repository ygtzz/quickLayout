var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minify = require('gulp-clean-css');

gulp.task('default',function(){
     gulp.src(['./reset.css','./quick-layout.css','./custom.css'])
         .pipe(concat('quicklayout.css'))
         .pipe(gulp.dest('dist'));
});

gulp.task('minify',function(){
     gulp.src(['./reset.css','./quick-layout.css','./custom.css'])
         .pipe(concat('quicklayout.min.css'))
         .pipe(minify())
         .pipe(gulp.dest('dist'));
});