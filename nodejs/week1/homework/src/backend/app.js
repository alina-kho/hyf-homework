const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals.json");
const reservations = require("./data/reservations.json");
const reviews = require("./data/reviews.json");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(mealsWithReview);
});

app.get("/cheap-meals", async (request, response) => {
  response.send(cheapMeals);
});

app.get("/large-meals", async (request, response) => {
  response.send(largeMeals);
});

app.get("/meal", async (request, response) => {
  response.send(
    mealsWithReview[Math.floor(Math.random() * mealsWithReview.length)]
  );
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  response.send(reservations[Math.floor(Math.random() * reservations.length)]);
});

//creating necessary arrays
const mealsWithReview = meals.map((meal) => {
  meal.reviews = [];
  reviews.filter((review) => {
    if (meal.id === review.mealId) {
      meal.reviews.push(review);
    }
  });
  return meal;
});

const cheapMeals = mealsWithReview.filter((meal) => meal.price <= 50);

const largeMeals = mealsWithReview.filter((meal) => meal.maxNumberOfGuests > 5);

module.exports = app;
