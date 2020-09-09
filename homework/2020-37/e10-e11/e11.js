function doIt (a, b) {
  console.log(this)
}

const object = { key: 'value' }
doIt.apply(object, [5, 5])

// function.apply() is almost the same as function.call() but it takes function arguments as an array
