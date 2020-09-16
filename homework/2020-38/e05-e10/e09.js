class Dog {
  constructor (name) {
    this.name = name
    this.sniffButt = this.sniffButt.bind(this)
  }

  sniffButt () {
    console.log(this.name + ' sniffs butt')
  }

  delayedSniffButt () {
    setTimeout(this.sniffButt, 1000)
  }
}

const spot = new Dog('spot')
const vilma = new Dog('vilma')
spot.sniffButt()
vilma.sniffButt()

spot.delayedSniffButt()
vilma.delayedSniffButt()
