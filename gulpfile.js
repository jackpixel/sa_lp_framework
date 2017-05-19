var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash         = require("gulp-hash"),
    del          = require("del"),
    plumber = require('gulp-plumber');


// error function for plumber
var onError = function (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
};


// Compile SCSS files to CSS
gulp.task("scss", function () {
    del.sync(["themes/framework/static/css/**/*"])
    gulp.src("themes/framework/src/css/**/*.scss")
        .pipe(sass({outputStyle : "compressed"}))
        .pipe(autoprefixer({browsers : ["last 20 versions"]}))

        .pipe(hash())
        .pipe(gulp.dest("themes/framework/static/css"))
        //Create a hash map
        .pipe(hash.manifest("hash.json"))
        //Put the map in the data directory
        .pipe(gulp.dest("themes/framework/data/css"))
})

// Hash javascript
gulp.task("js", function () {
    del.sync(["themes/framework/static/js/**/*"])
    gulp.src("themes/framework/src/js/**/*")
        .pipe(hash())
        .pipe(gulp.dest("themes/framework/static/js"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("themes/framework/data/js"))
})

// Hash assets
gulp.task("assets", function () {
    del.sync(["themes/framework/static/assets/"])
    gulp.src(['themes/framework/src/assets/**/*'])
        .pipe(gulp.dest("themes/framework/static/assets"))
})


// Cname
gulp.task("cname", function () {
    gulp.src(['./CNAME'])
        .pipe(gulp.dest("public/"))
})

// Watch asset folder for changes
gulp.task("watch", ["scss", "js", "assets"], function () {
    gulp.watch("themes/framework/src/css/**/*", ["scss"])
    gulp.watch("themes/framework/src/js/**/*", ["js"])
    gulp.watch("themes/framework/src/assets/**/*", ["assets"])
})



gulp.task('default', ['scss', 'js', "assets", 'watch']);

gulp.task('build', ['scss', 'js', "assets"]);

gulp.task('domain', ["cname"]);
