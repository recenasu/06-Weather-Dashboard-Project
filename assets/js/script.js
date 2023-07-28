// Variable to store API key for Open Weather
var APIKeyOW = "ca5c36fad955c2432c0ac7166c71cfdd";
// Variables to store location info
var city;
var pastCitiesArray = [];

city = "San Diego";

// This function saves the entered city name to local storage and builds a running history of entered city names
function saveCityName() {
// If nothing exists in local storage, add the city to the pastCitiesArray, stringify the array, and store it in local storage.
if (localStorage.getItem("storedCities") === null) {
    pastCitiesArray.unshift(city);
    localStorage.setItem("storedCities", JSON.stringify(pastCitiesArray));
} else {
    // If cities exist in local storage, parse the stored data into the pastCitiesArray, then add the city to the beginning of the array, then stringify the array and store it in local storage.
    pastCitiesArray = JSON.parse(localStorage.getItem("storedCities"));
    pastCitiesArray.unshift(city);
    console.log(pastCitiesArray);
    localStorage.setItem("storedCities", JSON.stringify(pastCitiesArray)); 
}
}


// This function obtains the current weather for the city from Open Weather
function getCurrentWxApi() {

// variable for the current weather api URL. Query for city weather in imperial units.
var currentWxUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ APIKeyOW +"&units=imperial";

// fetch method to the current weather api URL
fetch(currentWxUrl)
.then(function (response) {
    return response.json();
})
.then(function (currentData) {
    
    // Current day weather data set to variables and displayed in the console 
    var currentDayWx = currentData;
    var currentDayCity = currentData.name;
    var currentDayWinds = currentData.wind.speed;
    var currentDayTemp = currentData.main.temp;
    var currentDayTempMin = currentData.main.temp_min;
    var currentDayTempMax = currentData.main.temp_max;    var currentDayHumid = currentData.main.humidity;
    var currentDayIcon = "https://openweathermap.org/img/wn/"+ currentData.weather[0].icon +"@2x.png";
    console.log(currentDayWx);
    console.log(currentDayCity);
    console.log(currentDayWinds);
    console.log(currentDayTemp);
    console.log(currentDayTempMin);
    console.log(currentDayTempMax);
    console.log(currentDayHumid);
    console.log(currentDayIcon);
})
}

// This function obtains the 5-day forecast for the city from Open Weather.
function get5DayForecastApi() {

    // variable for the 5-day forecast api URL. Query for city weather in imperial units.
    var fiveDayWxUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid="+ APIKeyOW +"&units=imperial";
    
    // fetch method to the current weather api URL
    fetch(fiveDayWxUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (fiveDayData) {
        console.log(fiveDayData); //full array for dev reference
        
        // Day 1 forecast fiveDayData set to variables and displayed in the console 
        var day1Wx = fiveDayData.list[7]; 
        var day1WxTemp = fiveDayData.list[7].main.temp;
        var day1WxHumid = fiveDayData.list[7].main.humidity;
        var day1WxWinds = fiveDayData.list[7].wind.speed;
        var day1WxIcon = "https://openweathermap.org/img/wn/"+ fiveDayData.list[7].weather[0].icon +"@2x.png";
        console.log(day1Wx); 
        console.log(day1WxTemp);
        console.log(day1WxHumid);
        console.log(day1WxWinds);
        console.log(day1WxIcon);

        // Day 2 forecast fiveDayData set to variables and displayed in the console 
        var day2Wx = fiveDayData.list[15]; 
        var day2WxTemp = fiveDayData.list[15].main.temp;
        var day2WxHumid = fiveDayData.list[15].main.humidity;
        var day2WxWinds = fiveDayData.list[15].wind.speed;
        var day2WxIcon = "https://openweathermap.org/img/wn/"+ fiveDayData.list[15].weather[0].icon +"@2x.png";;
        console.log(day2Wx); 
        console.log(day2WxTemp);
        console.log(day2WxHumid);
        console.log(day2WxWinds);
        console.log(day2WxIcon);
        
        // Day 3 forecast fiveDayData set to variables and displayed in the console 
        var day3Wx = fiveDayData.list[23]; 
        var day3WxTemp = fiveDayData.list[23].main.temp;
        var day3WxHumid = fiveDayData.list[23].main.humidity;
        var day3WxWinds = fiveDayData.list[23].wind.speed;
        var day3WxIcon = "https://openweathermap.org/img/wn/"+ fiveDayData.list[23].weather[0].icon +"@2x.png";;
        console.log(day3Wx); 
        console.log(day3WxTemp);
        console.log(day3WxHumid);
        console.log(day3WxWinds);
        console.log(day3WxIcon);

        // Day 4 forecast fiveDayData set to variables and displayed in the console 
        var day4Wx = fiveDayData.list[31]; 
        var day4WxTemp = fiveDayData.list[31].main.temp;
        var day4WxHumid = fiveDayData.list[31].main.humidity;
        var day4WxWinds = fiveDayData.list[31].wind.speed;
        var day4WxIcon = "https://openweathermap.org/img/wn/"+ fiveDayData.list[31].weather[0].icon +"@2x.png";;
        console.log(day4Wx); 
        console.log(day4WxTemp);
        console.log(day4WxHumid);
        console.log(day4WxWinds);
        console.log(day4WxIcon);

        // Day 5 forecast fiveDayData set to variables and displayed in the console 
        var day5Wx = fiveDayData.list[39]; 
        var day5WxTemp = fiveDayData.list[39].main.temp;
        var day5WxHumid = fiveDayData.list[39].main.humidity;
        var day5WxWinds = fiveDayData.list[39].wind.speed;
        var day5WxIcon = "https://openweathermap.org/img/wn/"+ fiveDayData.list[39].weather[0].icon +"@2x.png";;
        console.log(day5Wx); 
        console.log(day5WxTemp);
        console.log(day5WxHumid);
        console.log(day5WxWinds);
        console.log(day5WxIcon);

        
    })
    }


getCurrentWxApi();
get5DayForecastApi();
// saveCityName(); //This function will need to be executed on the click of the submit button