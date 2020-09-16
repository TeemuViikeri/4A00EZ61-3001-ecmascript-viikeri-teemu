function args () {
  const userInput = process.argv.splice(2)
  const value = userInput.every(item => !isNaN(Number(item)))

  if (value) {
    return userInput
  } else {
    throw new TypeError('give numbers')
  }
}

export default args
