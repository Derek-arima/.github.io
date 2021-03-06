var today = new Date();
var dd = String(today.getDay()).padStart("0");
var yyyy = today.getFullYear();

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var x = month[today.getMonth()];
var n = weekday[today.getDay()];
today = `${n}, ${dd} ${x} ${yyyy}`;
document.getElementById("date").textContent = today;

function toggleMenu() {
  document.getElementById("navigation").classList.toggle("hide");
}

if (n != weekday[5]) {
document.getElementsByClassName("banner")[0].style.display = "none";
}