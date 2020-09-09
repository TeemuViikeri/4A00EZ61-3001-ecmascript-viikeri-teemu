class Person {
  constructor (fname, lname) {
    this.fname = fname
    this.lname = lname
  }
}

/* ES2015 compiled version

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(fname, lname) {
  _classCallCheck(this, Person);

  this.fname = fname;
  this.lname = lname;
}

*/

const teemu = new Person('Teemu', 'Viikeri')
console.log(teemu)
