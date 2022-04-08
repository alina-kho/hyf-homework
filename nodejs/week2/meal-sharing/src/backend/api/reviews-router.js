const express = require("express");
const router = express();

const reviews = require("../data/reviews.json");

router.get("/", async (request, response) => {
  try {
    response.send(reviews);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    if (parseInt(request.params.id)) {
      response.send(
        reviews.find((review) => review.id === parseInt(request.params.id))
      );
    } else {
      response.send(400, "Please try another id");
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
