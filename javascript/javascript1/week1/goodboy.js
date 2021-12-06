let dogYearOfBirth = 2016;
let dogYearFuture = 2025;

//Formulas
const dogAge = dogYearFuture - dogYearOfBirth;
const dogYear = dogAge * 7;

let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears === true) {
  console.log(
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture + "."
  );
} else {
  console.log(
    "Your dog will be " + dogAge + " human years old in " + dogYearFuture + "."
  );
}
