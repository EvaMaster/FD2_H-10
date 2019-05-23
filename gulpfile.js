var gulp = require('gulp'),
    cssmin = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    ts = require('gulp-typescript'),
    minify = require('gulp-minify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    path = {
        build: {
            html: 'build/',
            script: 'build/script/',
            css: 'build/css/'
        },
        src: {
            html: 'src/index.html', 
            ts: 'src/script/script.ts',
            script: 'src/script/*.js',
            babel:'src/script/*-min.js',
            style: 'src/scss/*.scss'
        }
};
gulp.task('html:build', done => {
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        done();
});
gulp.task('style:build', done => {
    gulp.src(path.src.style)
        .pipe(sass())
        .pipe(cssmin()) 
        .pipe(gulp.dest(path.build.css))
        done();
});
gulp.task('js:build', function () {
    return gulp.src(path.src.ts)
        .pipe(ts({
            noImplicitAny: true,
            resolveJsonModule: true,
            outFile: 'script.js'
        }))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('src/script/'));
});
gulp.task('concat', function() {
  return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/lodash/lodash.min.js', 'src/script/script.js'])
    .pipe(concat('build.js'))
    .pipe(minify())
    .pipe(gulp.dest('build/script/'));
});
gulp.task('json', done => {
    gulp.src('src/script/ALL.json')
        .pipe(gulp.dest(path.build.script))
        done();
});
gulp.task('build', gulp.parallel('html:build', 'style:build', 'json', 'js:build','concat' ));


