const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Getting data through query parameters using GET
app.get("/calculator/add", (req, res) => {
  const params = Object.values(req.query).flat();
  //Used Object.values(req.query).flat() for user to be able to manipulate with more than two params
  const result = params.reduce(
    (first, second) => parseInt(first) + parseInt(second)
  );
  if (!isNaN(result)) {
    res.status(200).json(result);
  } else {
    res.status(400).send("Failed to parse params. Please check the format");
  }
});

app.get("/calculator/sub", (req, res) => {
  const params = Object.values(req.query).flat();
  const result = params.reduce(
    (first, second) => parseInt(first) - parseInt(second)
  );
  if (!isNaN(result)) {
    res.status(200).json(result);
  } else {
    res.status(400).send("Failed to parse params. Please check the format");
  }
});

app.get("/calculator/multiply", (req, res) => {
  const params = Object.values(req.query).flat();
  const result = params.reduce(
    (first, second) => parseInt(first) * parseInt(second)
  );
  if (!isNaN(result)) {
    res.status(200).json(result);
  } else {
    res.status(400).send("Failed to parse params. Please check the format");
  }
});

app.get("/calculator/divide", (req, res) => {
  const params = Object.values(req.query).flat();
  const result = params.reduce(
    (first, second) => parseInt(first) / parseInt(second)
  );
  if (!isNaN(result)) {
    res.status(200).json(result);
  } else {
    res.status(400).send("Failed to parse params. Please check the format");
  }
});

// Getting data through the request body using POST
app.post("/calculator/add", (req, res) => {
  const firstParam = req.body.firstParam;
  const secondParam = req.body.secondParam;
  if (!isNaN(parseInt(firstParam)) && !isNaN(parseInt(secondParam))) {
    res.status(200).json(parseInt(firstParam) + parseInt(secondParam));
  } else {
    res.status(400).send("Failed to parse params. Please check the format");
  }
});

app.post("/calculator/sub", (req, res) => {
  const firstParam = req.body.firstParam;
  const secondParam = req.body.secondParam;
  if (!isNaN(parseInt(firstParam)) && !isNaN(parseInt(secondParam))) {
    res.status(200).json(parseInt(firstParam) - parseInt(secondParam));
  } else {
    res.status(400).send("Failed to parse params. Please check the format");
  }
});

app.post("/calculator/multiply", (req, res) => {
  const firstParam = req.body.firstParam;
  const secondParam = req.body.secondParam;
  if (!isNaN(parseInt(firstParam)) && !isNaN(parseInt(secondParam))) {
    res.status(200).json(parseInt(firstParam) * parseInt(secondParam));
  } else {
    res.status(400).send("Failed to parse params. Please check the format");
  }
});

app.post("/calculator/divide", (req, res) => {
  const firstParam = req.body.firstParam;
  const secondParam = req.body.secondParam;
  if (!isNaN(parseInt(firstParam)) && !isNaN(parseInt(secondParam))) {
    res.status(200).json(parseInt(firstParam) / parseInt(secondParam));
  } else {
    res.status(400).send("Failed to parse params. Please check the format");
  }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
