//Getting the HTML elements
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");

//Getting the coordinates of target positions
// x-axis - left - right
// y-axis - bottom - top
const xRed = 20 - parseInt(red.style.left);
const yRed = 300 - parseInt(red.style.top);
const xBlue = 400 - parseInt(blue.style.left);
const yBlue = 300 - parseInt(blue.style.top);
const xGreen = 400 - parseInt(green.style.left);
const yGreen = 20 - parseInt(green.style.top);

//Creating an async function
async function translateOneByOne() {
  try {
    await moveElement(red, { x: xRed, y: yRed });
    console.log("Red circle has been moved");
    await moveElement(blue, { x: xBlue, y: yBlue });
    console.log("Blue circle has been moved");
    await moveElement(green, { x: xGreen, y: yGreen });
    console.log("Blue circle has been moved");
  } catch (error) {
    console.log.bind(console);
  }
}

//Executing the function (commented out to execute the next function)
//translateOneByOne();

//Creating a function with Promise.all
function translateAllAtOnce() {
  try {
    const redPromise = moveElement(red, { x: xRed, y: yRed });
    const bluePromise = moveElement(blue, { x: xBlue, y: yBlue });
    const greenPromise = moveElement(green, { x: xGreen, y: yGreen });
    Promise.all([redPromise, bluePromise, greenPromise]).then(() =>
      console.log("Elements have been moved")
    );
  } catch (error) {
    console.log.bind(console);
  }
}

//Executing the function
translateAllAtOnce();
