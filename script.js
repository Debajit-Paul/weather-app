// DIV ID's access 👇

getWeatherData = async (city) => {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3a096c65d5msh652f982d10813a6p17b344jsna2293a1a031f',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    };
  
    const URL = "https://open-weather13.p.rapidapi.com/city";
  
    try {
        const response = await fetch(`${URL}/${city}`, options);
        const data = await response.json();
        return data;
    } catch (err) {
        return console.error(err);
    }
}
  
const searchCity = async () => {
    const cityName = document.getElementById("city-input").value
    const data = await getWeatherData(cityName)
    showWeatherData(data)
}
  
const showWeatherData = (weatherData) => {
    console.log(weatherData)
    document.getElementById("city-name").innerText = weatherData.name
    document.getElementById("weather-type").innerText = weatherData.weather[0].main
    document.getElementById("temp").innerText = weatherData.main.temp
    document.getElementById("min-temp").innerText = weatherData.main.temp_min
    document.getElementById("max-temp").innerText = weatherData.main.temp_max
}