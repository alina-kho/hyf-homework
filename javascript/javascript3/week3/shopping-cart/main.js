//Obtaining HTML elements
const productList = document.querySelector("#products");
const user = document.querySelector("#user");
const userEmail = document.querySelector("#userMail");
const totalPar = document.querySelector("#total");

class Product {
  constructor(name, price, currency) {
    this.name = name;
    this.price = price;
    this.currency = currency;
  }

  //Wanted to implement it in another way, so the result is rendered in HTML. But didn't manage.
  //Will leave for now as it is.
  convertToCurrency(currency) {
    fetch(
      `https://api.exchangerate.host/convert?from=${this.currency}&to=${currency}&amount=${this.price}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(
          `The is price of ${this.name} in ${currency}: ${data.result.toFixed(
            2
          )}`
        );
      })
      .catch(console.log.bind(console));
  }

  //Formatting a price string, so it looks prettier
  formatePriceString() {
    return this.price.toLocaleString("en-EN", {
      style: "currency",
      currency: this.currency,
      maximumFractionDigits: 2,
    });
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products = this.products.filter((el) => el !== product);
  }

  searchProduct(productName) {
    return this.products.filter(
      (el) => el.name.toLowerCase() == productName.trim().toLowerCase()
    );
  }

  getTotal() {
    const total = this.products.reduce(
      (sum, product) => sum + product.price,
      0
    );
    totalPar.innerHTML = `Total: ${total}`;
    return total;
  }

  renderProducts() {
    this.products.forEach((el) => {
      const product = document.createElement("li");
      product.className = "product";
      product.innerHTML = `<h3>${
        el.name
      }</h3><p>${el.formatePriceString()}</p>`;
      productList.appendChild(product);
    });
    shoppingCart.getTotal();
  }

  getUser(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((profile) => {
        user.innerHTML = `${profile.name}`;
        userEmail.innerHTML = `${profile.email}`;
      });
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("Flat-screen", 5000, "DKK");
shoppingCart.addProduct(flatscreen);
const table = new Product("Table", 2000, "DKK");
shoppingCart.addProduct(table);
const chairSet = new Product("Chair set", 3000, "DKK");
shoppingCart.addProduct(chairSet);
const billy = new Product("Billy shelf", 550, "DKK");
shoppingCart.addProduct(billy);

shoppingCart.getUser(3);

// shoppingCart.getTotal();
flatscreen.convertToCurrency("EUR");
console.log(flatscreen.price);
console.log(flatscreen.currency);
shoppingCart.renderProducts();
