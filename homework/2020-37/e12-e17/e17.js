function helper () {
  user.sayHello()
}

const user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  },
  sayDelayedHello: function () {
    setTimeout(helper, 1000)
  } // this works because helper() function calls user.sayHello() so that function call will retain the correct this value (= user, not global)
}

user.sayHello()
user.sayDelayedHello()
