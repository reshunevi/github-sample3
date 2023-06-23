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

        //select id and create lists

        let displayDetails = document.getElementById("displayWeather");
        let firstListItem = document.createElement('ul');

        // for (let weatherInfo of data){

          
        let displayDescription = data.description;
        let displayTemperature = data.temperature;
        let displayWind = data.wind;

          let listOfWeather = document.createElement('li');
          listOfWeather.style.listStyleType = 'none';

          listOfWeather.innerHTML = `<li>Description: ${displayDescription}</li><li>Temperature: ${displayTemperature}</li><li>Wind: ${displayWind}</li>`

          firstListItem.appendChild(listOfWeather); 
          displayDetails.appendChild(firstListItem);  

          console.log(displayDetails);

          //create list for forecast

           let displayForecast = data.forecast;
           let listItem = document.createElement('ul');

        for (details of displayForecast){
          let subListItem = document.createElement('li');
          subListItem.style.listStyleType = 'none';

          subListItem.innerHTML = `<li>Forecast:</li><li>Day: ${details.day} </li> <li>Temperature: ${details.temperature}</li> <li>Wind: ${details.wind}</li>`
          listItem.appendChild(subListItem);

        }

        displayDetails.appendChild(listItem);
        
        // }

        
       
               
        

    } catch (error){
        console.error('error fetching the weather api')
    }
}