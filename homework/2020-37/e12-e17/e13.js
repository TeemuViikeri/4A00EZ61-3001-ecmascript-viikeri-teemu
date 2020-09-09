function doIt () {
  console.log(this)
}

const obj = { key: 'value' }

// Create a copy of the doIt() function so that
// the keyword thisis replaced with obj

const x = doIt.bind(obj)
x()
