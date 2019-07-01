const gulp = require('gulp')
const fs = require('fs')
const path = require('path')
const cleanTask = require('./gulp-static/clean-task')
const jsTask = require('./gulp-static/js-task')
const sassTask = require('./gulp-static/sass-task')
const jsonTask = require('./gulp-static/json-task')
const wxmlTask = require('./gulp-static/wxml-task')
const imageTassk = require('./gulp-static/image-task')
const colorBlack = '\x1b[30m'
const colorBlue = '\x1b[36m'

const { jsFile, sassFile, jsonFile, wxmlFile, imageFile } = require('./gulp-static/i-o-file')
const watch = (done) => {

  const w = (file, task) => {
    gulp.watch(file).on('all', (event, _path) => {
      let _extname = path.extname(_path)
      if (event === 'unlink') {
        let _delPath = _path.replace('src', 'dist')
        // scss 后缀需要转换
        _delPath = _extname.includes('scss') ?  _path.replace('scss', 'wxss') : _delPath
        fs.unlink(_delPath, () => {})
      }
      if (event === 'add' || event === 'change') {
        console.log(`${colorBlue}${_path}${colorBlack} is ${colorBlue}${event}${colorBlack}, runing task ${colorBlue}${task.name}${colorBlack}`)
        task()
      }
    })
  }
  w(jsFile, jsTask)
  w(sassFile, sassTask)
  w(jsonFile, jsonTask)
  w(wxmlFile, wxmlTask)
  w(imageFile, imageTassk)
}
gulp.task(watch)
gulp.task('default', gulp.series(cleanTask, gulp.parallel(jsTask, sassTask, jsonTask, wxmlTask, imageTassk), 'watch'))
