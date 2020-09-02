function Person (name, age) {
  this.name = name
  this.age = age
}

const tina = new Person('Tina', 25)

for (const key in tina) {
  const element = tina[key]
  console.log(element)
}
