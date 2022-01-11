//Save a note
const notes = [];

function saveNote(content, id, important) {
  const note = {
    content: content,
    id: id,
    important: important,
  }; // created an object
  notes.push(note); // pushed the object to the array
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

//Get a note
function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    } else {
      console.log("Error. Id is not found!"); // Q: What is the practical difference between console.log & console.error?
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//Log out notes
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id} has the following note text: ${notes[i].content}`
    );
  }
}

logOutNotesFormatted();

//Extra feature - Show important tasks
// In this case we need to modify the library of tasks adding an importance method to the saveNote function
saveNote("Send the e-mail", 3, true);
saveNote("Pickup the kid from kindergarten", 4, true);
saveNote("Wash dishes", 4, false);
console.log(notes); //checking

function getImportantTasks() {
  const important = [];
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].important === true) {
      important.push(notes[i]);
    }
  }
  if (important.length > 0) {
    console.log(important);
  } else {
    console.log("No important tasks found");
  }
}

getImportantTasks();
