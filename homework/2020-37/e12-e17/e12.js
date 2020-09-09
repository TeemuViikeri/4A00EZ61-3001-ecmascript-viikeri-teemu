const user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  }
}

const myfunc = user.sayHello
myfunc()

// it says undefined because the function is taken as it is from the user so this is going to point to global object
// global object doesn't have a 'name' key so it is undefined due to having no value
