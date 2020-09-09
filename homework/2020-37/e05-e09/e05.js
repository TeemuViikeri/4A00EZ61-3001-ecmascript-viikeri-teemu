function doIt () {
  console.log(this)
  console.log(this === global)

  this.x = 5
}

doIt()

console.log(global.x)
