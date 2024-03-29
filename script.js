const DOMAIN = `https://api.waqi.info/feed/monaco/?token=e0bbf4f64d228f592181b5b990abf28561194f95`;
const API_KEY = `a6ee8cf9e9ac8c96723926d69f93f117d1f343a3`;
const Base_URL = `https://api.waqi.info`
//const index = document.querySelector("#index_Data");
//const btn = document.querySelector("button")
const head = document.querySelector('header')
// const head1 = head.style.background
const good = 'url(images/0-50.jpg)'
const mod = 'url(images/51-100moderate.jpg)'
const usg = 'url(images/101-150.jpg)'
const uh = 'url(images/images/151-200unhealthy.jpeg)'
const vuh = 'url(images/veryunhealthy200-300.jpg)'
const haz = 'url(images/500aqi.jpg)'
let city;

const render = () => {
  const citylist = document.querySelector('.city-details')
  citylist.innerHTML = '';

  const cityName = city.city.name
  const AQI = city.aqi
  const time = city.time.s
  const long_lat = city.city.geo
  const station_name = city.attributions[0].name

  switch (true) {
    case (AQI <= 50):
      head.style.backgroundImage = good;
      break;
    case (AQI > 50 && AQI <= 100):
      head.style.backgroundImage = mod;
      break;
    case (AQI > 100 && AQI <= 150):
      head.style.backgroundImage = usg;
      break;
    case (AQI > 150 && AQI <= 200):
      head.style.backgroundImage = uh;
      break;
    case (AQI > 200 && AQI <= 300):
      head.style.backgroundImage = vuh;
      break;
    case (AQI > 300 && AQI <= 500):
      head.style.backgroundImage = haz;
      break;
  }

  console.log(city)
  const cityDiv = document.createElement('div')
  cityDiv.innerHTML = `
  <h1>${cityName}</h1>
  <h3>${AQI}</h3>
  <h4>${time}</h4>
  <h4>${long_lat}</h4>
  <h4>${station_name}</h4>
  <button id='inbutt'> more details</button >
  `;
  const detailsBtn = cityDiv.querySelector('button')

  detailsBtn.addEventListener('click', () => {
    const details = document.querySelector('.additional-details')
    details.innerHTML = ''

    const objArr = Object.keys(city.iaqi);

    objArr.forEach((key) => {
      const detailContainer = document.createElement('div')
      detailContainer.innerHTML = `
        <h4>${key}: ${city.iaqi[key].v}</h4>
        `
      details.appendChild(detailContainer)
    })
  })
  citylist.appendChild(cityDiv)
}

const searchFetch = async (input) => {
  const response = await axios.get(`${Base_URL}/feed/${input}/?token=${API_KEY}`)
  city = response.data.data
  render();
};

const handleInput = () => {
  const searchBar = document.querySelector('input');
  searchFetch(searchBar.value);
};

const btn = document.querySelector('button')
btn.addEventListener('click', handleInput);
