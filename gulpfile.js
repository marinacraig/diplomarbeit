const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const runSequence = require('gulp-run-sequence');



/*
diese Sachen von unserer tdo übernommen, ggf anpassen, sass-alt ist umbenannt ums vom neuen unterscheiden zu können
todo: minify, dest, von svg:alle mit audio am anfang etc. noch ergänzen
 */
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

/*
Task sass: nimm das main.scss file
führe sass aus (siehe unten sass:watch)
schreib in Ordner css
und lade browserSync nochmals (wirklich machen)
 */
gulp.task('sass', ()=> {
    return gulp.src('css/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})


/*
Aufgabe browserSync: initialisieren und wohin damit (Server / via Mamp etc)
 */
gulp.task('browserSync', () => {
    browserSync.init({
    server: {
        baseDir: '.'
    },
})
});

/*
schau ob sich etwas im scss getan hat und führe dann sass aus
 */
gulp.task('sync:watch', ['browserSync'], () => {
    gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('sass:watch', () => {
    gulp.watch('./css/**/*.scss', ['sass']);
});

/*
welche tasks sollen wirklich ausgeführt werden wenn man im Terminal "gulp" eingibt:
 */

gulp.task('default', ['browserSync', 'sass:watch']);

/*
install.sh:
dort alle npm install Befehle einfügen, diese müssen dann nicht mehr händisch im Terminal ausgeführt werden
shell: sind in 3er Gruppen aufgeteilt, 1. wem gehört es, welche Rechte hat eine bestimmte Datei
(für mehr Info check file permission standards mix)
mit x ist es ausführbar (via chmod (=changecommando) kann ein r in ein x verwandelt werden also
chmod +x install.sh
check ob es funktioniert hat:
ls -l
danach ./install.sh im Terminal damit es installiert wird (durch diesen Befehl wird speziell danach gesucht,
wegen Sicherheit wird dies so gemacht
 */
/*
.gitignore:
ggf. entsprechend berücksichtigen (Bsp. /nodes_modules oder /dist)
 */