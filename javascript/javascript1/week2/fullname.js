function getFullname(firstname, lastname, useFormalName, sex) {
  if (firstname === "" || lastname === "") {
    alert("Please enter a full name!"); //a bit of validation, so the data is provided
  } else if (useFormalName === true) {
    if (sex === "male" || sex === "man") {
      return "Lord " + firstname + " " + lastname;
    } else if (sex === "female" || sex === "woman") {
      return "Lady " + firstname + " " + lastname; //not sure if it's a Lady title though :D
    } // I suggest providing options, so either variant is okay - male/man, female/woman - the word choice is not so important in this case
    //Or we could just make another option that shows an alert so the user provides data in a certain format
  } else {
    if (sex === "male" || sex === "man") {
      return "Mr " + firstname + " " + lastname; //Modified the initial task, so ordinary people don't get left aside:D
    } else if (sex === "female" || sex === "woman") {
      return "Mrs " + firstname + " " + lastname; //Mrs is a general prefix used for women in most airlines
    } else {
      return firstname + " " + lastname; // so we include those who prefer not to mention info about their sex
    }
  }
}

//Checking if it works :)
//getFullname("", "Black", true, "male"); (commented it so you don't get an alert right away)
getFullname("Benjamin", "Hughes", true, "male");
getFullname("Benjamin", "Hughes", false, "male");
