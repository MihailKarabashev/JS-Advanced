//1
const myFunc = (array) => {
    let obj = {};

    array.map((x, i, currentArray) => {
        if (i % 2 == 0) {
            obj[x] = Number(currentArray[i + 1]);
        }
    });

    console.log(obj);
};


myFunc(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
myFunc(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);

//2
const carFactory = (objRequirments) => {
    let carCatalog = {
        engine: [
            { power: 90, volumne: 1800 },
            { power: 120, volumne: 2400 },
            { power: 200, volumne: 3500 }
        ],
        carrige: [
            { type: 'hatchback', color: '' },
            { type: 'coupe', color: '' },

        ]
    };

    let engineData = carCatalog.engine.find(x => x.power >= objRequirments.power);
    let carrige = carCatalog.carrige.find(x => x.type.toLowerCase() == objRequirments.carriage.toLowerCase());
    let wheelsize = objRequirments.wheelsize % 2 == 0 ? objRequirments.wheelsize -= 1 : objRequirments.wheelsize;

    return {
        model: objRequirments.model,
        engine: engineData,
        carrige: { type: carrige.type, color: objRequirments.color },
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }
};

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

//3
const heroicInventory = (array) => {
    let heroesArray = [];

    array.map(x => {
        let heroProperties = x.split('/');
        let items = heroProperties[2].split(', ');

        heroesArray.push({
            name: heroProperties[0],
            level: Number(heroProperties[1]),
            items,
        });
    });

    return JSON.stringify(heroesArray);
}


console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));

console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));

//4
const getLowestPrices = (array) => {
    let obj = {};

    array.map(x => {
        let [name, product, priceAsString] = x.split(' | ');
        let price = Number(priceAsString);

        if (!obj.hasOwnProperty(product)) {
            obj[product] = {
                price,
                name
            }
        }
        if (price < obj[product].price) {
            obj[product].price = price;
            obj[product].name = name;
        }
    });

    for (const key in obj) {
        console.log(`${key} -> ${obj[key].price} (${obj[key].name})`);
    }
};

getLowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);

//5
const orderCatalogProducts = (array) => {
    let obj = {};

    array.map(x => {
        let [productName, productPriceAsString] = x.split(':');
        let productPrice = Number(productPriceAsString);

        if (!obj.hasOwnProperty(productName[0])) {
            obj[productName[0]] = [];
        }

        obj[productName[0]].push({
            productName,
            productPrice
        });
    });

    let entries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [key, values] of entries) {
        console.log(`${key}`);
        for (const value of values.sort((a, b) => a.productName.localeCompare(b.productName))) {
            console.log(`  ${value.productName}:${value.productPrice}`);
        }
    }
}

orderCatalogProducts(['Appricot : 20.4',
    'Fridge : 1500', 'TV : 1499', 'Deodorant : 10',
    'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);


//6
const convertTownsToJsonOutput = (array) => {
    let townsArr = [];

    array.map((x, index) => {
        let [town, latitudeAsStr, longitudeAsStr] = x.split('|').map(x => x.trim()).filter(x => x !== '');
        let latitude = Number(Number(latitudeAsStr).toFixed(2));
        let longitude = Number(Number(longitudeAsStr).toFixed(2));

        let obj = {};
        obj.town = town;
        obj.latitude = latitude;
        obj.longitude = longitude;

        if (!isNaN(latitude)) {
            townsArr.push(obj);
        }
    });

    return JSON.stringify(townsArr);
};

console.log(convertTownsToJsonOutput(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));

console.log(convertTownsToJsonOutput(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']));


//7
const createRectangle = (width, height, color) => {
    let rect = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() {
            return rect.width * rect.height;
        }
    };
    return rect;
};

let rect = createRectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());


//8
const createHero = () => {

    function createFighter(name) {
        return {
            name,
            health: 100,
            stamina: 100,
            fight() {
                this.stamina--;
                console.log(`${name} slashes at the foe!`);
            }
        }
    }

    function createMage(name) {
        return {
            name,
            health: 100,
            mana: 100,
            cast(spellName) {
                this.mana--;
                console.log(`${name} cast ${spellName}!`);
            }
        }
    }

    return {
        mage: createMage,
        fighter: createFighter
    }
}

let create = createHero();

const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);