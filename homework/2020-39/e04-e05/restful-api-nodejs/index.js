const HttpConnection = require('./httpconnection.js')
const url = 'http://localhost:8080/locations/'

const args = process.argv.splice(2)
const httpmethod = args[0]

if (httpmethod === 'get') { // GET
  const id = args[1]
  HttpConnection.get(url, id, object => console.log(`Location with id ${object.id}: ${object.lat}, ${object.lon}`))
} else if (httpmethod === 'del') { // DELETE
  const id = args[1]
  HttpConnection.delete(url, id, response => console.log(response.status))
} else if (httpmethod === 'add') { // POST
  const a = args[1]
  const b = args[2]
  const location = { lat: a, lon: b }
  HttpConnection.post(url, location, object => console.log(`Location with id ${object.id} and coordinates ${object.lat} (lat), ${object.lon} (long) was added.`))
} else if (httpmethod === undefined) {
  HttpConnection.get(url, undefined, jsonArray => jsonArray.forEach(location => { console.log(`Location with id ${location.id}: ${location.lat}, ${location.lon}`) }))
}
