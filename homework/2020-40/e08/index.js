// 8. Implement an application where user can give star war character id:

// give id: 1
// Name: Luke Skywalker

// Use star wars api and fetch api.

// Now implement the app so that it fetches the first film title from the character:

// give id: 1
// First film title: The Empire Strikes Back

// Use await, async. So for example following:

// fetchTitle(1).then((title) => console.log(title))

// Will output

// The Empire Strikes Back

const fetch = require('node-fetch')
const rs = require('readline-sync')
const id = rs.question('give id: ')
const url = `http://swapi.dev/api/people/${id}`

async function fetchTitle (id) {
  const person = await fetch(url)
  const jsonPerson = await person.json()
  const film = await fetch(jsonPerson.films[0])
  const jsonFilm = await film.json()
  return jsonFilm.title
}

fetchTitle(1).then((title) => console.log(title))
