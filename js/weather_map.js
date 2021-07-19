'use strict';

$(document).ready(function () {
    //global variables for long/lat
    var mapLong = -98.4916;
    var mapLat = 29.4252;


    //grab weather using onecall
    function getWeather() {
        $.get(`https://api.openweathermap.org/data/2.5/onecall`, {
            appid: openWeatherAPIKey,
            lat: mapLat,
            lon: mapLong,
            units: "imperial"
        }).done(function (data) { //after getting the weather, this is applying to the cards
            $('#cardHolder').html(''); //need to create this first so when I can append later

            data.daily.forEach(function (day, index) {
                if (index < 5) {
                    console.log(day);
                    //cards with info. Used bootstrap card template
                    var weatherCards = `<div class="card bg-light text-dark" style="width: 18rem;">
        <div class="card-header">
        <!--figure out how to get just the day minus the GMT info-->      
            ${new Date(day.dt * 1000).toDateString()}
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
    }

    mapboxgl.accessToken = mapboxAPIKey;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [mapLong, mapLat],
        zoom: 10
    });

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([mapLong, mapLat])
        .addTo(map);

    function onDragEnd() { //move marker and collect new coordinates for where ever the marker drops
        var lngLat = marker.getLngLat();

        reverseGeocode(lngLat, mapboxAPIKey).then(function (result) {
            $('#currentCity').html('Current City: ' + result);
            marker
                .setLngLat([mapLong, mapLat])

            map.flyTo({
                center: [mapLong, mapLat],
                essential: true
            })
        });
        mapLong = lngLat.lng
        mapLat = lngLat.lat
        getWeather();
    }

//
    marker.on('dragend', onDragEnd);
    getWeather();


//Find button goes to User's requested
    $('#findButton').click(function (e) {
        e.preventDefault();
        var location = $('#search').val();
        var lngLat = marker.getLngLat();
        $('#currentCity').html('Current City: ' + location[0].toUpperCase() + location.substr(1)); //change Current City to reflect search

        geocode(location, mapboxAPIKey).then(function (result) {
            console.log(result);
            mapLong = result[0];
            mapLat = result[1];

            marker
                .setLngLat([mapLong, mapLat])
            map.flyTo({
                center: [mapLong, mapLat],
                essential: true
            })

        });
        getWeather();
    })
})

//
//     //search included on map
// }) //end of document.ready
