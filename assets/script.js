var formInput = document.querySelector("#citysearch")
var mainContainerEl= document.querySelector("#main-container")
var citySearchTerm = document.querySelector("#city-weather")



var formSubmitHandler = function (event) {
    event.preventDefault();

    var city = formInput.value.trim();

    if(city) {
        getWeather(city);
        mainContainerEl.textContent = "";
        
    } else {
        alert("Please enter a City");
    }
    
};


var getWeather = function (user) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=hourly,minutely,alerts&appid=42e1f1d2c64b89323a4af79fe114ff93";


    fetch(apiUrl).then(function(response) {
        if(response.ok) {
        response.json().then(function(data) {
            displayWeather(data, user);        
        });
       } else {
        alert("Error! " + response.statusText);
       }
    })
    .catch(function(error) {
        alert("Unable to reach website");
    });
};

var displayWeather = function(repos, searchTerm) {
    if(repos.length === 0) {
        mainContainerEl.textContent = "No cities found!";
        return;
    }
    
    citySearchTerm.textContent = searchTerm;

    for (var i = 0; i < repos.length; i++) {
        //var cityName = repos[i].owner.login + "/" + repos[i].name;

        var cityEl = document.createElement("a");
        cityEl.classList = "list-item flex-row justify-space-between align-center";
        cityEl.setAttribute = ("href", " " + );

        var titleEl = document.createElement("span");
        titleEl.textContent =    ;

        cityEl.appendChild(titleEl);

        var statusEl = document.createElement("span");
        statusEl.classList ="flex-row align-center";

        if(repos[i].open_issues_count > 0) {
            statusEl.innerHTML = 
            "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + "issue(s)";
        } else {
            statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
        }

        cityEl.appendChild(statusEl);

        mainContainerEl.appendChild(cityEl);
    }
};

getWeather();
console.log(getWeather)
