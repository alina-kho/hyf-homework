const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
  try {
    response.send(reservations);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    if (parseInt(request.params.id)) {
      response.send(
        200,
        reservations.find(
          (reservation) => reservation.id === parseInt(request.params.id)
        )
      );
    } else {
      response.send(400, "Please try another id");
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
