var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');

// compiles sass files and makes .css file
gulp.task('compileSASS', function() {
	gulp.src('dev/sass/style.scss')
		.pipe(compass({
			css: 'public/stylesheets',
			sass: 'dev/sass/'
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('public/stylesheets'));
});


// Concat and minify java script files
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Developer java script files
gulp.task('concatJS', function() {
	return gulp.src('dev/javascripts/components/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('public/javascripts'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('public/javascripts'));
});

// Vendor Java Script files
gulp.task('concatVendorJS', function() {
	return gulp.src('dev/javascripts/vendor/angular.js')
		.pipe(concat('angular.js'))
		.pipe(gulp.dest('public/javascripts/vendor'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('public/javascripts/vendor'));
});
