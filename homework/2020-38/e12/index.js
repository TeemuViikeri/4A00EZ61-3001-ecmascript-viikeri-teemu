class Person {
  constructor (name) {
    // eslint-disable-next-line
    this.#name = name
    // a) Fix the this problem by moving the hello() function inside of constructor.
    // this.hello = () => console.log(`hello ${this.name}`)
  }

  // b) Fix the this problem using class fields (which does the same than in a)
  hello = () => {
    console.log(`hello ${this.#name}`)
  }

  delayedHello () {
    setTimeout(this.hello, 1000)
  }
}

const jack = new Person('jack')
console.log(jack)
// jack.#name = 'tina' --> SyntaxError: Private field '#name' must be declared in an enclosing class
jack.delayedHello()
