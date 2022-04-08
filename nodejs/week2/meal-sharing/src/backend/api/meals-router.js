const { query } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    const supportedParams = ["maxPrice", "limit", "title", "createdAfter"]; //will be needed for query validation
    const maxPrice = parseInt(request.query.maxPrice); //converting to int
    const limit = parseInt(request.query.limit); //converting to int
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;

    //Checking if there are any queries
    if (Object.keys(request.query) != 0) {
      if (maxPrice) {
        response.send(meals.filter((meal) => meal.price <= maxPrice));
      } else if (title) {
        response.send(
          meals.filter(
            (meal) => meal.title.toLowerCase().includes(title.toLowerCase()) //getting rid of case sensitivity
          )
        );
      } else if (createdAfter) {
        if (new Date(createdAfter) != "Invalid Date") {
          response.send(
            meals.filter(
              (meal) => new Date(meal.createdAt) > new Date(createdAfter)
            )
          );
        } else {
          response.send(400);
        }
      } else if (limit) {
        response.send(meals.slice(0, limit));
      } else if (!supportedParams.includes(request.query)) {
        response.send(400, "This query parameter is not supported");
      }
    } else {
      response.send(meals);
    }
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const ids = []; // creating array of id's for further check
    meals.forEach((meal) => ids.push(meal.id));
    if (!isNaN(parseInt(request.params.id))) {
      if (ids.includes(parseInt(request.params.id))) {
        response.send(
          meals.find((meal) => meal.id === parseInt(request.params.id))
        );
      } else {
        response.send(200, "No meals with this id"); //so the user doesn't just get an empty array
      }
    } else {
      response.send(400, "Please try another id - it should be a number");
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
