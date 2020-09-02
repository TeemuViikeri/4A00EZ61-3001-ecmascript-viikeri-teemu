const isPositiveInteger = (value, onSuccess, onError) => { value >= 0 ? a() : b() }

function a () {
  console.log('POSITIVE')
}

function b () {
  console.log('NOT POSITIVE')
}

isPositiveInteger(-6, a, b)
