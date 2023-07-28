// Variable to store API key for Open Weather
var APIKeyOW = "ca5c36fad955c2432c0ac7166c71cfdd";
// Variables to store location info
var city;
var state;
var country;

city = "Phoenix";

// Fetches the weather data and displays it in the console log
function getApi() {

// variable for the current weather api URL
var currentWxUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ APIKeyOW +"";

// fetch method to the current weather api URL
fetch(currentWxUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)
})
}

getApi();