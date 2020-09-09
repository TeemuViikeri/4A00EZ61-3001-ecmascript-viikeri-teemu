const user = {
  firstName: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.firstName}!`)
  }
}

user.sayHello = user.sayHello.bind(user) // bind() sets an object, 'user' in this case, as value of all 'this' keywords that appear in the function

const myFunction = user.sayHello
myFunction() // works
