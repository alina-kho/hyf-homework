//Creating Arrays
const firstWords = [
  "Amazing",
  "Cool",
  "Awesome",
  "Breezy",
  "Hot",
  "Fresh",
  "Perfect",
  "Wide",
  "Marvellous",
  "Thrilling",
];
const secondWords = [
  "Corp",
  "Wave",
  "Edge",
  "Solutions",
  "Corporation",
  "World",
  "Value",
  "Drop",
  "Box",
  "Sea",
];

//Creating a name
let companyName =
  firstWords[Math.floor(Math.random() * 10)] +
  " " +
  secondWords[Math.floor(Math.random() * 10)];

console.log(
  "The startup: " +
    companyName +
    " contains " +
    (companyName.length - 1) +
    " characters"
); // -1 because we don't want to count a space as a character... because it's not really a character
//However, if " " is considered as a character, the code can be easily modified.
