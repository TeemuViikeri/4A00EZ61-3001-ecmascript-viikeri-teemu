// import * as fs from 'fs'
const fs = require('fs')

function FileReader (path) {
  this.path = path
  this.readAndOutput = () => { fs.readFile(path, 'utf8', d) }

  this.done = function (err, d) {
    if (err) {
      throw Error()
    } else {
      console.log(this.path + ':\n' + d)
    }
  }

  const d = this.done.bind(this)
}

module.exports = FileReader
