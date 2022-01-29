"use strict";

// Getting node for elements on the page

//body
const body = document.querySelector("body");

//select input
const dropdown = document.querySelector("select");

//input
const inputField = document.querySelector("input");

//button
const button = document.querySelector("button");

//p for output
const outputPar = document.createElement("p");
body.appendChild(outputPar);

//Create a function for random spirit animal generator
function getSpiritAnimal() {
  const nouns = [
    "wolf",
    "cat",
    "eagle",
    "pinguin",
    "hamster",
    "panda",
    "lion",
    "tiger",
    "puma",
    "zebra",
  ];
  const adjectives = [
    "brave",
    "lazy",
    "fast",
    "sleepy",
    "tired",
    "fluffy",
    "cute",
    "funny",
    "chubby",
    "crazy",
  ];

  let spiritAnimal = `The ${
    adjectives[Math.floor(Math.random() * adjectives.length)]
  } ${nouns[Math.floor(Math.random() * nouns.length)]} `;
  return spiritAnimal;
}

//Creating event functions
function inputListener(event) {
  const name = inputField.value;
  if (name === "") {
    outputPar.innerHTML = "Please enter your name";
    button.innerHTML = "Click me"; //in case one wants to get a new name with an empty string
  } else {
    let spiritAnimal = getSpiritAnimal();
    outputPar.innerHTML = `${name} - ${spiritAnimal}`;
    button.innerHTML = "Get a new name";
  }
}

//Function to clear all the event lsiteners
function clearEventListeners() {
  document.getElementsByTagName("button")[0].onclick = null;
  document.getElementsByTagName("input")[0].oninput = null;
  document.getElementsByTagName("input")[0].onmouseover = null;
}
//Default event (since dropdown.onchange requires some "change" to start working)
// I tried putting it as a default event in the switch statement but it didn't work - why
window.onload = function (event) {
  button.onclick = inputListener;
};

//Selector onchange event
dropdown.onchange = function (event) {
  const chosenValue = dropdown.value;
  switch (chosenValue) {
    case "click":
      clearEventListeners();
      button.onclick = inputListener;
      break;

    case "hover":
      clearEventListeners();
      inputField.onmouseover = inputListener;
      break;
    case "typing":
      clearEventListeners();
      inputField.oninput = inputListener;
  }
};
