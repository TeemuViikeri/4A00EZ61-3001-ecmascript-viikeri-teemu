// eslint-disable-next-line no-new-func
var myFunc = new Function('', 'console.log("hello")')
myFunc.call()

// Function is defined with new keyword that creates an instance of the function object which is then stores in the myFunc variable.
// new Function() parses the string representations inside the function so that they can be used when called
// first string represents a parameter -- there is none in this exercise but there could multiple parameters defined, i.e. new Function('a', 'b', 'c' ...)
// second string represents the actual function which is performed when the function is called
// myFunc.call() calls the defined function
