const user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  },
  sayDelayedHello: function () {
    setTimeout(() => { this.sayHello() }, 1000)
    // setTimeout(function () {
    //   this.sayHello()
    // }, 1000)
  }
}

user.sayDelayedHello()

// Explanation: arrow syntax automatically adds a variable outside the setTimeout() function so it includes the user object in this-keyword.
// That way, when this.sayHello() is called inside setTimeout() with arrow syntax, 'this' points to correct target, the object, and not the global.
