// doubling of numbers
const data = [1, 2, 3, 4, 5, 6, 7, 8];

const newData = data.filter((item) => item % 2 != 0).map((item) => item * 2);

console.log(newData); // problem solved

// Movies task

//1. Sorting out the movies with a short title
const shortTitledMovies = movies.filter((movie) => movie.title.length <= 3);
console.log(shortTitledMovies);

//2. Sorting out the movies with a long title
const longTitledMovies = movies.filter((movie) => movie.title.length >= 50);
console.log(longTitledMovies);

//3. Movies filmed in a certain period

const eightiesMovies = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
).length;

console.log(eightiesMovies);

//4.Tagged movies' array
const moviesTagged = movies.map((movie) => {
  if (movie.rating >= 7) {
    Object.assign(movie, { tag: "Good" });
  } else if (movie.rating >= 4 && movie.rating < 7) {
    Object.assign(movie, { tag: "Average" });
  } else {
    Object.assign(movie, { tag: "Bad" });
  }
  return movie;
});

console.log(moviesTagged);

//5.Rating over 6 (not sure if I got the task right)
const goodMoviesRating = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(goodMoviesRating);

// To be more precise, I would suggest returning title AND rating

const goodMoviesRating2 = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => {
    return (newObj = {
      title: movie.title,
      rating: movie.rating,
    });
  });
console.log(goodMoviesRating2);

//6. Keywords counter
const keyWords = {
  Total: 0,
  Surfer: 0,
  Alien: 0,
  Benjamin: 0,
};

movies.forEach((movie) => {
  if (movie.title.toLowerCase().includes("surfer")) {
    keyWords.Surfer++, keyWords.Total++;
  } else if (movie.title.toLowerCase().includes("alien")) {
    keyWords.Alien++, keyWords.Total++;
  } else if (movie.title.toLowerCase().includes("benjamin")) {
    keyWords.Benjamin++, keyWords.Total++;
  }
  return keyWords.Total;
});

console.log(keyWords);

//7.Find duplicates
const duplicatesInTitles = [];
movies.forEach((movie) => {
  const splittedTitle = movie.title.split(" "); //splitting a string to get the words separately
  let duplicate = false; //variable which helps us later on to see if there are any duplicates while array iteration
  // we assume for now that it is false (= no duplicates)
  splittedTitle.forEach((word) => {
    if (splittedTitle.indexOf(word) != splittedTitle.lastIndexOf(word)) {
      duplicate = true;
    }
  });
  if (duplicate === true) {
    duplicatesInTitles.push(movie);
  }
});

console.log(duplicatesInTitles);

//8. Avarage rating
const averageRating =
  movies.reduce((sum, movie) => {
    return sum + movie.rating;
  }, 0) / movies.length;

console.log(averageRating);

//9. Total number of films in a certain quality category
const grouppedByRating = movies.reduce(function (tagsCount, movie) {
  if (movie.tag in tagsCount) {
    tagsCount[movie.tag]++;
  } else {
    tagsCount[movie.tag] = 1;
  }
  return tagsCount;
}, {});

console.log(grouppedByRating);
