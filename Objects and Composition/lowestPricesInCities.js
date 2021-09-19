function findLowestPriceInTowns(array){
  let obj = {};

  array.forEach(value => {
    
    let splittedArray = value.split(' | ');
    let [town,product,priceAsString] = splittedArray;
    let price = Number(priceAsString);

    if (obj[product] == undefined) {
      obj[product] = { town,price};
    }else if(obj[product].price > price){
       obj[product].price = price;
       obj[product].town = town;
    }

  });

    for (const key in obj) {
      console.log(`${key} -> ${obj[key].price} (${obj[key].town})`);
    }
}

// findLowestPriceInTowns(['Sample Town | Sample Product | 1001',
// 'Sample Town | Sample Product | 1000',
// 'Sample Town | Orange | 2',
// 'Sample Town | Peach | 1',
// 'Sofia | Orange | 3',
// 'Sofia | Peach | 2',
// 'New York | Sample Product | 1000.1',
// 'New York | Burger | 10']
// );

findLowestPriceInTowns(['Sofia City | Audi | 100000',
  'Sofia City | BMW | 100000',
 'Sofia City | Mitsubishi | 10000',
 'Sofia City | Mercedes | 10000',
  'Sofia City | NoOffenseToCarLovers | 0',
 ' Mexico City | Audi | 1000',
  'Mexico City | BMW | 99999',
  'New York City | Mitsubishi | 10000',
 ' New York City | Mitsubishi | 1000',
  'Mexico City | Audi | 100000',
  'Washington City | Mercedes | 1000'])