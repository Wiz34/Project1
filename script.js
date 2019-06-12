const DOMAIN = `https://api.waqi.info/feed/monaco/?token=e0bbf4f64d228f592181b5b990abf28561194f95`;
const API_KEY = `a6ee8cf9e9ac8c96723926d69f93f117d1f343a3`;
const Base_URL = `https://api.waqi.info`
//const index = document.querySelector("#index_Data");
//const btn = document.querySelector("button")



const render = (city) => {

  const citylist = document.querySelector('.city-details')
  citylist.innerHTML = '';

  const cityName = city.city.name
  const AQI = city.aqi
  const time = city.time.s
  const long_lat = city.city.geo
  const station_name = city.attributions[0].name
  console.log(city)

  const cityDiv = document.createElement('div')
  cityDiv.innerHTML = `
      <h1>${cityName}</h1>
      <h3>${AQI}</h3>
      <button id='inbutt'> more details</button >
      `
  const detailsBtn = cityDiv.querySelector('button')

  detailsBtn.addEventListener('click', async () => {



    const details = document.querySelector('.additional-details')
    details.innerHTML = ''



    const detailContainer = document.createElement('div')
    detailContainer.innerHTML = `
      <h4>${time}</h4>
      <h4>${long_lat}
      <h4>${station_name}
    
      


      `

    details.appendChild(detailContainer)



  })
  citylist.appendChild(cityDiv)
}





const searchFetch = async (input) => {
  const response = await axios.get(`${Base_URL}/feed/${input}/?token=${API_KEY}`)
  const data = response.data.data
  render(data)
};

const handleInput = () => {
  const searchBar = document.querySelector('input');
  searchFetch(searchBar.value);
};

const btn = document.querySelector('button')
btn.addEventListener('click', handleInput);


