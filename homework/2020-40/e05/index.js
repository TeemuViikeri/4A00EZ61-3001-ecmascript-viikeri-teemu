const fs = require('fs')
const readlineSync = require('readline-sync')
const util = require('util')
const readFile = util.promisify(fs.readFile)

const file = readlineSync.question('Give file name: ')

readFile(file, 'utf-8')
  .then(parseJson)
  .then((data) => console.log(data))
  .catch(msg => console.log(msg))

function parseJson (data) {
  function func (resolve, reject) {
    // parse the data (do not implement try catch, if exception occurs, this
    // will be catched automatically in your catch outside of this function.
    // if name is found from obj, call resolve, otherwise call reject
    const jsonObj = JSON.parse(data)
    const property = 'name'
    if (property in jsonObj) {
      resolve(jsonObj.name)
    } else {
      reject(`file ${file} contains json but not property ${property}`)
    }
  }
  const p = new Promise(func)
  return p
}
