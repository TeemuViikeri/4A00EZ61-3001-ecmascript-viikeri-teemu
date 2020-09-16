function Clock () {
  this.time = new Date().toString()
  this.startInterval = function () {
    // // Case 1: anonymous inner function and closure
    // const t = this
    // setInterval(function () {
    //   t.tick()
    // }, 1000)

    // // Case 2: arrow syntax
    // setInterval(() => { this.tick() }, 1000)

    // Case 3: function binding
    setInterval(t, 1000)
  }

  this.tick = function () {
    this.time = new Date().toString()
    console.log(this.render())
  }

  this.render = function () {
    return this.time
  }

  // Using bind()
  const t = this.tick.bind(this)
}

const clock = new Clock()
console.log(clock.render()) // outputs time
clock.startInterval() // outputs time for every second, uses render
