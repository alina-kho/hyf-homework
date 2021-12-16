const class07Students = [];
function addStudentToClass(studentName) {
  //First comes a bit of validation, so we don't get repetitions and blank srtrings
  if (studentName === "") {
    console.log("Please, enter the name");
  } else {
    if (class07Students.includes(studentName) !== true) {
      if (class07Students.length < 6) {
        //In this case the name doen't matter
        class07Students.push(studentName);
      } else if (class07Students.length >= 6 && studentName === "Queen") {
        class07Students.push(studentName);
      } else {
        console.log("Cannot add more students to class 07");
      }
    } else {
      console.log("Student " + studentName + " is already in the class.");
    }
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

//Tests
addStudentToClass("Alice");
addStudentToClass("John");
addStudentToClass(""); //works
addStudentToClass("John"); //works
addStudentToClass("Alice"); //works
addStudentToClass("Mark");
addStudentToClass("Jane");
addStudentToClass("Peter");
addStudentToClass("Michael");
addStudentToClass("Paula"); //works
addStudentToClass("Queen"); // works

console.log(getNumberOfStudents());
