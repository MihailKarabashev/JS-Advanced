function createRegistery(array){
      
    let myObj = array.reduce( (obj,value) => {
        let splittedArray = value.split(' <-> ').filter(value=> value != ' ');
        let [town,population] = splittedArray;
        let populationAsString = Number(population);

        obj[town] !== undefined ? obj[town]+=populationAsString : obj[town] = populationAsString;
        
        return obj;

    },{});

    for (const key in myObj) {
        console.log(`${key} : ${myObj[key]}`);
    }
}


createRegistery(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

createRegistery(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);