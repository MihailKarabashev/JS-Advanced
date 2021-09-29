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
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let obj = {
    restock(microElement, quantity) {
      storage[microElement] += Number(quantity);
      return "Success";
    },
    prepare(recepi, quantity) {
      let errorArray = recepies[recepi].filter(
        (ingredient) =>
          storage[Object.keys(ingredient)[0]] <
          Object.values(ingredient)[0] * quantity
      );

      if (errorArray.length > 0) {
        throw `Error: not enough ${Object.keys(errorArray[0])[0]} in stock`;
      } else {
        for (let index = 0; index < recepies[recepi].length; index++) {
          let ingredient = recepies[recepi][index];
          let recepiQuantity = Object.values(ingredient)[0] * quantity;
          storage[Object.keys(ingredient)[0]] -= recepiQuantity;
        }
        return "Success";
      }
    },
    report() {
      let result = "";
      let storageEntries = Object.entries(storage);
      for (const [key, value] of storageEntries) {
        result += `${key}=${value} `;
      }

      return result.trim();
    },
  };

  return function (args) {
    let [command, recepiOrIngrediant, quantity] = args.split(" ");
    try {
      return obj[command](recepiOrIngrediant, quantity);
    } catch (e) {
      return e;
    }
  };
}

let manager = solution();
// console.log(manager("restock flavour 50"));
// console.log(manager("prepare lemonade 4"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));

console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
