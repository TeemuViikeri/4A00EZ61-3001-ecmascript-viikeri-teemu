function doIt () {
  function helloWorld () {
    console.log('hello world')
  }

  return helloWorld
}

const f = doIt()
f()
