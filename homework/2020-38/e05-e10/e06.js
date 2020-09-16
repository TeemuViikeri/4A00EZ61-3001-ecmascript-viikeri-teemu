class Person {
  constructor (name) {
    this.name = name
    // drinkBeer will be two times in the memory after jack and tina are creted: function is passed to created objects as their own functions through constructor
    this.drinkBeer = function () {
      console.log(this.name + ' drinks beer')
    }
  }

  // Once in memory: function is not in constructor so it doesn't pass to object as their own function
  drinkBeer () {
    console.log(this.name + ' drinks beer')
  }

  // Once in memory: function is not in constructor so it doesn't pass to object as their own function
  sayHello () {
    console.log('hello from ' + this.name)
  }
}

const jack = new Person('jack')
jack.sayHello()
const tina = new Person('tina')
tina.sayHello()

Person.prototype.sayHello() // Person.prototype does hold this function
Person.prototype.drinkBeer() // Person.prototype does hold this function
