var weather = new XMLHttpRequest();
var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4daf46ae656509b80c7368a6ade94ce4';

weather.open('GET',weatherURL, true);
weather.responseType = 'text';
weather.send();

weather.onload = function () {
    var data = JSON.parse(weather.response);

    var x = data.main.temp;
    var y = data.wind.speed;
    var chill = x - (y * .7);
    console.log(chill);

    document.getElementById('temp').innerHTML = data.main.temp.toFixed(0);
    document.getElementById('wind').innerHTML = data.wind.speed.toFixed(0);
    document.getElementById('humidity').innerHTML = data.main.humidity.toFixed(0);
    document.getElementById('high').innerHTML = data.main.temp_max.toFixed(0);
    document.getElementById('windchill').innerHTML = chill.toFixed(0);
}



var forecast = new XMLHttpRequest();
var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4daf46ae656509b80c7368a6ade94ce4';


forecast.open('GET',forecastURL, true);
forecast.responseType = 'text';
forecast.send();

forecast.onload = function () {
    var data2 = JSON.parse(forecast.response);

function getDays(startDate) {
    var dates = [];

    for (var i = 1; i <= 5; i++) {
        var currentDate = new Date();
        currentDate.setDate(startDate.getDate() + i);
        dates.push(DayAsString(currentDate.getDay()))
    } 
    return dates;
}
    function DayAsString(dayIndex) {
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        
        return weekday[dayIndex]
    }    
    var startDate = new Date();
    var dates = getDays(startDate, 5);
    console.log(dates);


    document.getElementById('day1').innerHTML = dates[0];
    document.getElementById('day2').innerHTML = dates[1];
    document.getElementById('day3').innerHTML = dates[2];
    document.getElementById('day4').innerHTML = dates[3];
    document.getElementById('day5').innerHTML = dates[4];
}



