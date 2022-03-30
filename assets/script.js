var cityInput = document.querySelector("#citysearch");
var cityContainerEl= document.querySelector("#main-container");
var citySearchTerm = document.querySelector("#city-weather");
var cityFormEl = document.querySelector("#city-form");
var searchButton = document.getElementById("search-btn")
var weatherResults = document.getElementById("weather-results")
var fiveDay = document.getElementById("five-day-card")
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
        cityContainerEl.textContent = "";
        cityInput.value = "";
        
    } else {
        alert("Please enter a City.");
    }
    
};

//API Call for weather info city input
var getWeather = function (cityInput) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=metric&exclude=hourly,minutely,alerts&appid=42e1f1d2c64b89323a4af79fe114ff93";
    console.log(apiUrl)
    fetch(apiUrl).then(function(cityResponse) {
        return cityResponse.json();
    })
    .then(function(cityResponse) {


    // Info for Today's Weather Container
    var cityName = cityResponse.name;
    var latitude = cityResponse.coord.lat;
    var longitude = cityResponse.coord.lon;
    var forecastIcon = cityResponse.weather[0].icon;
    var forecastIconLink = "<img src= 'https://openweathermap.org/img/wn/" + forecastIcon + "@2x.png' alt='" + forecast + "' title = '" + forecast + "' />"
    var forecast = cityResponse.weather[0].description;
    var date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
    console.log(date)
    

    //weatherToday.textContent = "";
    //fiveDay.textContent = "";

    //Displaying weather results with an image from website
    weatherResults.innerHTML = cityName + " (" + date + ") " + forecastIconLink;    

    // API response for city input
    return fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=metric&exclude=hourly,minutely,alerts&appid=42e1f1d2c64b89323a4af79fe114ff93")
    })
    
    //  .then(function (response) {
    //      return response.json();
    //  })
    //  .then(function (response) {
    //      showWeather(response);
    //  });

};


 var showWeather = function(weather) {
     if(weather.length === 0) {
        cityContainerEl.textContent = "No forecast data found for input city.";
        return;
    }
    
    // temperature info pulled from OpenWeather
    var temperature = document.createElement("p");
    temperature.id = "temperature";
    temperature.innerHTML = "Temperature:" + weather.current.temp;
    weatherToday.appendChild(temperature);
    console.log(temperature);
    //Humidex info pulled from OpenWeather
    var humidex = document.createElement("p");
    humidex.id = "humidex";
    humidex.innerHTML = "Humidex:" + weather.current.humidity;
    weatherToday.appendChild(humidex);

    // UV info pulled from OpenWeather
    var UV = document.createElement("p");
    UV.id = "UV";
    UV.innerHTML = "UV" + weather.current.uvi;
    weatherToday.appendChild(UV);

    // Wind Speed info pulled from OpenWeather
    var windspeed = document.createElement("p");
    windspeed.id = "windspeed";
    windspeed.innerHTML = "windspeed" + weather.current.windspeed;
    weatherToday.appendChild(windspeed);
 }
    //  for (var i = 0; i < cities.length; i++) {
    //      //var cityName = repos[i].owner.login + "/" + repos[i].name;

    //      var cityEl = document.createElement("a");
    //      cityEl.classList = "list-item flex-row justify-space-between align-center";
    //      cityEl.setAttribute = ("href", " " + "");

    //      var titleEl = document.createElement("span");
    //      titleEl.textContent =  ""  ;

    //      cityEl.appendChild(titleEl);

    //      var statusEl = document.createElement("span");
    //      statusEl.classList ="flex-row align-center";

    //      if(cities[i].open_issues_count > 0) {
    //          statusEl.innerHTML = 
    //          "<i class='fas fa-times status-icon icon-danger'></i>" + cities[i].open_issues_count + "issue(s)";
    //      } else {
    //          statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    //      }

    //      cityEl.appendChild(statusEl);

    //      cityContainerEl.appendChild(cityEl);
    //  }
//};


console.log(getWeather)
searchButton.addEventListener("click", formSubmitHandler);