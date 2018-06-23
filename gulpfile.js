const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const runSequence = require('gulp-run-sequence');




gulp.task('build', (cb)=>{
    runSequence('clean', ['babel', 'sass'], 'copy',cb);
});


gulp.task('clean', () => {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('babel', () => {
    gulp.src(['src/js/*.js', 'src/node_modules/todooo/todo.js'], {base: 'src/'})
    .pipe(babel({presets: ['env']}))
    .pipe(gulp.dest('dist'))
}
);


gulp.task('sass-alt', () => {
    return gulp.src('./css/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.css('./css/**/*.css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('sass', ()=> {
    return gulp.src('css/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})


gulp.task('browserSync', () => {
    browserSync.init({
    server: {
        baseDir: '.'
    },
})
});


gulp.task('sync:watch', ['browserSync'], () => {
    gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('sass:watch', () => {
    gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('default', ['browserSync', 'sass:watch']);