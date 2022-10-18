// gulp
const {src, dest, parallel, series, watch} = require('gulp');
// layout
const pug = require('gulp-pug');
// styles
const sass = require('gulp-sass')(require('sass'));
    const autoprefixer = require('gulp-autoprefixer');
    const sourcemaps = require('gulp-sourcemaps');
// scripts
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// browser-sync
const browserSync = require('browser-sync').create();
//images
const webp = require('gulp-webp');


function browsersync() {
    browserSync.init({ 
        server: { baseDir: 'public' }
        // notify: false, 
        // online: true 
    })
}

function style() {
    return src('dev/style.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({overrideBrowserslist: ['last 15 versions']}))
    .pipe(sourcemaps.write())
    .pipe(dest('public/assets'))
    .pipe(browserSync.stream());
}

function copyfonts() {
    return src('./dev/fonts/*.woff')
    .pipe(dest('./public/assets/fonts'))
    .pipe(browserSync.stream());
}
// LIBS
function libs() {
    return src('./dev/libs/**/*.js')
    .pipe(dest('./public/assets/'))
    .pipe(browserSync.stream());
}

// PUG
function views() {
return src('./dev/index.pug')
    .pipe(
    pug({
        doctype: 'html',
        pretty: true
    })
    )
    .pipe(dest('./public'))
    .pipe(browserSync.stream());
};

function scripts() {
    return src('dev/scripts.js')
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(dest('public/assets'))
    .pipe(browserSync.stream());
    }

function images(){
    return src(['dev/img/**/*.png', 'dev/img/**/*.jpg'])
        .pipe(webp())
        .pipe(dest('public/images/'))
        .pipe(browserSync.stream());
    }

function watchers() {
    watch('dev/*.pug', views);
    watch('dev/img/**.*', images);
    watch('dev/style.sass', style);
    watch(['dev/scripts.js', 'dev/libs/**/*.js'], scripts);
}

exports.views = views;
exports.style = style;
exports.images = images;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.fonts = copyfonts;
exports.libs = libs;

exports.default = parallel(views, libs, style, images, watchers, browsersync);