var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');

// compiles sass files and makes .css file
gulp.task('compass', function() {
	gulp.src('dev/sass/style.scss')
		.pipe(compass({
			css: 'public/stylesheets',
			sass: 'dev/sass/'
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('public/stylesheets'));
});
