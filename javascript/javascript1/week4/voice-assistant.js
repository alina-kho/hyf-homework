"use strict";

//Creating global scope variables
let userName = "";
let todos = []; //declared through let to be able to modify the array through the filter method

//Creating a function
function getReply(command) {
  const commandSplitted = command.split(" "); //Splits the command into separate words for easy search through them

  //Name actions
  //.toLowerCase is used to get rid of case sensitivity
  if (
    command.toLowerCase().includes("my name is") ||
    command.toLowerCase().includes("i am")
  ) {
    const name = commandSplitted[commandSplitted.length - 1];
    if (name == userName) {
      return `Hi ${userName}! Glad to see you again`;
    } else {
      userName = name;
      return `Nice to meet you ${name}`;
    }
  } else if (command.toLowerCase().includes("is my name")) {
    if (userName == undefined || userName == "") {
      return "I haven't met you yet. Please introduce yourself";
    } else {
      return userName;
    }
  }

  //To-do's
  else if (command.toLowerCase().includes("to my todo")) {
    //Adding an action
    let actionToAdd = commandSplitted
      .slice(1, commandSplitted.length - 3)
      .join(" ");
    todos.push(actionToAdd);
    return `${actionToAdd} is added to your todo`;
  } else if (command.toLowerCase().includes("from my todo")) {
    let actionToRemove = commandSplitted
      .slice(1, commandSplitted.length - 3)
      .join(" ");
    //Removing an action
    if (todos.includes(actionToRemove)) {
      todos = todos.filter((item) => item != actionToRemove);
      return `Removed ${actionToRemove} from your todo`;
    } else {
      //If an action to remove is not in the array
      return `Could not find ${actionToRemove} in your todo`;
    }
  } else if (command.toLowerCase().includes("on my todo")) {
    if (todos.length > 1) {
      return `You have ${todos.length} to-dos - ${todos}`;
    } else if (todos.length === 1) {
      return `You have ${todos.length} to-do - ${todos}`;
    } else {
      return `You don't have any to-dos`;
    }
  }

  // Getting today's date
  else if (
    command.toLowerCase().includes("what") &&
    command.toLowerCase().includes("today") &&
    command.toLowerCase().includes("da") // Used "da" is an indicator because one can either say "day" or "date"
    //Assigned three conditions so the format of the user's question doesn't matter
  ) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]; // array created to change a number value to a word
    const today = new Date(); //getting today's date
    const day = today.getDate();
    const month = months[today.getMonth()]; //today.getMonth() will give us a value from 0 to 11, so we can easily apply it to find a month in the months array
    const year = today.getFullYear();
    return `Today is the ${day}. of ${month} ${year}`;
  }

  // Math - format of the question should be "What is ..."
  else if (
    command.toLowerCase().includes("*") ||
    command.toLowerCase().includes("+") ||
    command.toLowerCase().includes("-") ||
    command.toLowerCase().includes("/")
  ) {
    if (command.toLowerCase().includes("+")) {
      return parseInt(commandSplitted[2]) + parseInt(commandSplitted[4]);
    } else if (command.toLowerCase().includes("-")) {
      return parseInt(commandSplitted[2]) - parseInt(commandSplitted[4]);
    } else if (command.toLowerCase().includes("*")) {
      return parseInt(commandSplitted[2]) * parseInt(commandSplitted[4]);
    } else if (command.toLowerCase().includes("/")) {
      return parseInt(commandSplitted[2]) / parseInt(commandSplitted[4]);
    }
  }

  //Timer
  else if (command.toLowerCase().includes("set a timer")) {
    let timerMins = commandSplitted[commandSplitted.length - 2];
    let timerMilliseconds = timerMins * 60 * 1000; //we need to get our timer mins in milliseconds for the setTimeout function
    function setTimer() {
      console.log(`Timer is set for ${timerMins} minutes`);
    }

    setTimer();
    setTimeout(() => {
      console.log(`Timer done`);
    }, timerMilliseconds);
  }

  // Additional feature - live watch - tells the current time
  else if (
    command.toLowerCase().includes("time") &&
    command.toLowerCase().includes("now")
  ) {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    return `It is ${hours} hours ${minutes} minutes`;
  }

  //Additional feature - Fortune teller - tells the fortune for the day
  else if (
    command.toLowerCase().includes("prediction") ||
    command.toLowerCase().includes("predict") ||
    command.toLowerCase().includes("tell my fortune")
  ) {
    let randomNum = Math.floor(Math.random() * 6);
    switch (randomNum) {
      case 0:
        return `You are going to have an amazing day!`;
      case 1:
        return `Even the worst day has only 24 hours`;
      case 2:
        return `Shine bright like a diamond!`;
      case 3:
        return `Do a good deed today`;
      case 4:
        return `Good fortune will be yours`;
      case 5:
        return `You will have very good luck today`;
      case 6:
        return `Soon life will become more interesting`;
    }
  }
}

//Tests
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello I am Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add coding to my todo"));
console.log(getReply("Add wash the dishes to my todo"));
console.log(getReply("Add cook a tasty dinner to my todo"));
console.log(todos);
console.log(getReply("Remove cook a tasty dinner from my todo"));
console.log(getReply("Remove cook a tasty lunch from my todo"));
console.log(todos);
console.log(getReply("What is on my todo?"));
console.log(getReply("What date is it today?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is today's date?"));
console.log(getReply("What is 2 + 3"));
console.log(getReply("What is 40 - 2"));
console.log(getReply("What is 125 * 7"));
console.log(getReply("What is 224 / 4"));
console.log(getReply("Set a timer for 1 minute"));
console.log(getReply("What time is it now?"));
console.log(getReply("Tell my fortune"));
console.log(getReply("Predict my day!"));
console.log(getReply("What is your prediction for the day?"));
