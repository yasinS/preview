var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');

gulp.task('css', function() {
    gulp.src([
            'src/css/skel.css',
	    'src/css/ext.css'
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
        .pipe(gulp.dest('web/dist/css/fonts'));
});

gulp.task('js', function() {
    gulp.src([
            'src/js/preview.js',
            'node_modules/dompurify/dist/purify.min.js',
	    'node_modules/highlight.js/lib/highlight.js',
	    'node_modules/remarkable/dist/remarkable.min.js',
        ])
        .pipe(concat('script.js'))
	.pipe(uglify())
        .on('error', function(err){
                console.log(err);
         })
        .pipe(gulp.dest('web/dist/js'));
});

gulp.task('images', function() {
    gulp.src([
            'src/images/**/*'
        ])
        .pipe(gulp.dest('web/dist/images'));
});

gulp.task('manifest', function() {
    gulp.src([
            'src/manifest/manifest.json',
            'src/extra/_config.yml'
        ])
        .pipe(gulp.dest('web/'));
});


gulp.task('extra', function() {
    gulp.src([
            'src/extra/security.txt'
        ])
        .pipe(gulp.dest('web/.well-known/'));
});

gulp.task('default', function() {
    gulp.run('js', 'css', 'images', 'fonts', 'manifest', 'extra');
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

        gulp.watch('src/manifest/**/*', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.run('manifest');
        });

        gulp.watch('src/extra/**/*', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.run('extra');
        });

});
