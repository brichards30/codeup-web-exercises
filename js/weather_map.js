'use strict';

$(document).ready(function () {
    $.get(`https://api.openweathermap.org/data/2.5/onecall`, {
        appid: openWeatherAPIKey,
        lat: 29.4252,
        lon: -98.4916,
        units: "imperial"
    }).done(function (data) {
        data.daily.forEach(function (day, index) {
            if (index < 5) {
                console.log(day);

                var weatherCards = `<div class="card" style="width: 18rem;">
        <div class="card-header">
        <!--figure out how to get just the day minus the GMT info-->      
            ${new Date(day.dt * 1000)}
        </div>
        <ul class="list-group list-group-flush">
            <li class=list-group-item id="temps">${day.temp.min}&#8457/${day.temp.max}&#8457</li>
            <li class="list-group-item" id="icons"><img src="http://openweathermap.org/img/w/${day.weather[0].icon}.png"></li>
            <li class="list-group-item">Description: <strong>${day.weather[0].description}</strong> <br>
                Humidity: <strong>${day.humidity}&#37</strong>
            </li>
            <li class="list-group-item">Wind: <strong>${day.wind_speed.toFixed()}</strong></li>
            <li class="list-group-item">Pressure: <strong>${day.pressure}</strong></li>
        </ul>
    </div>`
                $('#cardHolder').append(weatherCards);
            }
        })
    })


    mapboxgl.accessToken = mapboxAPIKey;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });


})
