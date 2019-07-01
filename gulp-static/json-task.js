// json-task

const gulp = require('gulp')
const changed = require('gulp-changed')
const { jsonFile, destFile } = require('./i-o-file')

const json = (done) => {
  return gulp.src(jsonFile)
    .pipe(changed(destFile, {hasChanged: changed.compareContents}))
    .pipe(gulp.dest(destFile))
}

module.exports = json
