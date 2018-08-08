const gulp = require('gulp');  // damit gulp läuft
const sass = require('gulp-sass'); // scss in css
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

const browserSync = require('browser-sync').create(); // Aktualisierung im Browser
const useref = require('gulp-useref'); // für min js
const uglify = require('gulp-uglify'); // damit js wirklich verkleinert wird
const gulpIf = require('gulp-if'); // damit nur js verkleinert wird
const cssnano = require('gulp-cssnano'); // css verkleinern
const imagemin = require('gulp-imagemin'); // Bilder optimieren
const cache = require('gulp-cache'); // Bilder optimieren dauert, damit nicht unnötig oft -> cachen
const del = require('del'); // löscht gelöschte files, nötig, da diese automatisch generiert
const runSequence = require('gulp-run-sequence');  //damit nicht alles was gemacht wurde, gleich wieder gelöscht wird



/*
diese Sachen von unserer tdo übernommen, ggf anpassen, sass-alt ist umbenannt ums vom neuen unterscheiden zu können
todo: minify, dest, von svg:alle mit audio am anfang etc. noch ergänzen
 */



gulp.task('babel', () => {
    gulp.src(['app/js/*.js'], {base: 'app/'})
    .pipe(babel({presets: ['env']}))
    .pipe(gulp.dest('dist'))
}
);

/*
Task sass: nimm das main.scss file
führe sass aus (siehe unten sass:watch)
schreib in Ordner css
und lade browserSync nochmals (wirklich machen)
 */
gulp.task('sass', ()=> {
    return gulp.src('app/css/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
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
        baseDir: 'app'
    },
})
});

/*
schau ob sich etwas im scss getan hat und führe dann sass aus
 */
gulp.task('sync:watch', ['browserSync'], () => {
    gulp.watch('app/css/**/*.scss', ['sass']);
});

gulp.task('sass:watch', () => {
    gulp.watch('app/css/**/*.scss', ['sass']);
});


/*
js und css soll min werden
 */

gulp.task('useref', function(){
    return gulp.src('app/**/*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist/js'))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist/css'))
});


/*
Bilder optimieren - braucht Zeit, daher auch cachen
 */
gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(imagemin({
            // Setting interlaced to true (für gif)
            interlaced: true
        }))
        // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});

/*
statt fonts Ordner content - Todo: wie werden hier js und css min? bzw. wo sind die überhaupt gespeichert?
 */
gulp.task('content', function() {
    return gulp.src('app/content/**/*')
        .pipe(gulp.dest('dist/content'))
})

/*
ganzen dist Ordner löschen: Aufruf im Terminal mit gulp clean:dist
 */
gulp.task('clean:dist', () => {
    return del.sync('dist');
})
/*
für den Fall der Fälle noch cache löschen; Aufruf im Terminal mit gulp cache:clear
 */
gulp.task('cache:clear', (callback) => {
    return cache.clearAll(callback)
})


gulp.task('build', (callback) => {
    runSequence('clean:dist', 'cache:clear', ['babel', 'sass', `useref`, `images`, `content`], callback);
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