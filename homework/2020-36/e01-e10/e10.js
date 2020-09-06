function doIt () {
  var str = ''

  for (const arg of arguments) {
    str += arg
  }

  console.log(str)
}

doIt('a') // outputs a
doIt('a', 'b') // outputs ab
doIt('a', 'b', 'c') // outputs abc
