const geo = navigator.geolocation

geo.getCurrentPosition(success, error)

const p = document.querySelector('p')

function success (position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9463abcfb1640a1702fa38e78a189530&units=metric`

  console.log(url)

  fetch(url)
    .then(response => response.json())
    .then(json => {
      // First line: location
      const location = document.createElement('p')
      const body = document.querySelector('body')
      body.insertBefore(location, p)
      const name = JSON.stringify(json.name).slice(1, -1)
      const country = JSON.stringify(json.sys.country).slice(1, -1)
      location.innerHTML = `${name}, ${country}`
      // Second line: weather info
      const weather = JSON.stringify(json.weather[0].description).slice(1, -1)
      const temperature = JSON.stringify(json.main.temp.toFixed(1)).slice(1, -1)
      p.innerHTML = `${weather}, ${temperature}°C`
      // Third line: weather icon
      const img = document.createElement('img')
      const icon = JSON.stringify(json.weather[0].icon).slice(1, -1)
      img.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`)
      p.appendChild(img)
    })
}

function error () {
  p.innerHTML = 'Couldn\'t retrieve information.'
}
