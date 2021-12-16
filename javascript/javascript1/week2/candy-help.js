const boughtCandyPrices = [];
let amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
  let cost = 0; //introducing a variable
  if (candyType === "sweet") {
    cost = weight * 0.5;
    boughtCandyPrices.push(cost);
  } else if (candyType === "chocolate") {
    cost = weight * 0.7;
    boughtCandyPrices.push(cost);
  } else if (candyType === "toffee") {
    cost = weight * 1.1;
    boughtCandyPrices.push(cost);
  } else if (candyType === "chewing-gum") {
    cost = weight * 0.03;
    boughtCandyPrices.push(cost);
  } else {
    console.log("Candy type is not found");
  }
}

//Tests
addCandy("sweet", 500);
addCandy("toffee", 150);
console.log(boughtCandyPrices);

function canBuyMoreCandy(candiesBought, budget) {
  let sum = 0;
  for (i = 0; i < candiesBought.length; i++) {
    sum += candiesBought[i];
  }
  if (sum < amountToSpend) {
    console.log("You can buy more, so please do!");
    return true;
  } else {
    console.log("Enough candy for you!");
    return false;
  }
}

canBuyMoreCandy(boughtCandyPrices, amountToSpend);
