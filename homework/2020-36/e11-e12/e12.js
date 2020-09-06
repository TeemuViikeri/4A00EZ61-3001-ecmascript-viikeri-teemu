const fs = require('fs')
const process = require('process')

const copy = (originalFile, copyFile) => {
  fs.readFile(originalFile, 'utf8', (err, data) => {
    if (err) {
      console.error('error')
    } else {
      fs.writeFile(copyFile, data, (err) => {
        if (err || data === undefined) {
          console.error('error')
        } else {
          console.log('success')
        }
      })
    }
  })
}

copy(process.argv[2], 'copy.txt')
