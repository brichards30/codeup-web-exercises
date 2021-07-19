'use strict';

$(document).ready(function () {
    var mapLong = -98.4916;
    var mapLat = 29.4252;

    function getWeather() {
        $.get(`https://api.openweathermap.org/data/2.5/onecall`, {
            appid: openWeatherAPIKey,
            lat: mapLat,
            lon: mapLong,
            units: "imperial"
        }).done(function (data) {
            $('#cardHolder').html('');

            data.daily.forEach(function (day, index) {
                if (index < 5) {
                    console.log(day);


                    var weatherCards = `<div class="card" style="width: 18rem;">
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

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        mapLong = lngLat.lng
        mapLat = lngLat.lat
        getWeather();
    }

    marker.on('dragend', onDragEnd);
    getWeather();


    $('#findButton').click(function (e) {
        e.preventDefault();
        var location = $('#search').val();
        var lngLat = marker.getLngLat();
        $('#currentCity').html('Current City: ' + location[0].toUpperCase() + location.substr(1));

        geocode(location, mapboxAPIKey).then(function(result) {
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
        // var lngLat = marker.getLngLat()
        // $.ajax('https://api.mapbox.com/geocoding/v5/mapbox.places/' + userInput + '.json?access_token=pk.eyJ1IjoiYnJpY2hhcmRzMzAzMCIsImEiOiJja3I1MXNjZG4wYzU4MnJyMmMybGVucTdzIn0.wdkC1CrWYC3_yfl1XCJTCw').done(function (data){
        //     console.log(data.features[0].center);
        //     mapLong = data.features[0].center[0];
        //     mapLat = data.features[0].center[1];
        //     getWeather();


            //Step 1: Get Lat/Lng from data
            //Step 2: Move map to new lat/lng received from data
            //Step 3: call getWeather
        })


    })
//     map.addControl(
//         new MapboxGeocoder({
//             accessToken: mapboxAPIKey,
//             mapboxgl: mapboxgl
//         })
//     );
//
//     //search included on map
// }) //end of document.ready
