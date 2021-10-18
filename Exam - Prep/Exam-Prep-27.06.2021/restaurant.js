class Restaurant {
  constructor(budget) {
    this.budgetMoney = budget;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
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

      this.history.push(isPriceBigger);
    });

    return this.history.join("\n");
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
      Object.keys(this.menu).length === 1
        ? `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        : `Great idea! Now with the ${meal} we have ${
            Object.keys(this.menu).length
          } meals in the menu, other ideas?`;

    return message;
  }

  showTheMenu() {
    return Object.keys(this.menu).length === 0
      ? `Our menu is not ready yet, please come later...`
      : Object.entries(this.menu)
          .map((x) => `${x[0]} - $ ${x[1].price}`)
          .join("\n");
  }

  makeTheOrder(meal) {
    if (!this.menu[meal]) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    let clonedObject = Object.assign({}, this.stockProducts);
    let clonedBudgetMoney = this.budgetMoney;

    for (const product of this.menu[meal].allProducts) {
      for (const key in product) {
        if (this.stockProducts[key] < product[key]) {
          this.stockProducts = Object.assign({}, clonedObject);
          this.budgetMoney = clonedBudgetMoney;
          return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }
        this.stockProducts[key] -= product[key];
        this.budgetMoney += this.menu[meal].price;
      }
    }
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
  }
}
