function doIt () {
  console.log('hello')
}
console.log(typeof doIt)
console.log(doIt instanceof Function)

// This code results in two rows of console logs:
// function
// true

// typeof returns the type of its given parameter, therefore the "function" output
// instance of return boolean value regarding if the given parameter matches the given type, therefore the "true" output
