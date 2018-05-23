var myWeather = [];
console.log("Init");
//JSON CALL

$(document).ready(function () {

    if (window.location.pathname == "/weather-website/" || window.location.pathname == "/weather-website/index.html") {
        console.log("entra en if");
        $('#submitWeather').click(function () {
            var city = $("#cities").val();

            $.ajax({
                type: "get",
                url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=42146b673a6207f1590dc01962ce0703',
                "success": function (json_weather) {
                    data = json_weather;
                    var myWeather = data;
                    console.log("my weather", data);

                    addTableNow(myWeather);
                    backgroundCurrent(myWeather);

                },
                "error": function (data) {
                    alert("City not found, please make sure the name of the city is correct.");
                }
            });

        })

    } else if (window.location.pathname == "/weather-website/week_report.html") {
        $('#submitWeather').click(function () {
            var city = $("#cities").val();
            $.ajax({
                type: "get",
                url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=42146b673a6207f1590dc01962ce0703',
                "success": function (json_weather) {
                    data = json_weather;
                    var myWeather = data;
                    console.log("my forecast", data);

                    addTableDays(myWeather);
                    backgroundWeek(myWeather);

                },
                "error": function (data) {
                    alert("City not found, please make sure the name of the city is correct.");
                }
            });
        })
    }

});

// CURRENT WEATHER

function addTableNow(myWeather) {
    var jsonInfo = document.getElementById("jsonInfo");
    document.getElementById("jsonInfo").innerHTML = ""


    var div = document.createElement("div");

    
    var cityH = document.createElement("h4");
    var cityP = document.createElement("p");

    var descH = document.createElement("h4");
    var descP = document.createElement("p");

    var maxH = document.createElement("h4");
    var maxP = document.createElement("p");

    var minH = document.createElement("h4");
    var minP = document.createElement("p");

    var humH = document.createElement("h4");
    var humP = document.createElement("p");

    var windH = document.createElement("h4");
    var windP = document.createElement("p");


    var city = "City";
    cityH.append(city);

    var cityInfo = myWeather.name;
    cityP.append(cityInfo);

    var desc = "Weather";
    descH.append(desc);

    var descInfo = myWeather.weather[0].description;
    descP.append(descInfo);

    var max = "Maximum temperature";
    maxH.append(max);

    var maxInfo = myWeather.main.temp_max;
    maxP.append(maxInfo);

    var min = "Minimum temperature";
    minH.append(min);

    var minInfo = myWeather.main.temp_min;
    minP.append(minInfo);

    var hum = "Humidity";
    humH.append(hum);

    var humInfo = myWeather.main.humidity;
    humP.append(humInfo);

    var wind = "Wind";
    windH.append(wind);

    var windInfo = myWeather.wind.speed;
    windP.append(windInfo);

    div.append(cityH);
    div.append(cityP);
    div.append(descH);
    div.append(descP);
    div.append(maxH);
    div.append(maxP);
    div.append(minH);
    div.append(minP);
    div.append(humH);
    div.append(humP);
    div.append(windH);
    div.append(windP);

    jsonInfo.append(div);
}

// WEEK REPORT

function addTableDays(myWeather) {
    var jsonInfo = document.getElementById("jsonInfo");
    document.getElementById("jsonInfo").innerHTML = ""

    
//EMPTY
    var div = document.createElement("div");
    div.setAttribute('class', "col-md-1");

    jsonInfo.append(div);

//FIRST TR
    var div = document.createElement("div");
    div.setAttribute('class', "col-md-2");

    var cityH = document.createElement("h4");
    var cityP = document.createElement("p");

    var dayH = document.createElement("h4");
    var dayP = document.createElement("p");

    var descH = document.createElement("h4");
    var descP = document.createElement("p");

    var maxH = document.createElement("h4");
    var maxP = document.createElement("p");

    var minH = document.createElement("h4");
    var minP = document.createElement("p");

    var windH = document.createElement("h4");
    var windP = document.createElement("p");


    var city = "City";
    cityH.append(city);

    var cityInfo = myWeather.city.name;
    cityP.append(cityInfo);


    var day = "Day";
    dayH.append(day);

    var dayInfo = myWeather.list[8].dt_txt;
    dayP.append(dayInfo);


    var desc = "Weather";
    descH.append(desc);

    var descInfo = myWeather.list[8].weather[0].description;
    descP.append(descInfo);


    var max = "Maximum temperature";
    maxH.append(max);

    var maxInfo = myWeather.list[8].main.temp_max;
    maxP.append(maxInfo);


    var min = "Minimum temperature";
    minH.append(min);

    var minInfo = myWeather.list[8].main.temp_min;
    minP.append(minInfo);


    var wind = "Wind speed";
    windH.append(wind);

    var windInfo = myWeather.list[8].wind.speed;
    windP.append(windInfo);

    div.append(cityH);
    div.append(cityP);
    div.append(dayH);
    div.append(dayP);
    div.append(descH);
    div.append(descP);
    div.append(maxH);
    div.append(maxP);
    div.append(minH);
    div.append(minP);
    div.append(windH);
    div.append(windP);

    jsonInfo.append(div);

//SECOND TR
    var div = document.createElement("div");
    div.setAttribute('class', "col-md-2");

    var cityH = document.createElement("h4");
    var cityP = document.createElement("p");

    var dayH = document.createElement("h4");
    var dayP = document.createElement("p");

    var descH = document.createElement("h4");
    var descP = document.createElement("p");

    var maxH = document.createElement("h4");
    var maxP = document.createElement("p");

    var minH = document.createElement("h4");
    var minP = document.createElement("p");

    var windH = document.createElement("h4");
    var windP = document.createElement("p");


    var city = "City";
    cityH.append(city);

    var cityInfo = myWeather.city.name;
    cityP.append(cityInfo);


    var day = "Day";
    dayH.append(day);

    var dayInfo = myWeather.list[16].dt_txt;
    dayP.append(dayInfo);


    var desc = "Weather";
    descH.append(desc);

    var descInfo = myWeather.list[16].weather[0].description;
    descP.append(descInfo);


    var max = "Maximum temperature";
    maxH.append(max);

    var maxInfo = myWeather.list[16].main.temp_max;
    maxP.append(maxInfo);


    var min = "Minimum temperature";
    minH.append(min);

    var minInfo = myWeather.list[16].main.temp_min;
    minP.append(minInfo);


    var wind = "Wind speed";
    windH.append(wind);

    var windInfo = myWeather.list[16].wind.speed;
    windP.append(windInfo);

    div.append(cityH);
    div.append(cityP);
    div.append(dayH);
    div.append(dayP);
    div.append(descH);
    div.append(descP);
    div.append(maxH);
    div.append(maxP);
    div.append(minH);
    div.append(minP);
    div.append(windH);
    div.append(windP);

    jsonInfo.append(div);

//THIRD TR
    var div = document.createElement("div");
    div.setAttribute('class', "col-md-2");

    var cityH = document.createElement("h4");
    var cityP = document.createElement("p");

    var dayH = document.createElement("h4");
    var dayP = document.createElement("p");

    var descH = document.createElement("h4");
    var descP = document.createElement("p");

    var maxH = document.createElement("h4");
    var maxP = document.createElement("p");

    var minH = document.createElement("h4");
    var minP = document.createElement("p");

    var windH = document.createElement("h4");
    var windP = document.createElement("p");


    var city = "City";
    cityH.append(city);

    var cityInfo = myWeather.city.name;
    cityP.append(cityInfo);


    var day = "Day";
    dayH.append(day);

    var dayInfo = myWeather.list[24].dt_txt;
    dayP.append(dayInfo);


    var desc = "Weather";
    descH.append(desc);

    var descInfo = myWeather.list[24].weather[0].description;
    descP.append(descInfo);


    var max = "Maximum temperature";
    maxH.append(max);

    var maxInfo = myWeather.list[24].main.temp_max;
    maxP.append(maxInfo);


    var min = "Minimum temperature";
    minH.append(min);

    var minInfo = myWeather.list[24].main.temp_min;
    minP.append(minInfo);


    var wind = "Wind speed";
    windH.append(wind);

    var windInfo = myWeather.list[24].wind.speed;
    windP.append(windInfo);

    div.append(cityH);
    div.append(cityP);
    div.append(dayH);
    div.append(dayP);
    div.append(descH);
    div.append(descP);
    div.append(maxH);
    div.append(maxP);
    div.append(minH);
    div.append(minP);
    div.append(windH);
    div.append(windP);

    jsonInfo.append(div);

//FOURTH TR
    var div = document.createElement("div");
    div.setAttribute('class', "col-md-2");

    var cityH = document.createElement("h4");
    var cityP = document.createElement("p");

    var dayH = document.createElement("h4");
    var dayP = document.createElement("p");

    var descH = document.createElement("h4");
    var descP = document.createElement("p");

    var maxH = document.createElement("h4");
    var maxP = document.createElement("p");

    var minH = document.createElement("h4");
    var minP = document.createElement("p");

    var windH = document.createElement("h4");
    var windP = document.createElement("p");


    var city = "City";
    cityH.append(city);

    var cityInfo = myWeather.city.name;
    cityP.append(cityInfo);


    var day = "Day";
    dayH.append(day);

    var dayInfo = myWeather.list[32].dt_txt;
    dayP.append(dayInfo);


    var desc = "Weather";
    descH.append(desc);

    var descInfo = myWeather.list[32].weather[0].description;
    descP.append(descInfo);


    var max = "Maximum temperature";
    maxH.append(max);

    var maxInfo = myWeather.list[32].main.temp_max;
    maxP.append(maxInfo);


    var min = "Minimum temperature";
    minH.append(min);

    var minInfo = myWeather.list[32].main.temp_min;
    minP.append(minInfo);


    var wind = "Wind speed";
    windH.append(wind);

    var windInfo = myWeather.list[32].wind.speed;
    windP.append(windInfo);

    div.append(cityH);
    div.append(cityP);
    div.append(dayH);
    div.append(dayP);
    div.append(descH);
    div.append(descP);
    div.append(maxH);
    div.append(maxP);
    div.append(minH);
    div.append(minP);
    div.append(windH);
    div.append(windP);

    jsonInfo.append(div);

//FITH TR
    var div = document.createElement("div");
    div.setAttribute('class', "col-md-2");

    var cityH = document.createElement("h4");
    var cityP = document.createElement("p");

    var dayH = document.createElement("h4");
    var dayP = document.createElement("p");

    var descH = document.createElement("h4");
    var descP = document.createElement("p");

    var maxH = document.createElement("h4");
    var maxP = document.createElement("p");

    var minH = document.createElement("h4");
    var minP = document.createElement("p");

    var windH = document.createElement("h4");
    var windP = document.createElement("p");


    var city = "City";
    cityH.append(city);

    var cityInfo = myWeather.city.name;
    cityP.append(cityInfo);


    var day = "Day";
    dayH.append(day);

    var dayInfo = myWeather.list[36].dt_txt;
    dayP.append(dayInfo);


    var desc = "Weather";
    descH.append(desc);

    var descInfo = myWeather.list[36].weather[0].description;
    descP.append(descInfo);


    var max = "Maximum temperature";
    maxH.append(max);

    var maxInfo = myWeather.list[36].main.temp_max;
    maxP.append(maxInfo);


    var min = "Minimum temperature";
    minH.append(min);

    var minInfo = myWeather.list[36].main.temp_min;
    minP.append(minInfo);


    var wind = "Wind speed";
    windH.append(wind);

    var windInfo = myWeather.list[36].wind.speed;
    windP.append(windInfo);

    div.append(cityH);
    div.append(cityP);
    div.append(dayH);
    div.append(dayP);
    div.append(descH);
    div.append(descP);
    div.append(maxH);
    div.append(maxP);
    div.append(minH);
    div.append(minP);
    div.append(windH);
    div.append(windP);

    jsonInfo.append(div);
    
//EMPTY
    var div = document.createElement("div");
    div.setAttribute('class', "col-md-1");

    jsonInfo.append(div);
}

// HOT-COLD BACKGROUND (code not cleaned yet...!!!)

function backgroundCurrent(myWeather) {
    if (myWeather.weather[0].description == "clear sky") {
        document.body.style.background = "url(css/sky-sunny-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.weather[0].description == "breeze") {
        document.body.style.background = "url(css/sky-sunny-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.weather[0].description = "cloud") {
        document.body.style.background = "url(css/sky-stormy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.weather[0].description = "snow") {
        document.body.style.background = "url(css/sky-stormy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.weather[0].description = "rain") {
        document.body.style.background = "url(css/sky-stormy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.weather[0].description = "storm") {
        document.body.style.background = "url(css/sky-stormy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    }  else if (myWeather.weather[0].description = "drizzle") {
        document.body.style.background = "url(css/sky-stormy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.weather[0].description = "mist") {
        document.body.style.background = "url(css/sky-foggy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.weather[0].description = "haze") {
        document.body.style.background = "url(css/sky-foggy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.weather[0].description = "fog") {
        document.body.style.background = "url(css/sky-foggy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.weather[0].description = "windy") {
        document.body.style.background = "url(css/sky-foggy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } 
}

function backgroundWeek(myWeather) {
    if (myWeather.list[8].weather[0].description == "clear sky") {
        document.body.style.background = "url(css/sky-sunny-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.list[8].weather[0].description == "breeze") {
        document.body.style.background = "url(css/sky-sunny-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.list[8].weather[0].description = "cloud") {
        document.body.style.background = "url(css/sky-stormy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.list[8].weather[0].description = "snow") {
        document.body.style.background = "url(css/sky-stormy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.list[8].weather[0].description = "rain") {
        document.body.style.background = "url(css/sky-stormy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.list[8].weather[0].description = "storm") {
        document.body.style.background = "url(css/sky-stormy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.list[8].weather[0].description = "drizzle") {
        document.body.style.background = "url(css/sky-stormy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.list[8].weather[0].description = "mist") {
        document.body.style.background = "url(css/sky-foggy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.list[8].weather[0].description = "haze") {
        document.body.style.background = "url(css/sky-foggy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.list[8].weather[0].description = "fog") {
        document.body.style.background = "url(css/sky-foggy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else if (myWeather.list[8].weather[0].description = "windy") {
        document.body.style.background = "url(css/sky-foggy-web.png) no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } 
}
