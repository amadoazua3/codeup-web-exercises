
$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data: {
        APPID: OPEN_WEATHERMAP_TOKEN,
        // q: "Arlington, TX, US",
        lat: 32.7357,
        lon: -97.1081
    },
    success: function (data){
        console.log(data);
    }
});