// js task

const gulp = require('gulp')
// const map = require('map-stream') // 查src文件
const using = require('gulp-using') // 查src文件 本质上都是调用map
const changed = require('gulp-changed')
const { destFile, jsFile } = require('./i-o-file')
const js = (done) => {
  return gulp.src(jsFile)
    .pipe(changed(destFile, {hasChanged: changed.compareContents}))
    // .pipe(using())
    .pipe(gulp.dest(destFile))
}

module.exports = js
