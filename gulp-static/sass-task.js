// sass task

const gulp = require('gulp')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
// const map = require('map-stream') // 查src文件
const using = require('gulp-using') // 查src文件 本质上都是调用map
const sass = require('gulp-sass')
const changed = require('gulp-changed')
const { sassFile, destFile } = require('./i-o-file')

// sass.compiler = require('node-sass')

const wxss = (done, file) => {
  return gulp.src(sassFile)
    .pipe(changed(destFile, {hasChanged: changed.compareContents}))
    // .pipe(map(function (file, callback) {
    //   console.log(file.path)
    //   callback(null, file)
    // }))
    // .pipe(using())
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(rename((path) => {
      path.extname = '.wxss'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destFile))
}

module.exports = wxss
