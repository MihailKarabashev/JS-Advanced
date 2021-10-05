class Restaurant {
  constructor(budget) {
    this.budgetMoney = budget;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    let result = [];

    products.forEach((product) => {
      let [productName, productQuantity, productTotalPrice] =
        product.split(" ");

      let isPriceBigger =
        Number(productTotalPrice) <= this.budgetMoney
          ? `Successfully loaded ${productQuantity} ${productName}`
          : `There was not enough money to load ${productQuantity} ${productName}`;

      if (Number(productTotalPrice) <= this.budgetMoney) {
        !this.stockProducts[productName]
          ? (this.stockProducts[productName] = Number(productQuantity))
          : (this.stockProducts[productName] += Number(productQuantity));

        this.budgetMoney -= productTotalPrice;
      }

      result.push(isPriceBigger);
    });

    return result.join("\n");
  }

  addToMenu(meal, neededProducts, price) {
    let products = neededProducts.map((x) => x.split(" "));

    if (this.menu[meal]) {
      return `The ${meal} is already in the our menu, try something different.`;
    }

    if (!this.menu[meal]) {
      this.menu[meal] = {
        allProducts: [],
        price,
      };
      products.map((x) =>
        this.menu[meal].allProducts.push({ [x[0]]: Number(x[1]) })
      );
    }

    let message =
      this.menu[meal].allProducts.length === 1
        ? `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        : `Great idea! Now with the ${meal} we have ${
            Object.keys(this.menu).length
          } meals in the menu, other ideas?`;

    return message;
  }

  showTheMenu() {
    return Object.keys(this.menu) === 0
      ? `Our menu is not ready yet, please come later...`
      : Object.entries(this.menu)
          .map((x) => `${x[0]} - $  ${x[1].price}`)
          .join("\n");
  }

  makeTheOrder(meal) {
    if (!this.menu[meal]) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    for (const product of this.menu[meal].allProducts) {
      console.log(Object.keys(product)[0]);
      console.log(Object.values(product)[0]);
    }
  }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts([
  "Yogurt 30 3",
  "Honey 50 4",
  "Strawberries 20 10",
  "Banana 5 1",
]);
kitchen.addToMenu(
  "frozenYogurt",
  ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
  9.99
);
console.log(kitchen.makeTheOrder("frozenYogurt"));
