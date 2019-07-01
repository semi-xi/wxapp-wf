// image-task

const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const changed = require('gulp-changed')
// const pngquant = require('imagemin-pngquant')
const { imageFile, destFile } = require('./i-o-file')

const image = (done) => {
  return gulp.src(imageFile)
    .pipe(changed(destFile, {hasChanged: changed.compareContents}))
    .pipe(imagemin({
      optimizationLevel: 5, // 类型：Number  默认：3  取值范围：0-7（优化等级）
      progressive: true, // 类型：Boolean 默认：false 无损压缩jpg图片
      interlaced: true, // 类型：Boolean 默认：false 隔行扫描gif进行渲染
      multipass: false, // 类型：Boolean 默认：false 多次优化svg直到完全优化
      svgoPlugins: [{removeViewBox: false}] // 不要移除svg的viewbox属性
      // use: [pngquant()] // 使用pngquant深度压缩png图片的imagemin插件
    }))
    .pipe(gulp.dest(destFile))
}

module.exports = image
