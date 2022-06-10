//Destructuring Synxah (Objects)
const department = { name: 'Enginering', director: 'Tom Thompson', employeeCount: 25 };
const { name, director } = department; //This is how we can destructuring single obj

//Nested Destructuring Synxah (Objects)
const department2 = {
    name: 'Enginering',
    data: {
        directorR: {
            name: 'John',
            position: 'Engineering Director'
        },
        employees: [],
        company: 'Quick Build'
    }
}
const { data: { directorR } } = department2;


//for-in => We iterate over all enumerable properties (works for objects)
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(`${key} => ${obj[key]}`);
}

//Object Keys
const keys = Object.keys(obj); //Get all keys of an object and returns array

//Object Values
const values = Object.values(obj); //Get all values of an object and returns array

//Object Entries => This method is often used if we want to sort the contents
const entries = Object.entries(obj); // Returns array of array.

//hasOwnProperty => Checks wheather object has the same property as given one
if (obj.hasOwnProperty('name')) {
    //Do Something
}

//JSON
//JSON Parse => From JSON to Js Object
//JSON Stringify => From Js Object ot JSON

const myFunc = (name, population, treasury) => {
    return {
        name,
        population,
        treasury
    }
}

console.log(myFunc('Ivan', 100000, 20000000));

const registerFunc = (array) => {
    let obj = {};

    array.map(x => {
        let [town, population] = x.split(' <-> ')
        if (obj[town] != undefined) {
            obj[town] += Number(population);
        } else {
            obj[town] = Number(population);
        }
    });

    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }

}

registerFunc(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);

registerFunc(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);