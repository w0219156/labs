// Determine the next occurrence of July 26
var now = new Date();
var year = now.getFullYear();
if (now > new Date(year, 6, 26)) { // If past July 26, target next year
    year++;
}
var myNextBirthday = new Date(year, 6, 26); // Month is 0-indexed, 6 = July

// Calculate the difference
var difference = myNextBirthday - now;

// Convert difference to a readable format
var seconds = Math.floor(difference / 1000);
var minutes = Math.floor(seconds / 60);
var hours = Math.floor(minutes / 60);
var days = Math.floor(hours / 24);
var weeks = Math.floor(days / 7);

days = days % 7; // Days remainder without weeks
hours = hours % 24; // Hours remainder
minutes = minutes % 60; // Minutes remainder
seconds = seconds % 60; // Seconds remainder

// Prepare the countdown message
var countdownMsg = `There are ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds until my next birthday! We offer birthday incentives!`;

// Update the HTML element with the countdown
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("countdown").innerHTML = countdownMsg;
});
