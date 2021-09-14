function calculateFruitPrice(fruit, weigthInGrams, pricePerKg){
    // weight / 1000; * pricePerKg
    let kg = (weigthInGrams / 1000).toFixed(2);
    let  money = (kg * pricePerKg).toFixed(2);

    console.log(`I need $${money} to buy ${kg} kilograms ${fruit}.`);
} 

calculateFruitPrice('orange', 2500, 1.80);
calculateFruitPrice('apple', 1563, 2.35);