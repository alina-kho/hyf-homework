// Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord(arr) {
  let shortestWord = arr[0]; // we assume that the first word in the array is the shortes one
  for (let i = 0; i < arr.length; i++) {
    if (shortestWord.length > arr[i].length) {
      shortestWord = arr[i];
    } else {
      continue;
    }
  }
  return shortestWord;
}

//Test
console.log(getShortestWord(danishWords));

//Find and count the Danish letters
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function findDanishLetters(str) {
  const danishLetters = {
    total: 0,
    å: 0,
    æ: 0,
    ø: 0,
  }; // creating an initial object with unique danish letters as keys

  for (
    let i = 0;
    i < str.length;
    i++ // iterating through a string to identify if a letter is danish or not
  ) {
    switch (str[i]) {
      case "æ":
        danishLetters.æ += 1;
        danishLetters.total += 1;
        break;
      case "å":
        danishLetters.å += 1;
        danishLetters.total += 1;
        break;
      case "ø":
        danishLetters.ø += 1;
        danishLetters.total += 1;
        break;
      default:
        break;
    }
  }

  Object.keys(danishLetters).forEach(
    (k) => danishLetters[k] == 0 && delete danishLetters[k]
  ); // deleting those keys with zero values
  return danishLetters;
}

//Tests
console.log(findDanishLetters(danishString));
console.log(findDanishLetters(danishString2));

const danishString3 =
  "Herefter mødes Folketingets epidemiudvalg klokken 15.45, og så ventes statsminister Mette Frederiksen (S) at holde pressemøde sidst på dagen i morgen.";
console.log(findDanishLetters(danishString3));
