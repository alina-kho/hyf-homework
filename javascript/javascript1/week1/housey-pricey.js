//One of the convenient ways could be a function - it's reusable
function housePriceEvaluator(name, width, height, depths, garden, agentPrice) {
  let houseRealPrice = width * height * depths * 2.5 * 1000 + garden * 300;
  let priceDifference = agentPrice - houseRealPrice;
  if (priceDifference > 0) {
    console.log(
      name +
        ", you are going to pay " +
        priceDifference +
        " more than you actually should!"
    );
  } else {
    console.log(name + ", congrats! You got a great deal!");
  }
}

//Calling on a function
housePriceEvaluator("Peter", 8, 10, 10, 100, 2500000);
housePriceEvaluator("Julia", 5, 8, 11, 70, 1000000);
