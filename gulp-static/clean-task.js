// clean task

const del = require('del')
const { cleanFile } = require('./i-o-file')

const clean = (done) => {
  del.sync(cleanFile)
  done()
}

module.exports = clean
