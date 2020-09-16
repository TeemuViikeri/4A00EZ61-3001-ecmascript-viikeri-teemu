// const obj = { name: 'jussi' }

function Dog (name) {
  this.name = name
  // // sniffButt is passed to created objects themselves and sniffButt is in the memory as many times as how many objects are created
  // this.sniffButt = function () {
  //   console.log('hello world')
  // }

  // // object obj is binded to sniffButt's this keywords so sniffButt will print 'jussi sniffs butt'
  // this.sniffButt = this.sniffButt.bind(obj)

  // Now the object created with this constructor function will be binded into sniffButt's this keywords
  this.sniffButt = this.sniffButt.bind(this)
}

// sniffButt is once in the memory: function is only in prototype once, function is not passed to objects created with Dog constructor function
Dog.prototype.sniffButt = function () {
  console.log(this.name + ' sniffs butt')
}

const spot = new Dog('spot')
const vilma = new Dog('vilma')
spot.sniffButt()
vilma.sniffButt()

// Remember that sniffButt is called inside setTimeout through normal function call
Dog.prototype.delayedSniffButt = function () {
  setTimeout(this.sniffButt, 1000)
}

spot.delayedSniffButt()
vilma.delayedSniffButt()
