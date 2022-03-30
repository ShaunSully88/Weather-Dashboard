var cityInput = document.querySelector("#citysearch");
var cityContainerEl= document.querySelector("#main-container");
var citySearchTerm = document.querySelector("#city-weather");
var cityFormEl = document.querySelector("#city-form");
var searchButton = document.getElementById("search-btn")
var apiKey = "42e1f1d2c64b89323a4af79fe114ff93";
var cityName = response.name;
var latitude = response.coord.lat;
var longitude = repsonse.coord.lon;
var today = new Date();
var date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
var forecast = response.weather[0].description;
var weatherToday = document.querySelector("#weather-today");
var weatherTodayCard = document.querySelector("#weather-today-card");

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


var getWeather = function (cityInput) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?" + cityInput + "&exclude=hourly,minutely,alerts&appid=42e1f1d2c64b89323a4af79fe114ff93";

    fetch(apiUrl).then(function(response) {
        if(response.ok) {
        response.json().then(function(data) {
                    
        });
       } else {
        alert("Error! " + response.statusText);
       }
    })
    .catch(function(error) {
        alert("Unable to reach website");
    });
    console.log(fetch)

    weatherToday.textContent = "";

};


var showWeather = function(cities, searchTerm) {
    if(cities.length === 0) {
        cityContainerEl.textContent = "No cities found!";
        return;
    }
    
    citySearchTerm.textContent = searchTerm;

    for (var i = 0; i < cities.length; i++) {
        //var cityName = repos[i].owner.login + "/" + repos[i].name;

        var cityEl = document.createElement("a");
        cityEl.classList = "list-item flex-row justify-space-between align-center";
        cityEl.setAttribute = ("href", " " + "");

        var titleEl = document.createElement("span");
        titleEl.textContent =  ""  ;

        cityEl.appendChild(titleEl);

        var statusEl = document.createElement("span");
        statusEl.classList ="flex-row align-center";

        if(cities[i].open_issues_count > 0) {
            statusEl.innerHTML = 
            "<i class='fas fa-times status-icon icon-danger'></i>" + cities[i].open_issues_count + "issue(s)";
        } else {
            statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
        }

        cityEl.appendChild(statusEl);

        cityContainerEl.appendChild(cityEl);
    }
};


console.log(getWeather)
searchButton.addEventListener("click", formSubmitHandler);