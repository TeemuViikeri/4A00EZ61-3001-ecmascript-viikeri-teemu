function Person (fname, lname) {
  if (!(this instanceof Person)) {
    throw new TypeError('Cannot call a class as a function')
  }

  this.fname = fname
  this.lname = lname

  console.log(this)
}

const obj1 = new Person('Teemu', 'Viikeri')
const obj2 = Person('Teemu', 'Viikeri')

console.log(obj1) // doesn't fail because 'new' is used
console.log(obj2) // fails and throws TypeError
