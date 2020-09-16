// eslint-disable-next-line no-extend-native
String.prototype.isPalindrome = function () {
  return this.split('').reverse().join('') === this.toString()
}

console.log('saippuakauppias'.isPalindrome()) // true
console.log('abc'.isPalindrome()) // false
