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

//Selecting HTML elements

const productSearch = document.querySelector("#productSearch");
const priceSearch = document.querySelector("#priceSearch");
const dropdown = document.querySelector("select");

//A general function for both filtering and sorting products
function renderFilterProducts() {
  const productSearchValue = productSearch.value.trim().toLowerCase();
  const priceSearchValue = priceSearch.value.trim();
  const dropdownValue = dropdown.value;
  const sortingBest = (first, second) => second.rating - first.rating;
  const sortingCheapest = (first, second) => first.price - second.price;

  const foundProducts = products
    .filter(
      (product) =>
        productSearchValue === "" ||
        product.name.toLowerCase().includes(productSearchValue)
    )
    .filter(
      (product) => priceSearchValue === "" || product.price <= +priceSearchValue
    )
    .sort(dropdownValue === "best" ? sortingBest : sortingCheapest);
  renderProducts(foundProducts);
}

//Inputs' event listeners
productSearch.oninput = renderFilterProducts;
priceSearch.oninput = renderFilterProducts;
dropdown.onchange = renderFilterProducts;

//Clean filters button onclick event
clearButton.onclick = function (event) {
  priceSearch.value = "";
  productSearch.value = "";
  dropdown.selectedIndex = 0;
  renderProducts(products);
};
