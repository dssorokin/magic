global.hostname = "localhost";

var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename'),
browserSync = require('browser-sync'),
reload = browserSync.reload,
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant'),
spritesmith = require('gulp.spritesmith'),
postcss = require('gulp-postcss'),
cssSize = require('postcss-size'),
concat = require('gulp-concat'),
minifyJS = require('gulp-minify');

var preprocs = [autoprefixer,cssSize];

gulp.task('browserSync', function() {
  browserSync({
    // server: {
    //   baseDir: "./app/"
    // },
    proxy: "localhost/magic/app/main.html"
    // port: 8080,
    // open: true,
    // notify: false
  });
});


gulp.task('styles', function () {
	gulp.src('sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(postcss(preprocs))
	.pipe(minifycss())
	.pipe(gulp.dest('app/'))
	.pipe(reload({stream:true}));
});

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('pre-img/sprite/*.*') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss',
                cssFormat: 'scss',
                 algorithm: 'binary-tree'
            }));

    spriteData.img.pipe(gulp.dest('app/img')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('sass/')); // путь, куда сохраняем стили
});

gulp.task('imagemin', () => {
    return gulp.src('pre-img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('app/img'));
});
gulp.task('php',function(){
	gulp.src('app/*.html')
	.pipe(reload({stream:true}));
});

gulp.task('scripts', function() {
  return gulp.src(['app/lib-needed/*.js','app/js/common.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('app/'));
});

gulp.task('compressJS',function(){
    return gulp.src('app/bundle.js')
        .pipe(minifyJS())
        .pipe(gulp.dest('app/'));
});

gulp.task('watch', function() {
	gulp.watch('sass/*.scss', ['styles']);
	gulp.watch('app/*.html', ['php']);
    // gulp.watch('app/js/common.js',['scripts']);
});

gulp.task('default', ['browserSync', 'watch'], function() {

});
