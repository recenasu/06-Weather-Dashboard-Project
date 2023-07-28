// Variable to store API key for Open Weather
var APIKeyOW = "ca5c36fad955c2432c0ac7166c71cfdd";
// Variables to store location info
var city;
var state;
var country;

city = "Phoenix";

// Obtains the current weather for the city from Open Weather
function getCurrentWxApi() {

// variable for the current weather api URL. Query for city weather in imperial units.
var currentWxUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ APIKeyOW +"&units=imperial";

// fetch method to the current weather api URL
fetch(currentWxUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data); //full  array for dev reference
    console.log(data.name); //city name
    console.log(data.wind.speed); // current wind
    console.log(data.main.temp); // current temp
    console.log(data.main.temp_min); //today's min temp
    console.log(data.main.temp_max); //today's max temp
    console.log(data.main.humidity); //current humidity
    console.log(data.weather); //this is for the icon
})
}

// Obtains the 5-day forecast for the city from Open Weather.
function get5DayForecastApi() {

    // variable for the current weather api URL. Query for city weather in imperial units.
    var currentWxUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid="+ APIKeyOW +"&units=imperial";
    
    // fetch method to the current weather api URL
    fetch(currentWxUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data); //full array for dev reference
        
        // Day 1 forecast data set to variables and displayed in the console 
        var day1Wx = data.list[7]; 
        var day1WxTemp = data.list[7].main.temp;
        var day1WxHumid = data.list[7].main.humidity;
        var day1WxWinds = data.list[7].wind.speed;
        var day1WxIcon = data.list[7].weather;
        console.log(day1Wx); 
        console.log(day1WxTemp);
        console.log(day1WxHumid);
        console.log(day1WxWinds);
        console.log(day1WxIcon);

        // Day 2 forecast data set to variables and displayed in the console 
        var day2Wx = data.list[15]; 
        var day2WxTemp = data.list[15].main.temp;
        var day2WxHumid = data.list[15].main.humidity;
        var day2WxWinds = data.list[15].wind.speed;
        var day2WxIcon = data.list[15].weather;
        console.log(day2Wx); 
        console.log(day2WxTemp);
        console.log(day2WxHumid);
        console.log(day2WxWinds);
        console.log(day2WxIcon);
        
        // Day 3 forecast data set to variables and displayed in the console 
        var day3Wx = data.list[23]; 
        var day3WxTemp = data.list[23].main.temp;
        var day3WxHumid = data.list[23].main.humidity;
        var day3WxWinds = data.list[23].wind.speed;
        var day3WxIcon = data.list[23].weather;
        console.log(day3Wx); 
        console.log(day3WxTemp);
        console.log(day3WxHumid);
        console.log(day3WxWinds);
        console.log(day3WxIcon);

        // Day 4 forecast data set to variables and displayed in the console 
        var day4Wx = data.list[31]; 
        var day4WxTemp = data.list[31].main.temp;
        var day4WxHumid = data.list[31].main.humidity;
        var day4WxWinds = data.list[31].wind.speed;
        var day4WxIcon = data.list[31].weather;
        console.log(day4Wx); 
        console.log(day4WxTemp);
        console.log(day4WxHumid);
        console.log(day4WxWinds);
        console.log(day4WxIcon);

        // Day 5 forecast data set to variables and displayed in the console 
        var day5Wx = data.list[39]; 
        var day5WxTemp = data.list[39].main.temp;
        var day5WxHumid = data.list[39].main.humidity;
        var day5WxWinds = data.list[39].wind.speed;
        var day5WxIcon = data.list[39].weather;
        console.log(day5Wx); 
        console.log(day5WxTemp);
        console.log(day5WxHumid);
        console.log(day5WxWinds);
        console.log(day5WxIcon);

        
    })
    }


getCurrentWxApi();
get5DayForecastApi()