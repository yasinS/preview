var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');

gulp.task('css', function() {
    gulp.src([
            'src/css/**/*.css'
        ])
        .pipe(minifyCSS())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('web/dist/css'));
});

gulp.task('fonts', function() {
    gulp.src([
	    'src/fonts/**/*.eot',
            'src/fonts/**/*.svg',
            'src/fonts/**/*.ttf',
            'src/fonts/**/*.woff'
        ])
        .pipe(gulp.dest('web/dist/fonts'));
});

gulp.task('js', function() {
    gulp.src([
            'node_modules/dompurify/dist/purify.min.js',
	    'node_modules/showdown/dist/showdown.min.js',
	    'node_modules/showdown-table/dist/showdown-table.min.js',
            'src/js/preview.js'
        ])
        .pipe(uglify())
	// .on('error', function(err){
	// 	console.log(err);
	// })
        .pipe(concat('script.js'))
        .pipe(gulp.dest('web/dist/js'));
});

gulp.task('images', function() {
    gulp.src([
            'src/images/**/*'
        ])
        .pipe(gulp.dest('web/dist/images'));
});

gulp.task('default', function() {
    gulp.run('js', 'css', 'images', 'fonts');
});

gulp.task('watch', function() {
        gulp.run('default');

        gulp.watch('src/css/**/*.css', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.run('css');
        });

        gulp.watch('src/js/**/*.js', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.run('js');
        });

        gulp.watch('src/images/**/*', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.run('images');
        });

        gulp.watch('src/fonts/**/*', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.run('fonts');
        });

});