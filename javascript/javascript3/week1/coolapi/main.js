const gridContainer = document.querySelector(".grid");

(async function () {
  const response = await fetch(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20"
  );
  if (response.ok) {
    const content = await response.json();
    //console.log(content); just checking what data we are getting
    // So we are getting an array of objects. Each object contain info on a particular game and deal
    // Let's get som of the info in form of a div (divs will be displayed as grid)
    content.forEach((game) => {
      const gameDiv = document.createElement("div");
      gameDiv.className = "gameDiv";
      gameDiv.innerHTML = `<h2>${game.title}</h2>
    <img src = "${game.thumb}">
    <p>Steam ID: ${game.steamAppID}</p>
    <p>Deal price: ${game.salePrice} </p>
    <p>Original price: ${game.normalPrice}</p>`;
      gridContainer.appendChild(gameDiv);
    });
  }
})();
