/*
neues Projekt:
1. npm init -> package.json
2. ./install.sh -> alle node module
3. Ordneraufbau:
app:
- content
- css
- ggf. dokumentation (md-files)
- images (auch icons etc.)
- js
- scss
- index.html
(dist)
(node_modules)
.gitignore
.gulpfile.js
install.sh

4. für dist: gulp build
 */

const gulp = require('gulp');  // damit gulp läuft

const sourcemaps = require('gulp-sourcemaps'); //debugging
const babel = require('gulp-babel'); // ES6

const sass = require('gulp-sass'); // scss in css
const browserSync = require('browser-sync').create(); // Aktualisierung im Browser
const useref = require('gulp-useref'); // für min js
const uglify = require('gulp-uglify'); // damit js wirklich verkleinert wird
const gulpIf = require('gulp-if'); // damit nur js verkleinert wird
const cssnano = require('gulp-cssnano'); // css verkleinern

const autoprefixer = require('gulp-autoprefixer'); // css für ältere browser
const postcss      = require('gulp-postcss'); //statt gulp-concat für die Combi mit Sourcemaps

const imagemin = require('gulp-imagemin'); // Bilder optimieren
const cache = require('gulp-cache'); // Bilder optimieren dauert, damit nicht unnötig oft -> cachen
const del = require('del'); // löscht gelöschte files, nötig, da diese automatisch generiert
const runSequence = require('gulp-run-sequence');  //damit nicht alles was gemacht wurde, gleich wieder gelöscht wird



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
schau ob sich etwas im scss getan hat und führe dann sass aus (auch bei HTML und JS Anpassungen)
 */
gulp.task('watch', ['browserSync', 'sass'], () => {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});


/*
für ältere Browser
Todo: seltsamer mix -> evtl mit sourcemaps fixen und js min integrieren, was ist mit babel?
https://www.npmjs.com/package/gulp-sourcemaps
https://www.npmjs.com/package/gulp-autoprefixer
https://github.com/postcss/autoprefixer#gulp
 */

gulp.task('autoprefixer', () => {

    gulp.src('app/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

    return gulp.src('app/css/*.css')

        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});




/*
Babel für ES6 todo: fixen
 */

gulp.task('babel', () => {
        gulp.src(['app/js/*.js'], {base: 'app/'})
            .pipe(babel({presets: ['env']}))
            .pipe(gulp.dest('dist'))
    }
);


/*
js und css soll min werden -> todo: js
 */

gulp.task('useref', function(){
    return gulp.src('app/**/*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        //.pipe(gulpIf('*.js', uglify())) // -> funktioniert nicht
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
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
statt fonts Ordner content - Todo: wie werden hier js und css min? bzw. wo sind die überhaupt gespeichert?
 */
gulp.task('content', () => {
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
    runSequence('clean:dist', 'cache:clear', ['sass', 'useref', 'images', 'content'], callback);
});
/*
damit build ausgeführt wird: gulp build
fehlen noch: 'babel', 'autoprefixer',
 */

/*
welche tasks sollen wirklich ausgeführt werden wenn man im Terminal "gulp" eingibt:
(sind nicht alle, da es sonst zu lange dauert)
 */

gulp.task('default', (callback) => {
    runSequence(['sass','browserSync', 'watch'],
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