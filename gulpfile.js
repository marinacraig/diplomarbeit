/*
neues Projekt:
1. npm init -> package.json
2. ./install.sh -> alle node module werden installiert - falls dies nicht geht, siehe ganz unten in diesem File (chmod)
(Bedingung für 1. und 2.: npm schon installiert sonst npm zuerst installieren)
3. für dist: gulp build
4. für app / Entwicklung: gulp
(ist ohne build und zeigt nicht auf dist, da sonst zu langsam während Entwicklung)


Ordneraufbau:
app:
- content
- css (zum verlinken und via gulp verkleinern)
- images (auch icons etc.)
- js (seperaten babel-Ordner welcher durch gulp build entsteht, files vom babel im HTML verlinken bzw. via gulp verkleinern)
- scss
- index.html
(dist)
(node_modules)
- ggf. Dokumentation (md-files), README.md
.gitignore
.gulpfile.js
install.sh
[package.json]
[package-lock.json]

für später:
bei erstellen der js-files: check ob id xy vorhanden da am Ende evtl. Schnipsel wegen minify auf "falscher" Seite ausgeführt wird
nie npm audit fix --force -> zuerst schauen was kaputt geht
evtl sourcemaps ausbauen z.B.:
gulp-postcss statt gulp-concat für die Combi mit Sourcemaps
gulp-inject-partials: z.B. für Nav und Footer https://www.npmjs.com/package/gulp-inject-partials
gulp-inject-file: damit bei js spezifisches file und nicht alle eingefügt werden (hat aber nicht richtig fkt, daher evt. postbuild)
php: z.B. verkleinern oder unleserlich machen (Sicherheit und Geschwindigkeit) (task copy-php ergänzen?)
js: nicht so schnell / häufig babeln

linter hinzufügen / beautify
 */

const gulp = require('gulp');  // damit gulp läuft

const sourcemaps = require('gulp-sourcemaps'); //debugging
const babel = require('gulp-babel'); // ES6

const sass = require('gulp-sass'); // scss in css
const browserSync = require('browser-sync').create(); // Aktualisierung im Browser
const useref = require('gulp-useref'); // für min js / css
const uglify = require('gulp-uglify'); // damit js wirklich verkleinert wird
const gulpIf = require('gulp-if'); // damit js bzw. css verkleinert wird
const cssnano = require('gulp-cssnano'); //css wirklich verkleinern - Alternative: clean-css

const autoprefixer = require('gulp-autoprefixer'); // css für ältere browser
const inject = require('gulp-inject'); //damit minifizierte js und css eingefügt werden können - Achtung im HTML steht zwingend inject:css -> alle css files werden eingefügt

const imagemin = require('gulp-imagemin'); // Bilder optimieren
const cache = require('gulp-cache'); // Bilder optimieren dauert, damit nicht unnötig oft -> cachen
const del = require('del'); // löscht gelöschte files, nötig, da diese automatisch generiert
const runSequence = require('gulp-run-sequence');  //damit nicht alles was gemacht wurde, gleich wieder gelöscht wird, Reihenfolge


/*
Task sass: nimm das main.scss file
führe sass aus (siehe unten sass:watch)
schreib in Ordner css
und lade browserSync nochmals (wirklich machen)
 */
gulp.task('sass', ()=> {
    return gulp.src('app/scss/main.scss')
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
Babel für ES6 -> js files linken in js/babel Ordner, damit die richtigen files minifiziert werden
 */

gulp.task('babel', () => {
        gulp.src(['app/js/*.js'], {base: 'app/js'})
            .pipe(babel({presets: ['env']}))
            .pipe(gulp.dest('app/babel/'))
    }
);
/*
schau ob sich etwas im scss getan hat und führe dann sass aus (auch bei HTML und JS Anpassungen)
 */
gulp.task('watch', ['browserSync', 'sass'], () => { //'babel' rausgenommen - rattert zuviel
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', ['babel']); //bei js Änderung babel
    gulp.watch('app/js/**/*.js', browserSync.reload);
});


/*
js und css soll min werden

im HTML:
<!-- build:<type> <path> -->
...css oder ...js
<!-- endbuild -->
*/


/*
Autoprefixer für ältere bzw. verschiedene Browserversionen
idee: zuerst sass machen dann mit autoprefixer überschreiben
(getestet mit alternativem Ordner)
 */

gulp.task('autoprefixer', () =>
    gulp.src('app/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
);

/*
für die js und css minified version, entsteht aus build im html
 */

gulp.task('useref', function(){
    return gulp.src('app/**/*.html')
        .pipe(sourcemaps.init())
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(sourcemaps.write('sourcemaps'))
        .pipe(gulp.dest('dist'))
});

/*
Bilder optimieren - braucht Zeit, daher auch cachen
 */
gulp.task('images', () => {
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
Ordner content von app in dist kopieren
 */
gulp.task('content', () => {
    return gulp.src('app/content/**/*')
        .pipe(gulp.dest('dist/content'))
})

/*
Ordner php von app in dist kopieren
 */
gulp.task('copy-php', () => {
    return gulp.src('app/php/**/*')
        .pipe(gulp.dest('dist/php'))
})


/*
damit die kopierten HTML - files die richtigen css bzw. js links erhalten
Problem: im HTML muss zwingend inject:js stehen, ansonsten stimmen bei den Unterseiten die Links nicht
Nachteil: zuviel unnötiges js verursacht errors

Im HTML:
<!-- inject:css -->
  <!-- endinject -->
  bzw. statt css js

  Problem: bei mehreren builds werden mehrere files eingefügt -> gerade im js darauf achten, dass dort ein check ausgeführt wird
 */

gulp.task('inject', () => {
    gulp.src('dist/**/*.html')
        .pipe(inject(gulp.src('dist/**/*.js', {read: false}), {relative: true}))
        .pipe(inject(gulp.src('dist/**/*.css', {read: false}), {relative: true}))
        .pipe(gulp.dest('dist'));
});

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

/*
damit build ausgeführt wird, aufpassen mit Reihenfolge, alles in [] wird gleichzeitig gemacht - Terminal: gulp build
 */
gulp.task('build', (callback) => {
    runSequence('clean:dist', 'cache:clear', ['babel','sass'], 'autoprefixer', ['useref','images', 'content', 'copy-php'], 'inject', callback);
});


/*
welche tasks sollen wirklich ausgeführt werden wenn man im Terminal "gulp" eingibt:
(sind nicht alle, da es sonst zu lange dauert)
 */

gulp.task('default', (callback) => {
    runSequence(['sass', 'browserSync', 'watch'],
        callback
    )
})

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