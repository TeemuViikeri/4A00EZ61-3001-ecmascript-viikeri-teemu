const user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  },
  sayDelayedHello: function () {
    const thisWorks = this
    setTimeout(function () {
      thisWorks.sayHello()
    }, 1000)
  }
}

user.sayDelayedHello()
