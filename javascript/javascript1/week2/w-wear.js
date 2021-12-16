function getYourOutfit(temp) {
  if (temp <= -30) {
    return "stay home, you don't need that kind of drama in your life";
  } else if (temp <= -10) {
    return "parka or winter coat, hat, scarf and uggs";
  } else if (temp < 0) {
    return "winter coat, hat, scarf and boots";
  } else if (temp <= 10) {
    return "coat and boots";
  } else if (temp <= 15) {
    return "coat and sneakers";
  } else if (temp <= 20) {
    return "jeans, hoodie, and sneakers";
  } else if (temp <= 25) {
    return "jeans or shorts and t-shirt";
  } else if (temp > 25) {
    return "short and t-shirt";
  }
}

//Test
let outfit = getYourOutfit(21);
console.log(outfit);
