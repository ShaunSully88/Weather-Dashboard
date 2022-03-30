var cityInput = document.querySelector("#citysearch");
var cityContainerEl= document.querySelector("#main-container");
var citySearchTerm = document.querySelector("#city-weather");
var cityFormEl = document.querySelector("#city-form");
var searchButton = document.getElementById("search-btn")
var fiveDay = document.getElementById("five-day-card")
var apiKey = "42e1f1d2c64b89323a4af79fe114ff93";
var weatherToday = document.querySelector("#weather-today");
var weatherTodayCard = document.querySelector("#weather-today-card");
var today = new Date();
var date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();


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
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&exclude=hourly,minutely,alerts&appid=42e1f1d2c64b89323a4af79fe114ff93";
    console.log(apiUrl)
    fetch(apiUrl).then(function(cityResponse) {
        return cityResponse.json();
    })
    .then(function(cityResponse) {

    var cityName = cityResponse.name;
    var latitude = cityResponse.coord.lat;
    var longitude = cityResponse.coord.lon;
    var forecast = cityResponse.weather[0].description;
   

    //weatherToday.textContent = "";
    //fiveDay.textContent = "";


    return fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly,minutely,alerts&appid=42e1f1d2c64b89323a4af79fe114ff93")
    })
    console.log(fetch)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (response) {
    //     showWeather(response);
    // });

};


// var showWeather = function(cities, searchTerm) {
//     if(cities.length === 0) {
//         cityContainerEl.textContent = "No cities found!";
//         return;
//     }
    
//     citySearchTerm.textContent = searchTerm;

//     for (var i = 0; i < cities.length; i++) {
//         //var cityName = repos[i].owner.login + "/" + repos[i].name;

//         var cityEl = document.createElement("a");
//         cityEl.classList = "list-item flex-row justify-space-between align-center";
//         cityEl.setAttribute = ("href", " " + "");

//         var titleEl = document.createElement("span");
//         titleEl.textContent =  ""  ;

//         cityEl.appendChild(titleEl);

//         var statusEl = document.createElement("span");
//         statusEl.classList ="flex-row align-center";

//         if(cities[i].open_issues_count > 0) {
//             statusEl.innerHTML = 
//             "<i class='fas fa-times status-icon icon-danger'></i>" + cities[i].open_issues_count + "issue(s)";
//         } else {
//             statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
//         }

//         cityEl.appendChild(statusEl);

//         cityContainerEl.appendChild(cityEl);
//     }
//};


console.log(getWeather)
searchButton.addEventListener("click", formSubmitHandler);