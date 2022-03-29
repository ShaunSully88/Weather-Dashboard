var cityInput = document.querySelector("#citysearch");
var cityContainerEl= document.querySelector("#main-container");
var citySearchTerm = document.querySelector("#city-weather");
var cityFormEl = document.querySelector("#city-form");
var apiKey = "42e1f1d2c64b89323a4af79fe114ff93";



var formSubmitHandler = function (event) {
    event.preventDefault();

    var city = cityInput.value.trim();

    if(city) {
        getWeather(city);
        cityContainerEl.textContent = "";
        cityInput.value = "";
        
    } else {
        alert("Please enter a City.");
    }
    
};


var getWeather = function (user) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=45.14&lon=76.14&exclude=hourly,minutely,alerts&appid=42e1f1d2c64b89323a4af79fe114ff93";

    fetch(apiUrl).then(function(response) {
        if(response.ok) {
        response.json().then(function(data) {
            showWeather(data, user);        
        });
       } else {
        alert("Error! " + response.statusText);
       }
    })
    .catch(function(error) {
        alert("Unable to reach website");
    });
    console.log(fetch)
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

getWeather();
console.log(getWeather)
cityFormEl.addEventListener("submit", formSubmitHandler);
// "https://api.openweathermap.org/data/2.5/onecall?lat=${}&lon=${}&exclude=hourly,minutely,alerts&appid=42e1f1d2c64b89323a4af79fe114ff93&units=metric&current.temp=${}&current.humidity=${}&current.wind.speed=${}"