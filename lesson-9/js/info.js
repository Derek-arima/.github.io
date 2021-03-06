                
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';    
var request = new XMLHttpRequest();
request.open('get', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var cityinfo = request.response;
    getinfo(cityinfo);

}

function getinfo(jsonObj) {
    var cities = jsonObj['towns'];

var i = 5;
var name1 = cities[i].name;
var motto1 = cities[i].motto;
var found1 = cities[i].yearFounded;
var pop1 = cities[i].currentPopulation;
var rain1 = cities[i].averageRainfall + '"';
document.getElementById("city1").innerHTML = name1;
document.getElementById("motto1").innerHTML = motto1;
document.getElementById("found1").innerHTML = found1;
document.getElementById("pop1").innerHTML = pop1;
document.getElementById("rain1").innerHTML = rain1;

var i = 6;
var name2 = cities[i].name;
var motto2 = cities[i].motto;
var found2 = cities[i].yearFounded;
var pop2 = cities[i].currentPopulation;
var rain2 = cities[i].averageRainfall + '"';
document.getElementById("city2").innerHTML = name2;
document.getElementById("motto2").innerHTML = motto2;
document.getElementById("found2").innerHTML = found2;
document.getElementById("pop2").innerHTML = pop2;
document.getElementById("rain2").innerHTML = rain2;

var i = 1;
var name3 = cities[i].name;
var motto3 = cities[i].motto;
var found3 = cities[i].yearFounded;
var pop3 = cities[i].currentPopulation;
var rain3 = cities[i].averageRainfall + '"';
document.getElementById("city3").innerHTML = name3;
document.getElementById("motto3").innerHTML = motto3;
document.getElementById("found3").innerHTML = found3;
document.getElementById("pop3").innerHTML = pop3;
document.getElementById("rain3").innerHTML = rain3;
}