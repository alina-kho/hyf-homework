const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

//Sum route (query parameters)
app.get("/numbers/add", (req, res) => {
  const query = req.query;
  const first = parseInt(query.first);
  const second = parseInt(query.second);
  if (first && second) {
    res.send(String(first + second)); //since int values aren't supported
  } else {
    res.send("Please assign the first and the second values");
  }
});

//Multiply route
app.get("/numbers/multiply/:first/:second", (req, res) => {
  const first = parseInt(req.params.first);
  const second = parseInt(req.params.second);
  res.send(String(first * second)); //since int values aren't supported
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
