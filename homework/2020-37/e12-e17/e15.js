const user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  }
}

user.sayHello()

setTimeout(() => { user.sayHello() }, 1000)
user.sayHello = function () { console.log('does it work?') }
/* setTimeout() will call the redefined function in line 11 and not the original user.sayHello() because before running the code,
hoisting happens and the user.sayHello() is redefined at the top of scope which means top of the source code with this example */
