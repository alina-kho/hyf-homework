//1. Fetch movies
fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const badMovies = data.filter((movie) => movie.rating <= 3);
    console.log(badMovies);
    const badMoviesSince2000 = badMovies.filter((movie) => movie.year > 2000);
    console.log(badMoviesSince2000);
  })
  .catch(console.log.bind(console));

//2. Promise that resolves after set time
function resolvePromise(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), resolveAfter * 1000);
  });
}

resolvePromise(8).then(() => console.log(`I am called asynchronously`));

//Using the promise in async await
async function resolvePromiseAsync(resolveAfter) {
  try {
    await resolvePromise(resolveAfter); //made it general so the code is reusable
    console.log("Async await is executed");
  } catch (error) {
    console.log(error);
  }
}

resolvePromiseAsync(9); //changed the resolveAfter var to see if the code works properly

// 3. Rewrite
// Setting timeout
//Not sure if it is right though
function setTimeoutPromise(milliseconds) {
  return new Promise((resolve) => setTimeout(() => resolve(), milliseconds));
}

setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

// Getting geolocation
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
}

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
    const long = position.coords.longitude;
    const lat = position.coords.latitude;
    const location = `Lat: ${lat}   Long: ${long}`;
    console.log(location);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

//4.Fetching and waiting

// Using promises and .then
Promise.resolve()
  .then(function () {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            fetch("https://cat-fact.herokuapp.com/facts")
              .then((result) => result.json())
              .then((data) => data.map((el) => el.text)) //getting the cat facts from an array of objects
              .then((array) => console.log(array))
          ),
        3000
      )
    );
  })
  .catch(console.log.bind(console));

// Using async await

function fetchAPI() {
  setTimeout(async () => {
    try {
      const fetchedAPI = await fetch("https://cat-fact.herokuapp.com/facts");
      const results = await fetchedAPI.json();
      const catFacts = await results.map((el) => el.text); //getting the cat facts from an array of objects
      console.log(catFacts);
    } catch (error) {
      console.log(error);
    }
  }, 3000);
}

//Executing the function
fetchAPI();

//Async seems to be easier in terms of syntax :)
