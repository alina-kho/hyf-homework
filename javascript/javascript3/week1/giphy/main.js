const wordSearch = document.querySelector("#keyword");
const resultsNum = document.querySelector("#resultsNum");
const btn = document.querySelector("button");
const results = document.querySelector(".results");
const message = document.querySelector("#message");

//just for me not to copy it all the time I'm modifying or refactoring functions
const apiKey = "rebtDagnzLQZaDSW3TrUCB1mO0C7gja0";

//declating a result array as a global scope as it will come up in different functions with modified values
let resultsArray;

//event listeners
btn.addEventListener("click", searchingGiphs);
// resultsNum.addEventListener("input", sliceResults); - integrated in the API fetch link

//function to search gifs based on keywords
function searchingGiphs() {
  let wordSearchValue = wordSearch.value.trim().replace(/ /g, "+"); // converting search words into a right format for url
  if (wordSearchValue !== "") {
    (async function () {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${wordSearchValue}&limit=${resultsNum.value}`
      );
      if (response.ok) {
        message.innerHTML = "";
        const content = await response.json();
        console.log(content);
        resultsArray = content.data.map(
          (gif) => gif.images.fixed_height_small.url
        );
        renderResults(resultsArray);
      }
    })();
  } else {
    message.innerHTML = "Please fill in the search field";
    results.innerHTML = ""; // clearing results in case there was any previous search results already rendered
  }
}

//rendering the results
function renderResults(resultsArray) {
  results.innerHTML = ""; //cleaning previously rendered gifs
  resultsArray.forEach((gif) => {
    const gifDiv = document.createElement("div");
    gifDiv.className = "gif";
    gifDiv.innerHTML = `
  <img src = "${gif}">`;
    results.appendChild(gifDiv);
  });
}

//the easiest way to get rid of unneccessary gifs in our case - slice the array
// function sliceResults() {
//   let resultsNumValue = resultsNum.value;
//   if (resultsNumValue != "" && resultsNumValue != NaN) {
//     let slicedResults = resultsArray.slice(0, resultsNumValue);
//     renderResults(slicedResults);
//   } else {
//     renderResults(resultsArray);
//   }
// }
