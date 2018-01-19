(async () => {
  const BASE_API_URL = 'https://insertrealapiurl'

  const getApiUrl = (path) =>
    `${BASE_API_URL}${path}/?format=wookiee`

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
  } catch (e) {
    alert('API request error')
  }
})()
