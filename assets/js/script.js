// Variable to store API key for Open Weather
var APIKeyOW = "ca5c36fad955c2432c0ac7166c71cfdd";

// Variables for city entry field and button
var cityEntryEl = document.getElementById("formGroupExampleInput");
var getWeatherEl = document.getElementById("getWeatherButton");

// Variables for city history buttons
var city1ButtonEl = document.getElementById("city1History");
var city2ButtonEl = document.getElementById("city2History");
var city3ButtonEl = document.getElementById("city3History");
var city4ButtonEl = document.getElementById("city4History");
var city5ButtonEl = document.getElementById("city5History");

// Variables for current weather html elements
var currentDayDisplay = document.getElementById("dayDisp");
var currentCityDisplay = document.getElementById("cityDisp");
var currentTempDisplay = document.getElementById("currentTempDisp");
var currentWindsDisplay = document.getElementById("currentWindsDisp");
var currentHumidDisplay = document.getElementById("currentHumidDisp");
var currentIconDisplay = document.getElementById("currentIconDisp");

// Variables for Day 1 weather html elements
var day1DayDisplay = document.getElementById("day1DayDisp");
var day1TempDisplay = document.getElementById("day1TempDisp");
var day1WindsDisplay = document.getElementById("day1WindsDisp");
var day1HumidDisplay = document.getElementById("day1HumidDisp");
var day1IconDisplay = document.getElementById("day1IconDisp");

// Variables for Day 2 weather html elements
var day2DayDisplay = document.getElementById("day2DayDisp");
var day2TempDisplay = document.getElementById("day2TempDisp");
var day2WindsDisplay = document.getElementById("day2WindsDisp");
var day2HumidDisplay = document.getElementById("day2HumidDisp");
var day2IconDisplay = document.getElementById("day2IconDisp");

// Variables for Day 3 weather html elements
var day3DayDisplay = document.getElementById("day3DayDisp");
var day3TempDisplay = document.getElementById("day3TempDisp");
var day3WindsDisplay = document.getElementById("day3WindsDisp");
var day3HumidDisplay = document.getElementById("day3HumidDisp");
var day3IconDisplay = document.getElementById("day3IconDisp");

// Variables for Day 4 weather html elements
var day4DayDisplay = document.getElementById("day4DayDisp");
var day4TempDisplay = document.getElementById("day4TempDisp");
var day4WindsDisplay = document.getElementById("day4WindsDisp");
var day4HumidDisplay = document.getElementById("day4HumidDisp");
var day4IconDisplay = document.getElementById("day4IconDisp");

// Variables for Day 5 weather html elements
var day5DayDisplay = document.getElementById("day5DayDisp");
var day5TempDisplay = document.getElementById("day5TempDisp");
var day5WindsDisplay = document.getElementById("day5WindsDisp");
var day5HumidDisplay = document.getElementById("day5HumidDisp");
var day5IconDisplay = document.getElementById("day5IconDisp");
// Variables to store location info
var city = "Timbuktu";
var pastCitiesArray = [];

var today = dayjs();
var dayOne = today.add(1, "day");
var dayTwo = today.add(2, "day");
var dayThree = today.add(3, "day");
var dayFour = today.add(4, "day");
var dayFive = today.add(5, "day");


// This function loads the running history of entered city names.
function loadHistory() {
    
    // set default weather location
    getCurrentWxApi();
    get5DayForecastApi();
    //    If nothing exists in local storage, populate the pastCitiesArray with "-" values.
    if (localStorage.getItem("storedCities") === null) {
        pastCitiesArray = ["-", "-", "-", "-", "-"];
    } else {
        // If scores exist in local storage, parse the stored data into the scoresArray, then add the last score to the beginning of the scoresArray. Then stringify the changed array and store it in local storage.
        pastCitiesArray = JSON.parse(localStorage.getItem("storedCities"));
    }
    //Add labels to the history buttons 
    city1ButtonEl.textContent = pastCitiesArray[0];
    city2ButtonEl.textContent = pastCitiesArray[1];
    city3ButtonEl.textContent = pastCitiesArray[2];
    city4ButtonEl.textContent = pastCitiesArray[3];
    city5ButtonEl.textContent = pastCitiesArray[4];
    return;

    
}

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
    //Add labels to the history buttons 
    city1ButtonEl.textContent = pastCitiesArray[0];
    city2ButtonEl.textContent = pastCitiesArray[1];
    city3ButtonEl.textContent = pastCitiesArray[2];
    city4ButtonEl.textContent = pastCitiesArray[3];
    city5ButtonEl.textContent = pastCitiesArray[4];
}


// This function obtains the current weather for the city from Open Weather
function getCurrentWxApi() {

    // variable for the current weather api URL. Query for city weather in imperial units.
    var currentWxUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKeyOW + "&units=imperial";

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
            var currentDayTempMax = currentData.main.temp_max; var currentDayHumid = currentData.main.humidity;
            var currentDayIcon = "https://openweathermap.org/img/wn/" + currentData.weather[0].icon + "@2x.png";
            console.log(currentDayWx);
            console.log(currentDayCity);
            console.log(currentDayWinds);
            console.log(currentDayTemp);
            console.log(currentDayTempMin);
            console.log(currentDayTempMax);
            console.log(currentDayHumid);
            console.log(currentDayIcon);

            // Populate current weather HTML Elements with values
            currentDayDisplay.textContent = today;
            currentCityDisplay.textContent = city;
            currentTempDisplay.textContent = "Temp: " + currentDayTemp + " F";
            currentWindsDisplay.textContent = "Wind: " + currentDayWinds + " MPH";
            currentHumidDisplay.textContent = "Humidity: " + currentDayHumid + " %";
            currentIconDisplay.setAttribute("src", currentDayIcon);


        })
}

// This function obtains the 5-day forecast for the city from Open Weather.
function get5DayForecastApi() {

    // variable for the 5-day forecast api URL. Query for city weather in imperial units.
    var fiveDayWxUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKeyOW + "&units=imperial";

    // fetch method to the current weather api URL
    fetch(fiveDayWxUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (fiveDayData) {
            console.log(fiveDayData); //full array for dev reference

            // Day 1 forecast fiveDayData set to variables and displayed in the console 
            var day1Wx = fiveDayData.list[7];
            var day1Temp = fiveDayData.list[7].main.temp;
            var day1Humid = fiveDayData.list[7].main.humidity;
            var day1Winds = fiveDayData.list[7].wind.speed;
            var day1Icon = "https://openweathermap.org/img/wn/" + fiveDayData.list[7].weather[0].icon + "@2x.png";
            console.log(day1Wx);
            console.log(day1Temp);
            console.log(day1Humid);
            console.log(day1Winds);
            console.log(day1Icon);
            // Populate Day 1 weather HTML Elements with values
            day1DayDisplay.textContent = dayOne;
            day1TempDisplay.textContent = "Temp: " + day1Temp + " F";
            day1WindsDisplay.textContent = "Wind: " + day1Winds + " MPH";
            day1HumidDisplay.textContent = "Humidity: " + day1Humid + " %";
            day1IconDisplay.setAttribute("src", day1Icon);

            // Day 2 forecast fiveDayData set to variables and displayed in the console 
            var day2Wx = fiveDayData.list[15];
            var day2Temp = fiveDayData.list[15].main.temp;
            var day2Humid = fiveDayData.list[15].main.humidity;
            var day2Winds = fiveDayData.list[15].wind.speed;
            var day2Icon = "https://openweathermap.org/img/wn/" + fiveDayData.list[15].weather[0].icon + "@2x.png";;
            console.log(day2Wx);
            console.log(day2Temp);
            console.log(day2Humid);
            console.log(day2Winds);
            console.log(day2Icon);
            // Populate Day 2 weather HTML Elements with values
            day2DayDisplay.textContent = dayTwo;
            day2TempDisplay.textContent = "Temp: " + day2Temp + " F";
            day2WindsDisplay.textContent = "Wind: " + day2Winds + " MPH";
            day2HumidDisplay.textContent = "Humidity: " + day2Humid + " %";
            day2IconDisplay.setAttribute("src", day2Icon);

            // Day 3 forecast fiveDayData set to variables and displayed in the console 
            var day3Wx = fiveDayData.list[23];
            var day3Temp = fiveDayData.list[23].main.temp;
            var day3Humid = fiveDayData.list[23].main.humidity;
            var day3Winds = fiveDayData.list[23].wind.speed;
            var day3Icon = "https://openweathermap.org/img/wn/" + fiveDayData.list[23].weather[0].icon + "@2x.png";;
            console.log(day3Wx);
            console.log(day3Temp);
            console.log(day3Humid);
            console.log(day3Winds);
            console.log(day3Icon);
            // Populate Day 3 weather HTML Elements with values
            day3DayDisplay.textContent = dayThree;
            day3TempDisplay.textContent = "Temp: " + day3Temp + " F";
            day3WindsDisplay.textContent = "Wind: " + day3Winds + " MPH";
            day3HumidDisplay.textContent = "Humidity: " + day3Humid + " %";
            day3IconDisplay.setAttribute("src", day3Icon);

            // Day 4 forecast fiveDayData set to variables and displayed in the console 
            var day4Wx = fiveDayData.list[31];
            var day4Temp = fiveDayData.list[31].main.temp;
            var day4Humid = fiveDayData.list[31].main.humidity;
            var day4Winds = fiveDayData.list[31].wind.speed;
            var day4Icon = "https://openweathermap.org/img/wn/" + fiveDayData.list[31].weather[0].icon + "@2x.png";;
            console.log(day4Wx);
            console.log(day4Temp);
            console.log(day4Humid);
            console.log(day4Winds);
            console.log(day4Icon);
            // Populate Day 4 weather HTML Elements with values
            day4DayDisplay.textContent = dayFour;
            day4TempDisplay.textContent = "Temp: " + day4Temp + " F";
            day4WindsDisplay.textContent = "Wind: " + day4Winds + " MPH";
            day4HumidDisplay.textContent = "Humidity: " + day4Humid + " %";
            day4IconDisplay.setAttribute("src", day4Icon);

            // Day 5 forecast fiveDayData set to variables and displayed in the console 
            var day5Wx = fiveDayData.list[39];
            var day5Temp = fiveDayData.list[39].main.temp;
            var day5Humid = fiveDayData.list[39].main.humidity;
            var day5Winds = fiveDayData.list[39].wind.speed;
            var day5Icon = "https://openweathermap.org/img/wn/" + fiveDayData.list[39].weather[0].icon + "@2x.png";;
            console.log(day5Wx);
            console.log(day5Temp);
            console.log(day5Humid);
            console.log(day5Winds);
            console.log(day5Icon);
            // Populate Day 5 weather HTML Elements with values
            day5DayDisplay.textContent = dayFive;
            day5TempDisplay.textContent = "Temp: " + day5Temp + " F";
            day5WindsDisplay.textContent = "Wind: " + day5Winds + " MPH";
            day5HumidDisplay.textContent = "Humidity: " + day5Humid + " %";
            day5IconDisplay.setAttribute("src", day5Icon);


        })
}

// Load the search history on page launch
loadHistory();

// Event listeners for search history buttons
getWeatherEl.addEventListener("click", function () {
    city = cityEntryEl.value.trim();
    console.log(city);
    // If an invalid value was entered, notify the user.
    if (cityEntryEl.value === "") {
        cityEntryEl.style.color = "yellow";
    } else {
        // If a valid value was entered, proceed
        getCurrentWxApi();
        get5DayForecastApi();
        saveCityName();
    }
})

city1ButtonEl.addEventListener("click", function () {
    // If button displays no city name, do nothing.
    if (pastCitiesArray[0] === "-") {
        return;
    } else {
        // If a valid value was entered, proceed
        city = pastCitiesArray[0];
    console.log(city);
        getCurrentWxApi();
        get5DayForecastApi();
        saveCityName();
    }
})

city2ButtonEl.addEventListener("click", function () {
    // If button displays no city name, do nothing.
    if (pastCitiesArray[1] === "-") {
        return;
    } else {
        // If a valid value was entered, proceed
        city = pastCitiesArray[1];
    console.log(city);
        getCurrentWxApi();
        get5DayForecastApi();
        saveCityName();
    }
})

city3ButtonEl.addEventListener("click", function () {
    // If button displays no city name, do nothing.
    if (pastCitiesArray[2] === "-") {
        return;
    } else {
        // If a valid value was entered, proceed
        city = pastCitiesArray[2];
    console.log(city);
        getCurrentWxApi();
        get5DayForecastApi();
        saveCityName();
    }
})

city4ButtonEl.addEventListener("click", function () {
    // If button displays no city name, do nothing.
    if (pastCitiesArray[3] === "-") {
        return;
    } else {
        // If a valid value was entered, proceed
        city = pastCitiesArray[3];
    console.log(city);
        getCurrentWxApi();
        get5DayForecastApi();
        saveCityName();
    }
})

city5ButtonEl.addEventListener("click", function () {
    // If button displays no city name, do nothing.
    if (pastCitiesArray[4] === "-") {
        return;
    } else {
        // If a valid value was entered, proceed
        city = pastCitiesArray[4];
    console.log(city);
        getCurrentWxApi();
        get5DayForecastApi();
        saveCityName();
    }
})



