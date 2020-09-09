function doIt (a, b) {
  console.log(this)
}

const object = { key: 'value' }
doIt.call(object, 5, 5)

// with function.call() you can redefine this to point into a different object than the default global object
