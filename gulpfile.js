var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat');
    
gulp.task('default',['script', 'sassCombo', 'style']);


gulp.task('script', function(){
   gulp.src('client/scripts/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('public/scripts')); 
});

gulp.task('style', function(){
   return sass('client/styles/*.scss')
    .pipe(gulp.dest('public/styles')); 
});

gulp.task('sassCombo',  function(){
   return gulp.src('client/styles/scss/*scss')
            .pipe(concat('styles.scss'))
            .pipe(gulp.dest('client/styles')); 
});

