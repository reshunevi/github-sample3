let cityName = document.getElementById("searchCity");
cityName.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let enteredCityName = document.getElementById("searchCity").value;
        displayWeatherDetails(enteredCityName)
    }
  });


async function displayWeatherDetails(cityName) {
    try{
        response = await fetch(`https://goweather.herokuapp.com/weather/${cityName}`);
        let data = await response.json();

        let displayDescription = data.description;
        let displayTemperature = data.temperature;
        let displayWind = data.wind;
        
        let displayForecast = data.forecast;
        let listItem = document.createElement('ul');

        for (details of displayForecast){
          let subListItem = document.createElement('li');
          listItem.style.listStyleType = 'square';

          subListItem.innerHTML = `<li>Day: ${displayForecast[0].day} </li> <li>Temperature: ${displayForecast[0].temperature}</li> <li>Wind: ${displayForecast[0].wind}</li>`
          listItem.appendChild(subListItem);

        }
        
        
        console.log(data.details);

    } catch (error){
        console.error('error fetching the weather api')
    }
}