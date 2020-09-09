const user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  },
  sayDelayedHello: function () {
    const f = this.sayHello.bind(this)
    setTimeout(f, 1000)
  }
}

user.sayDelayedHello()
