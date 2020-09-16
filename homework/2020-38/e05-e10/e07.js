function Person (name) {
  this.name = name
}

Person.prototype.drinkBeer = function () {
  console.log(this.name + ' drinks beer')
}

const jack = new Person('jack')
jack.drinkBeer()
const tina = new Person('tina')
tina.drinkBeer()

function Programmer (name, salary) {
  // invokes the Person function so that this refers to the Programmer object
  Person.call(this, name)
  this.salary = salary
}

Programmer.prototype.codeApps = function () {
  console.log(this.name + ' implements apps')
}

// We want to create a prototype chain so programmers can also be persons: hannah -> Programmer.prototype -> Person.prototype -> Object.prototype
Object.setPrototypeOf(Programmer.prototype, Person.prototype)

const hannah = new Programmer('hannah', 4000)
hannah.drinkBeer() // doesn't work before setting correct inheritance
hannah.codeApps()
