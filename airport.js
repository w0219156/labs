// Assign a string to a variable as the starting point
let currentLocation = "Halifax"; // Use the appropriate location

// Custom log function that outputs to the console and the page
function customLog(message) {
    console.log(message); // Log to console
    // Also append to a div on the page
    let logDiv = document.getElementById('log');
    if (logDiv) {
        logDiv.innerHTML += message + '<br>'; // Append new messages in separate lines
    }
}

// Define a function to run when the window loads
window.onload = function() {
    // Check the location and date to determine the output
    let output;
    const currentDate = new Date();
    const isTraveling = currentDate >= new Date('January 19, 2024') && currentDate <= new Date('February 19, 2024');

    if (currentLocation === "Halifax") {
        output = "<i class='fa fa-plane-departure'></i> The airport is Halifax Stanfield International Airport, and its airport number is YHZ.";
    } else {
        output = "<i class='fa fa-question-circle'></i> Please enter your current location and your destination.";
    }

    if (isTraveling) {
        output += " <i class='fa fa-suitcase-rolling'></i> Currently traveling in Costa Rica.";
    } else {
        output += " <i class='fa fa-home'></i> At home in Halifax.";
    }

    // Set the output in the 'output' div
    document.getElementById('output').innerHTML = output;

    // Use customLog to output messages
    customLog("Everyone is ok, all systems normal");
};