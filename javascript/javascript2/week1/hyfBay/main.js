console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const productsList = document.querySelector("ul");

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const listItem = document.createElement("li");
    //Creating a headline
    const headline = document.createElement("h1");
    headline.innerHTML = product.name;
    listItem.appendChild(headline);
    //Adding a price
    const price = document.createElement("p");
    price.innerHTML = `Price: ${product.price}`;
    listItem.appendChild(price);
    //Adding a rating
    const rating = document.createElement("p");
    rating.innerHTML = `Rating: ${product.rating}`;
    listItem.appendChild(rating);
    //Appending the whole product info as a child to ul
    productsList.appendChild(listItem);
  }
}

renderProducts(products);
