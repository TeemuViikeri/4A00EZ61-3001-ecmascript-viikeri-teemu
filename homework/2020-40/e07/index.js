const fs = require('fs')
const readlineSync = require('readline-sync')
const util = require('util')
const readFile = util.promisify(fs.readFile)

const file = readlineSync.question('Give file name: ')

function parseJson (data) {
  function func (resolve, reject) {
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

async function readFileAndParse (file) {
  const fileData = await readFile(file, 'utf8')
  const parsedJson = await parseJson(fileData)
  return parsedJson
}

readFileAndParse(file).then((name) => console.log(name)).catch(msg => console.log(msg))
