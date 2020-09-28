const fs = require('fs')
const readlineSync = require('readline-sync')

const file = readlineSync.question('Give file name: ')

// Remember to just pass the function, don't give function in not-calling form (showContent())
fs.readFile(file, 'utf8', showContent)

// This function is given as callback
function showContent (err, data) {
  if (err) {
    console.log(`file ${file} does not exist.`)
  } else {
    try {
      const jsonObj = JSON.parse(data)
      const property = 'name'
      if (property in jsonObj) {
        console.log(jsonObj.name)
      } else {
        console.log(`file ${file} contains json but not property ${property}`)
      }
    } catch (error) {
      console.log(`file ${file} does not contain json`)
    }
  }
}
