const { query } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    const maxPrice = request.query.maxPrice;
    const limit = request.query.limit;
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;
    let results = meals;
    //Checking if there are any queries
    if (Object.keys(request.query).length !== 0) {
      let supportedParams = false; //boolean for query validation
      if (maxPrice) {
        if (!isNaN(parseInt(maxPrice))) {
          results = results.filter((meal) => meal.price <= parseInt(maxPrice));
          supportedParams = true;
        } else {
          response
            .status(400)
            .json(
              "Failed to parse the maximum price. Check if it has a numerical value"
            );
          return;
        }
      }

      if (createdAfter) {
        if (new Date(createdAfter) != "Invalid Date") {
          results = results.filter(
            (meal) => new Date(meal.createdAt) > new Date(createdAfter)
          );
          supportedParams = true;
        } else {
          response.status(400).json("Failed to parse the date");
          return;
        }
      }

      if (title) {
        results = results.filter(
          (meal) => meal.title.toLowerCase().includes(title.toLowerCase()) //getting rid of case sensitivity
        );
        supportedParams = true;
      }

      if (limit) {
        if (!isNaN(parseInt(limit))) {
          results = results.slice(0, limit);
          supportedParams = true;
        } else {
          response.status(400).json("Failed to parse limit");
          return;
        }
      }

      if (supportedParams === true) {
        response.send(results);
      } else {
        response.status(400).json("This query parameter is not supported");
        return;
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
