const fetch = require('node-fetch')
const process = require('process')
const args = process.argv.slice(2)

async function fetchAllTitles (id) {
  // Insert user input, given id, to url
  const url = `http://swapi.dev/api/people/${id}`
  // Fetch the person
  const person = await fetch(url)
  // Parse HTTP reponse to JSON
  const personJSON = await person.json()
  // Put film URLs array to variable
  const filmURLs = personJSON.films
  // Get HTTP responses from all fetched urls and map them to variable
  const responses = await Promise.all(filmURLs.map(url => fetch(url)))
  // Turn HTTP responses to JSON map them to variable
  const jsons = await Promise.all(responses.map(response => response.json()))
  // Get titles from JSON and map them to variable
  const titles = await Promise.all(jsons.map(json => json.title))
  // Return wanted object
  return { name: personJSON.name, movies: titles }
}

async function fetchAll (ids) {
  // Create a template array for all names and titles
  const allNamesAndTitles = []

  // Loop all ids found in command line arguments array
  for (let index = 0; index < ids.length; index++) {
    // Get name and movie titles with id
    const nameAndTitles = await fetchAllTitles(ids[index])
    // Push the object containing name and movie titles to array
    allNamesAndTitles.push(nameAndTitles)
  }

  // Return array containing all iterated names and movie titles
  return allNamesAndTitles
}

fetchAll(args).then(data => console.log(data))
