(async () => {
  const BASE_API_URL = 'https://swapi.co/api'

  const getApiUrl = (path) =>
    `${BASE_API_URL}${path}`

  const dom = {
    starship: document.getElementById('starship'),
    planet: document.getElementById('planet'),
    person: document.getElementById('person')
  }

  try {
    const [starship, planet, person] = await Promise.all([
      fetch(getApiUrl(`/starships/${dom.starship.innerHTML}`)).then(response => response.json()),
      fetch(getApiUrl(`/planets/${dom.planet.innerHTML}`)).then(response => response.json()),
      fetch(getApiUrl(`/people/${dom.person.innerHTML}`)).then(response => response.json())
    ])

    dom.starship.innerHTML = starship.name
    dom.planet.innerHTML = planet.name
    dom.person.innerHTML = person.name
  } catch (e) {
    alert('API request error')
  }
})()
