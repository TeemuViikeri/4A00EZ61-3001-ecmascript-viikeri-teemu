function makeCalculation (a, b) {
  function asynFunc (resolve, reject) {
    if (b === 0) {
      reject('cannot divide with zero.')
    } else {
      setTimeout(() => {
        console.log('calculating stuff')
        const division = a / b
        resolve(division)
      }, 1000)
    }
  }
  const p = new Promise(asynFunc)
  return p
}

// make the calculation that takes time and when ready, invoke the
// arrow function.
// makeCalculation().then(result => console.log(`result = ${result}`))

function sendStuffToBackend (result) {
  function asynFunc (resolve, reject) {
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      reject('failed to connect to backend.')
    } else {
      setTimeout(() => {
        console.log(`sending to backend ${result}`)
        resolve('done')
      }, 1000)
    }
  }
  const p = new Promise(asynFunc)
  return p
}

makeCalculation(10, 5)
  .then(division => sendStuffToBackend(division))
  .then(msg => console.log(msg))
  .catch(errormsg => console.log(errormsg))
