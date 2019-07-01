// wxml task

const gulp = require('gulp')
const changed = require('gulp-changed')
const { wxmlFile, destFile } = require('./i-o-file')

const wxml = (done) => {
  return gulp.src(wxmlFile)
    .pipe(changed(destFile, {hasChanged: changed.compareContents}))
    .pipe(gulp.dest(destFile))
}

module.exports = wxml
