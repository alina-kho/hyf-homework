console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const productsList = document.querySelector(".productList");

function clearProductList() {
  productsList.innerHTML = "";
} // will be especially useful while making search result lists

//had to rewrite the function to more it shorter
function renderProducts(arr) {
  clearProductList(); // so the code can be reused for input events function
  arr.forEach((item) => {
    const li = document.createElement("li");
    li.className = "product";
    li.innerHTML = `
    <h1>${item.name}</h1><br>
    <p>Price: ${item.price}</p><br>
    <p>Rating: ${item.rating}</p>
    `;
    productsList.appendChild(li);
  });
}

//Window onload
window.onload = function (event) {
  products.sort((first, second) => second.rating - first.rating);
  renderProducts(products);
};

//Input events

//1. Product search

const productSearch = document.querySelector("#productSearch");

function findProductsByName(event) {
  let searchedProduct = productSearch.value.trim().toLowerCase(); //making the input key-unsensitive
  if (searchedProduct != "") {
    const foundProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchedProduct)
    );
    if (foundProducts.length > 0) {
      //integrated this drowpdown event function here, so the found products can be also sorted
      //the initial functions can be found below
      dropdown.onchange = function (event) {
        const chosenValue = dropdown.value;
        switch (chosenValue) {
          case "best":
            sortingBest(foundProducts);
            break;
          case "cheapest":
            sortingCheapest(foundProducts);
            break;
        }
      };
      renderProducts(foundProducts);
    } else {
      productsList.innerHTML = "No products found"; // in case no products
    }
  } else {
    renderProducts(products);
  }
}

productSearch.oninput = findProductsByName;

//2. Max price search

const priceSearch = document.querySelector("#priceSearch");

function findProductsByPrice(event) {
  if (priceSearch.value != "") {
    let maxPrice = priceSearch.value.trim(); // trim is used to remove all the spaces
    // so a used can either write "20000" or "20 000"
    const foundProducts = products.filter(
      (product) => product.price <= maxPrice
    );
    if (foundProducts.length > 0) {
      //integrated this drowpdown event function here, so the found products can be also sorted
      //the initial functions can be found below
      dropdown.onchange = function (event) {
        const chosenValue = dropdown.value;
        switch (chosenValue) {
          case "best":
            sortingBest(foundProducts);
            break;
          case "cheapest":
            sortingCheapest(foundProducts);
            break;
        }
      };
      renderProducts(foundProducts);
    } else {
      productsList.innerHTML = "No products found"; // in case no products
    }
  } else {
    renderProducts(products); // so when the input is all clear again - the product list is rendered as it was
  }
}

priceSearch.oninput = findProductsByPrice;

// 3. Sorting best first (from highest rating to the lowest)/cheapest first

function sortingBest(array) {
  array.sort((first, second) => second.rating - first.rating);
  renderProducts(array);
}

function sortingCheapest(array) {
  array.sort((first, second) => first.price - second.price);
  renderProducts(array);
}

const dropdown = document.querySelector("select");

//wanted to make some general function so the dropdown onchange event can be executed in many different combinations with input
//it got messy, so I broke it down to different chunks (above in the functions and below)
dropdown.onchange = function (event) {
  const chosenValue = dropdown.value;
  switch (chosenValue) {
    case "best":
      sortingBest(products);
      break;
    case "cheapest":
      sortingCheapest(products);
      break;
  }
};

const clearButton = document.querySelector("#clear");

//!Help needed with this feature!
//I wanted to make a button which would make it possible to clear all the filters
//But it acts wierdly - it works fine when the dropdown option is "best first",
//but once I change it to "cheap first", it only displays items from the search before clear button was clicked
clearButton.onclick = function (event) {
  priceSearch.value = "";
  productSearch.value = "";
  dropdown.selectedIndex = 0;
  renderProducts(products);
};
