var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat');
    
gulp.task('default',['script', 'sassCombo', 'style','index', 'watch']);


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

gulp.task('index', function(){
    return  gulp.src('client/views/index.html')
            .pipe(gulp.dest('public/views/'));
});

gulp.task('watch', function(){
   gulp.watch('client/views/index.html',['index']); 
   gulp.watch('client/scripts/*.js', ['script']);
});

