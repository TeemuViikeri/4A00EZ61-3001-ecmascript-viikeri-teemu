function max (array) {
  var max = array[0]

  array.forEach(element => {
    if (element > max) {
      max = element
    }
  })

  return max
}

function min (array) {
  var min = array[0]

  array.forEach(element => {
    if (element < min) {
      min = element
    }
  })

  return min
}

export { max, min }
