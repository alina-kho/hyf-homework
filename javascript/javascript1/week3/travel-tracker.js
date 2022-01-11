const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function getTravelTime(object) {
  let numValue = (object.destinationDistance / object.speed) * 60; // getting number of minutes
  let hours = Math.floor(numValue / 60); // getting hours
  let minutes = Math.floor(numValue % 60); //getting minutes as an integer
  return hours + " hours and " + minutes + " minutes";
}

const travelTime = getTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
