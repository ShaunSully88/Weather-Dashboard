var cityInput = document.querySelector("#citysearch");
var cityContainerEl= document.querySelector("#main-container");
var citySearchTerm = document.querySelector("#city-weather");
var cityFormEl = document.querySelector("#city-form");
var searchButton = document.getElementById("search-btn")
var weatherResults = document.getElementById("weather-results")
var fiveDay = document.getElementById("five-day-forecast")
var fiveBody = document.querySelector("five-body")
var weatherToday = document.querySelector("#weather-today");
var weatherTodayCard = document.querySelector("#weather-today-card");
var today = new Date();



// Linking value of city input to getWeather function
var formSubmitHandler = function (event) {
    event.preventDefault();

    var city = cityInput.value.trim();
    console.log(city)
    if(city) {
        getWeather(city);
    
        cityInput.value = "";
        
    } else {
        alert("Please enter a City.");
    }
    
};

//API Call for weather info city input
var getWeather = function (cityInput) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=metric&exclude=hourly,minutely,alerts&appid=42e1f1d2c64b89323a4af79fe114ff93";
    
    fetch(apiUrl).then(function(cityResponse) {
        return cityResponse.json();
    })
    .then(function(cityResponse) {
        console.log(cityResponse)

    // Info for Today's Weather Container
    var cityName = cityResponse.name;
    var latitude = cityResponse.coord.lat;
    console.log(latitude)
    var longitude = cityResponse.coord.lon;
    console.log(longitude)
    var forecastIcon = cityResponse.weather[0].icon;
    var forecastIconLink = "<img src= 'https://openweathermap.org/img/wn/" + forecastIcon + "@2x.png' alt='" + forecast + "' title = '" + forecast + "' />"
    var forecast = cityResponse.weather[0].description;
    var date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
    console.log(date)
    

    

    //Displaying weather results with an image from website
    weatherResults.innerHTML = cityName + " (" + date + ") " + forecastIconLink;
    
    console.log(weatherResults.innerHTML)    

    // API response for city input
    return fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=metric&exclude=hourly,minutely,alerts&appid=42e1f1d2c64b89323a4af79fe114ff93")
    })
    
    .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data)
          showWeather(data);
      });

};


 var showWeather = function(data) {
    
     if(data.length === 0) {
        weatherTodayCard.textContent = "No forecast data found for input city.";
        return;
    }
    
    // temperature info pulled from OpenWeather
    var temperature = document.createElement("p"); 
    temperature.innerHTML = "Temperature: " + data.current.temp + " C°";
    cityContainerEl.appendChild(temperature);
    console.log(temperature)
    
    //Humidex info pulled from OpenWeather
    var humidex = document.createElement("p"); 
    humidex.innerHTML = "Humidex: " + data.current.humidity + "%";
    cityContainerEl.appendChild(humidex);

    // UV info pulled from OpenWeather
    var UV = document.createElement("p");     
    UV.innerHTML = "UV: " + data.current.uvi;
    cityContainerEl.appendChild(UV);

    // Wind Speed info pulled from OpenWeather
    var windspeed = document.createElement("p");   
    windspeed.innerHTML = "Windspeed: " + data.current.wind_speed + " km/h";
    cityContainerEl.appendChild(windspeed);
//  }

 var fiveDayForecast = data.daily;

     for (var i = 0; i < fiveDayForecast.length; i++) {
        var date = (today.getMonth() + 1) + "/" + (today.getDate() + i +1) + "/" + today.getFullYear();
        var forecastIcon = fiveDayForecast[i].weather[0].icon;
        var forecastIconLink = "<img src= 'https://openweathermap.org/img/wn/" + forecastIcon + "@2x.png' alt='" + forecast + "' title = '" + forecast + "' />";
        var forecast = fiveDayForecast[i].weather[0].description;
      
        var day = document.createElement("div");
        day.className = "day";
        day.innerHTML = "<p>" + date + "</p>" +
        "<p>" + forecastIconLink + "</p>" + 
        "<p>Temp: " + fiveDayForecast[i].temp.day + " C°</p>" + 
        "<p>Humidity: " + fiveDayForecast[i].humidity + "%</p>"

        fiveDay.appendChild(day);
    }
}    
searchButton.addEventListener("click", formSubmitHandler);