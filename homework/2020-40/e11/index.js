const axios = require('axios')
const url = 'http://localhost:8080/locations/'

const main = async () => {
  try {
    const id = await addLocation({ lat: 30, lon: 30 })
    console.log(id) // outputs id of the added location

    const statusCode = await deleteLocation(1)
    console.log(statusCode) // 204

    const locations = await fetchAllLocations()
    console.log(locations) // outputs all locations

    const location = await fetchLocation(1)
    console.log(location) // outputs location with id of 1
  } catch (err) {
    console.log(err)
  }
}

async function addLocation (location) {
  // Makes POST request and stores response into variable
  const res = await axios.post(url, location)
  // Returns id of added location which is located in response's data property
  return res.data.id
}

async function deleteLocation (id) {
  // Makes DELETE request and stores response into variable
  const res = await axios.delete(url + id)
  // Return status code of response
  return res.status
}

async function fetchAllLocations () {
  // Makes GET request and stores response into variable
  const res = await axios.get(url)
  // Returns all locations which locate in response's data property
  return res.data
}

async function fetchLocation (id) {
  // Makes GET request and stores response into variable
  const res = await axios.get(url + id)
  // Returns all locations which locate in response's data property
  return res.data
}

main()
