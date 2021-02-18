var today = new Date();
var dd = String(today.getDay()).padStart('0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();


document.write(today);

var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  document.getElementById("demo").innerHTML = n;
  today = n + '/' + mm + '/' + yyyy;

  function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
  }