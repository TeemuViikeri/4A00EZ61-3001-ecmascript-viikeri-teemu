function Person (fname, lname) {
  console.log(this instanceof Person)

  this.fname = fname
  this.lname = lname
}

const teemu = new Person('Teemu', 'Viikeri')
console.log(teemu)
const pauli = new Person('Pauli', 'Viikeri')
console.log(pauli)
const petteri = new Person('Petteri', 'Viikeri')
console.log(petteri)

var obj = new Person('jack', 'smith')
console.log(obj)

// With new: Output is the 'true' and the object itself created with new keyword aka this points to the object
// Without new: Output is the 'false' and 'undefined'
