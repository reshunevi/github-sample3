const apiKey = '37ea38c701e374441a8254694fe722da';
let form = document.getElementById('weather-form');
let weatherinfo = document.getElementById('weather-info');

form .addEventListener('submit', (event) =>{
    event.preventDefault();
    let city = document.getElementById('city').value;
    getWeather(city);
});

async function getWeather(city)
{ let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`);
    let data = await response.json();

    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.analyticssteps.com/backend/media/thumbnail/6006173/6278986_1571298721_Weather_Forecoast_Graphics.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
} catch (error){
    console.log('error fatching the weather data')
}