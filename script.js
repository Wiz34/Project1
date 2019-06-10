const DOMAIN = `https://api.waqi.info/feed/beijing/?token=e0bbf4f64d228f592181b5b990abf28561194f95`;
const API_KEY = `e0bbf4f64d228f592181b5b990abf28561194f95`;
const Base_URL = ``
const index = document.querySelector("#index_Data");
const button = document.querySelector("button")

//button.addEventListener('click' async ())

const air_Quality = async () => {
  const response = await axios.get(`${DOMAIN}`)
  const data = response.data.data.city.name
  console.log(data)
}


air_Quality()
