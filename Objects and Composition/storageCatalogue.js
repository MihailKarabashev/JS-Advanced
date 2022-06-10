function storeProductByAlphabeticleOrder(array) {

    let obj = {};
    array.sort((a, b) => a.localeCompare(b)).forEach(value => {

        let splittedValues = value.split(' : ');
        let [product, priceAsString] = splittedValues;
        let price = Number(priceAsString);

        let firstLetter = product[0];

        if (obj[firstLetter] == undefined) {
            obj[firstLetter] = [];
        }

        obj[firstLetter].push({ product, price });

    });

    for (const key in obj) {
        console.log(`${key}`);
        for (const val of obj[key]) {
            console.log(`  ${val.product}: ${val.price}`);
        }
    }
}




storeProductByAlphabeticleOrder(['Appricot : 20.4',
    'Fridge : 1500', 'TV : 1499', 'Deodorant : 10',
    'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);

// storeProductByAlphabeticleOrder(['Banana : 2',
// 'Rubic\'s Cube : 5',
// 'Raspberry P : 4999',
// 'Rolex : 100000',
// 'Rollon : 10',
// 'Rali Car : 2000000',
// 'Pesho : 0.000001',
// 'Barrel : 10'])

