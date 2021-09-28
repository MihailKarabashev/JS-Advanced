function solution() {
  let recepies = {
    apple: [{ carbohydrate: 1 }, { flavour: 2 }],
    lemonade: [{ carbohydrate: 10 }, { flavour: 20 }],
    burger: [{ carbohydrate: 5 }, { flavour: 3 }, { fat: 7 }],
    eggs: [{ protein: 5 }, { flavour: 1 }, { fat: 1 }],
    turkey: [
      { carbohydrate: 10 },
      { flavour: 10 },
      { fat: 10 },
      { protein: 10 },
    ],
  };

  let storage = {
    carbohydrate: 0,
    flavour: 0,
    fat: 0,
    protein: 0,
  };

  let obj = {
    restock(microElement, quantity) {
      storage[microElement] += Number(quantity);
    },
    prepare(recepi, quantity) {
      if (
        recepies[recepi].some(
          (ingredient, index, myArr) =>
            storage[myArr[ingredient]] < myArr[ingredient] * quantity
        )
      ) {
        console.log("ss");
      }

      for (let index = 0; index < recepies[recepi].length; index++) {
        let ingredient = recepies[recepi][index];
        let storageQuantity = storage[Object.keys(ingredient)[0]];
        let recepiQuantity = Object.values(ingredient)[0] * quantity;

        storageQuantity -= recepiQuantity;
      }
    },
    report() {
      console.log(storage);
    },
  };

  return function (args) {
    let [command, recepiOrIngrediant, quantity] = args.split(" ");
    obj[command](recepiOrIngrediant, quantity);
  };
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
// console.log(manager("prepare apple 4")); // Error: not enough carbohydrate in stock
//manager("report");
