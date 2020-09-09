
function Person (name) {
  this.name = name
  this.sayHello = function () {
    console.log(`Hello, ${this.name}!`)
  }

  this.sayDelayedHello = function () {
    setTimeout(this.sayHello, 1000)
  }

  this.sayHello = this.sayHello.bind(this)
}
const jack = new Person('jack')
jack.sayDelayedHello()
const tina = new Person('tina')
tina.sayDelayedHello()
