// gulpfile.js
// Include plugins
var gulp = require('gulp'),
    less = require('gulp-less');

var path = {
        less: [
            './static/less/*.less'
        ],
        css: './static/css'
    };

//less
gulp.task('less', function() {
    gulp.src(path.less)
        .pipe(less())
        .pipe(gulp.dest(path.css));
});

//default
gulp.task('default', ['less']);
