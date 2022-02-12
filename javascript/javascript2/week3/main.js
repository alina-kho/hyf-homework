"use strict";

//Task 1
setTimeout(() => console.log("Called after 2.5 seconds"), 2500);

//Task 2 Defining a function
function setDelay(delay, message) {
  window.setTimeout(() => console.log(message), delay * 1000); // delay*1000 - coverts seconds to milliseconds
}

//Tests
setDelay(3, "Hello"); //OK
setDelay(5, `It's me`); //OK

//Task 3
//Creating a button
const btn = document.createElement("button");
btn.innerHTML = "Click me";
document.body.appendChild(btn);

//Button onclick event
btn.onclick = () => {
  setTimeout(() => console.log("Called after 5 seconds"), 5000);
};

//Task 4
function earthLogger() {
  console.log("Earth");
}

function saturnLogger() {
  console.log("Saturn");
}

//Creatin function with a callback
function planetLogFunction(callback) {
  callback();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//Task 5
//Creating a button
const locationBtn = document.createElement("button");
locationBtn.innerHTML = "Log location";
document.body.appendChild(locationBtn);

//Onclick event - getting location and logging it out in HTML
locationBtn.onclick = () => {
  function successCallback(geolocationPosition) {
    console.log(geolocationPosition);
    const latitude = document.createElement("p");
    latitude.innerHTML = `This is latitude: ${geolocationPosition.coords.latitude}`;
    document.body.appendChild(latitude);
    const longitude = document.createElement("p");
    longitude.innerHTML = `This is longitude: ${geolocationPosition.coords.longitude}`;
    document.body.appendChild(longitude);
    //Adding map - Task 6 (commented out since the map would not display)
    // let map;
    // map = new google.maps.Map(document.getElementById("map"), {
    //   center: {
    //     lat: geolocationPosition.coords.latitude,
    //     lng: geolocationPosition.coords.longitude,
    //   },
    //   zoom: 8,
    // });
  }
  function errorCallback(geolocationPositionError) {
    //Thought it would be cool to consider also error cases
    console.log(geolocationPositionError.message);
    const error = document.createElement("p");
    error.innerHTML = `Didn't manage to get the location. Error: ${geolocationPositionError.message}`;
    document.body.appendChild(error);
  }
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};

// Task 7
function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}

runAfterDelay(6, function () {
  console.log("Running the callback after 6 seconds");
});

runAfterDelay(4, function () {
  console.log("Run after 4 seconds");
});

//Task 8 Double click
window.ondblclick = () => {
  console.log("Double click!");
};

//Task 9 Joke Creator
function logFunnyJoke() {
  console.log(
    "What do Alexander the Great and Winnie the Pooh have in common? Same middle name."
  );
}

function logBadJoke() {
  console.log(`What's a foot long and slippery? A slipper.`);
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);

//Function as a variable

//Tak 1 Creating an array of functions
const functions = [
  logOutName,
  () => console.log("I am just an arrow function"),
  simpleMath,
];

function logOutName() {
  console.log("Alina");
}

function simpleMath() {
  console.log(2 + 2);
}

functions.forEach((func) => func());

//Task 2

const funcConst = () => console.log("It is a functing saved as a variable");

function justFunction() {
  console.log("It is an ordinary function");
}

funcConst();
justFunction();

// Task 3
const randomObj = {
  randomKey: function () {
    console.log(`Random value`);
  },
};

randomObj.randomKey();
