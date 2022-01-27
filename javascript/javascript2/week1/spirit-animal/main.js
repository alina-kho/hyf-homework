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

  let spiritAnimal = `The ${adjectives[Math.floor(Math.random() * 9)]} ${
    nouns[Math.floor(Math.random() * 9)]
  } `;
  return spiritAnimal;
}

//Default event (since dropdown.onchange requires some "change" to start working)
// I tried putting it as a default event in the switch statement but it didn't work - why?
window.onload = function (event) {
  button.onclick = function (event) {
    const name = inputField.value;
    if (name === "") {
      outputPar.innerHTML = "Please enter your name";
      button.innerHTML = "Click me"; //in case one wants to get a new name with an empty string
    } else {
      let spiritAnimal = getSpiritAnimal();
      outputPar.innerHTML = `${name} - ${spiritAnimal}`;
      button.innerHTML = "Get a new name";
    }
  };
};

//Selector onchange event
dropdown.onchange = function (event) {
  const chosenValue = dropdown.value;
  switch (chosenValue) {
    case "click":
      inputField.oninput = null; //removing the oninput event in case of switching between the options
      inputField.onmouseover = null; //removing the onmouseover event in case of switching between the options
      button.onclick = function (event) {
        const name = inputField.value;
        if (name === "") {
          outputPar.innerHTML = "Please enter your name";
          button.innerHTML = "Click me"; //in case one wants to get a new name with an empty string
        } else {
          let spiritAnimal = getSpiritAnimal();
          outputPar.innerHTML = `${name} - ${spiritAnimal}`;
          button.innerHTML = "Get a new name";
        }
      };
      break;

    case "hover":
      inputField.oninput = null; // removing the oninput event in case of switching between the options
      button.onclick = null; // removing the onclick event in case of switching between the options
      inputField.onmouseover = function (event) {
        const name = inputField.value;
        if (name === "") {
          outputPar.innerHTML = "Please enter your name";
          button.innerHTML = "Click me"; //in case one wants to get a new name with an empty string
        } else {
          let spiritAnimal = getSpiritAnimal();
          outputPar.innerHTML = `${name} - ${spiritAnimal}`;
        }
      };
      break;
    case "typing":
      inputField.onmouseover = null; //removing the onmouseover event in case of switching between the options
      button.onclick = null; //removing the onclick event in case of switching between the options
      inputField.oninput = function (event) {
        const name = inputField.value;
        if (name === "") {
          outputPar.innerHTML = "Please enter your name";
          button.innerHTML = "Click me"; //in case one wants to get a new name with an empty string
        } else {
          let spiritAnimal = getSpiritAnimal();
          outputPar.innerHTML = `${name} - ${spiritAnimal}`;
        }
      };
  }
};
