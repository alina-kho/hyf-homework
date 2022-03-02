//Obtaining html elements
const inputField = document.getElementById("gameTime");
const startButton = document.querySelector("#start");
const containerL = document.getElementById("container-l");
const containerS = document.getElementById("container-s");
const pressL = document.querySelector("#l");
const pressS = document.querySelector("#s");
const infoField = document.querySelector("#info");

//Creating a function for key detection and count
let countL = 0;
let countS = 0;

const keyUpListener = function (event) {
  if (event.key.toLowerCase() === "s") {
    countS++;
    pressS.innerHTML = countS;
    infoField.innerHTML = "";
  } else if (event.key.toLowerCase() === "l") {
    countL++;
    pressL.innerHTML = countL;
    infoField.innerHTML = "";
  } else {
    infoField.innerHTML = "Press either S or L";
  }
};

//Confetti function

function fireConfetti(id) {
  var confettiSettings = { target: id };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
  setTimeout(() => confetti.clear(), 4000);
}

//Start button event listener
startButton.onclick = function (event) {
  pressL.innerHTML = "";
  pressS.innerHTML = "";
  infoField.innerHTML = "";
  const inputFieldValue = inputField.value;
  if (inputFieldValue != 0) {
    startButton.innerHTML = "Play again";
    setTimeout(() => {
      document.removeEventListener("keyup", keyUpListener);
      if (countL > countS) {
        console.log("L-Player won!");
        infoField.innerHTML = "L-Player won!";
        fireConfetti("canvasL");
      } else if (countL < countS) {
        console.log("S-Player won!");
        infoField.innerHTML = "S-Player won!";
        fireConfetti("canvasS");
      } else if ((countL > 0 || countS > 0) && countL === countS) {
        console.log("Tie");
        infoField.innerHTML = `It's a tie!`;
      } else if (countL === 0 && countS === 0) {
        infoField.innerHTML = `You should press S or L!`;
      }
      inputField.value = "";
      countL = 0;
      countS = 0;
    }, inputFieldValue * 1000);
    document.addEventListener("keyup", keyUpListener);
  } else {
    infoField.innerHTML = "Please enter duration of the game";
  }
};
