// This code will countdown to the launch date.
var launchDate = new Date("2023-07-15T12:00:00");
var countdown = document.getElementById("countdown");

function updateCountdown() {
  var now = new Date();
  var difference = launchDate - now;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  countdown.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

setInterval(updateCountdown, 1000);
