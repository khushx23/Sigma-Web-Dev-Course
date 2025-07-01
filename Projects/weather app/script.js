// http://api.weatherapi.com/v1/current.json?key=7cbd3e854fe54dbaab481959252606&q=Mumbai&aqi=no //key

const temperatureField = document.querySelector('.temp'); // Selecting the temperature field from the HTML document
const locationField = document.querySelector('.loc'); // Selecting the location field from the HTML document
const conditionField = document.querySelector('.condition');
const form = document.querySelector('form');
const searchField = document.querySelector('.searchInput');
const dateandtimeField = document.querySelector('.time');
const humidityField = document.querySelector('.humid');
const windspeedField = document.querySelector('.wind');
const precipitationField = document.querySelector('.prec');

form.addEventListener('submit', searchForLocation); // Adding an event listener to the search button to call the searchForLocation function when clicked

let target = 'Mumbai'

const fetchResults = async (targetLocation) => { // Fetching data from the API , const is the variable which is used for only one time use, if you want to use it again then use let or var
    let url = `https://api.weatherapi.com/v1/current.json?key=7cbd3e854fe54dbaab481959252606&q=${targetLocation}&aqi=no`  // URL of the API endpoint

    const response = await fetch(url);     // Fetching the data from the API using fetch method, await is used to wait for the response from the API

    const data = await response.json(); // Converting the response to JSON format, await is used to wait for the response to be converted to JSON

    console.log(data); // Logging the data to the console to see the response from the API

    let locationName = data.location.name // Extracting the location name from the data
    console.log(locationName); // Logging the location name to the console

    let time = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text
    let humidity = data.current.humidity
    let windspeed = data.current.wind_kph
    let precipitation = data.current.precip_in



    updateDetails(temp, locationName, condition, time, humidity, windspeed, precipitation); // Calling the updateDetails function to update the fields with the fetched data

}

fetchResults(target); // Calling the function to fetch the data from the API

function searchForLocation(e) {
    e.preventDefault(); // Preventing the default action of the form submission

    target = searchField.value; // Getting the value from the search field
    fetchResults(target); // Calling the function to fetch the data from the API with the new target location

}

function updateDetails(temp, locationName, condition, time, humidity, windspeed, precipitation) {

    let splitDate = time.split(" ")[0];
    let splitTime = time.split(" ")[1];

    let currentDay = getDayName(new Date(splitDate).getDay());


    temperatureField.innerText = `${temp}C`;//pdating the temperature field with the temperature value and adding the degree symbol
    locationField.innerText = locationName; // Updating the location field with the location name
    conditionField.innerText = condition; // Updating the condition field with the weather condition
    dateandtimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    humidityField.innerText = `${humidity}%`;
    windspeedField.innerText = `${windspeed} kph`;
    precipitationField.innerText = `${precipitation * 100}%`;

}

function getDayName(number) {
    switch (number) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
    }
}

