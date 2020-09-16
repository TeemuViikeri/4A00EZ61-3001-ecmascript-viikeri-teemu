class Circle {
  constructor (radius) {
    if (radius < 0) {
      throw new Error('ERROR: Value of radius must be greater than 0.')
    }

    // Store the value with _, otherwise getter/setter will cause RangeError
    this._radius = radius
  }

  get radius () {
    // Note: USE _ TO STORE THE RADIUS VALUE! If not, get radius will go into a recursive call loop which causes RangeError (Stack Overflow)
    return this._radius
  }

  set radius (value) {
    if (value < 0) {
      throw new Error('ERROR: Value of radius must be greater than 0.')
    }

    // Note: USE _ TO STORE THE RADIUS VALUE! If not, set radius will go into a recursive call loop which causes RangeError (Stack Overflow)
    this._radius = value
  }

  // Static methods are called via class Circle itself, not via instances created from the class
  static max (circles) {
    // Set max to be the first value of circles array which is then compared to all other values in the array
    let max = circles[0].radius

    // Iterate over circles array and compare the radius to max variable
    circles.forEach(circle => {
      if (circle.radius > max) {
        max = circle.radius
      }
    })

    return max
  }
}

const c = new Circle(50) // sets radius
c.radius = 30 // changes radius, uses setter
console.log(c.radius) // returns radius, uses getter
// c.radius = -30 // crashes app, radius must be > 0

const a = new Circle(10)
const b = new Circle(30)
const d = new Circle(70)

const x = Circle.max([a, b, c, d])
console.log(x)
