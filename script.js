const DOMAIN = `https://api.waqi.info/feed/monaco/?token=e0bbf4f64d228f592181b5b990abf28561194f95`;
const API_KEY = `e0bbf4f64d228f592181b5b990abf28561194f95`;
const Base_URL = `https://api.waqi.info`
//const index = document.querySelector("#index_Data");
//const btn = document.querySelector("button")









const searchFetch = async (input) => {
  const response = await axios.get(`${Base_URL}/feed/${input}/?token=${API_KEY}`)
  //const data = response.data.
  //console.log(response.Data)
};

const handleInput = () => {
  const searchBar = document.querySelector('input');
  searchFetch(searchBar.value);
};

const btn = document.querySelector('button')
btn.addEventListener('click', handleInput);


//const btn = document.querySelector('button')
//btn.addEventListener('click', handleInput);