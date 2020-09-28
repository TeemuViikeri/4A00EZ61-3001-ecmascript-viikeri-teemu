function makeCalculation () {
  function asynFunc (resolve, reject) {
    setTimeout(() => {
      console.log('calculating stuff')
      const division = 5 / 5
      resolve(division)
    }, 1000)
  }
  const p = new Promise(asynFunc)
  return p
}

// make the calculation that takes time and when ready, invoke the
// arrow function.
// makeCalculation().then(result => console.log(`result = ${result}`))

function sendStuffToBackend (result) {
  function asynFunc (resolve, reject) {
    setTimeout(() => {
      console.log(`sending to backend ${result}`)
      resolve('done')
    }, 1000)
  }
  const p = new Promise(asynFunc)
  return p
}

makeCalculation()
  .then(sum => sendStuffToBackend(sum))
  .then(msg => console.log(msg))
