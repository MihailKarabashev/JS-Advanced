
//1
// function area() {
//     return Math.abs(this.x * this.y);
// }

// function vol() {
//     return Math.abs(this.x * this.y * this.z);
// }

// function solve(area, vol, input) {
//     let cubes = JSON.parse(input);
//     let arr = [];

//     for (const cube of cubes) {
//         const cubeArea = area.call(cube)
//         const cubeVolume = vol.call(cube);
//         arr.push({
//             area: cubeArea,
//             volume: cubeVolume
//         });
//     }

//     console.log(arr);
// }

// solve(area, vol, `[
//     {"x":"1","y":"2","z":"10"},
//     {"x":"7","y":"7","z":"10"},
//     {"x":"5","y":"2","z":"10"}
//     ]`)


//2
// function solution(input) {
//     return function anotherFunc(anotherInput) {
//         return input + anotherInput;
//     }
// }
// let add7 = solution(7);
// console.log(add7(2));
// console.log(add7(3));

//3
// function solve(input, criteria) {
//     let parsedData = JSON.parse(input);
//     let [criteriaProperty, criteriaValue] = criteria.split('-').filter(x => x.trim());

//     return parsedData.filter(x => x[criteriaProperty] == criteriaValue)
//         .map(data => ({
//             firstName: data.first_name,
//             lastName: data.last_name,
//             email: data.email
//         }))
//         .forEach((x, i) => console.log(`${i}. ${x.firstName} ${x.lastName} - ${x.email}`));
// }

// solve(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//     }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//     },
//     {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//     }]`,
//     'gender-Female');


//4
// function solution() {
//     let str = '';

//     function append(input) {
//         str += input;
//     }

//     function removeStart(n) {
//         str = str.substring(n);
//     }

//     function print() {
//         console.log(str);
//     }

//     function removeEnd(n) {
//         str = str.slice(0, -n);
//     }

//     return {
//         append,
//         print,
//         removeStart,
//         removeEnd
//     }
// }

// const myFunc = solution();
// myFunc.append('Hello');
// myFunc.append('again');
// myFunc.removeStart(3);
// myFunc.removeEnd(4);
// myFunc.print();

//5
// function solve(array) {
//     let obj = {
//         add,
//         remove,
//         print,
//         collection: [],
//     }

//     array.map(x => {
//         let [command, messageStr] = x.split(' ');
//         obj[command](messageStr);
//     })

//     function add(inputStr) {
//         obj.collection.push(inputStr);
//     }

//     function remove(inputStr) {
//         obj.collection = obj.collection.filter(x => x !== inputStr);
//     }

//     function print() {
//         console.log(obj.collection.join(','));
//     }
// }

// solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
// solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);

//6
function solve(input) {
    const data = {}

    const instr = {
        create: (n, inherits, n2) =>
            (data[n] = inherits ? Object.create(data[n2]) : {}),
        set: (n, k, v) => (data[n][k] = v),
        print: n => {
            const entry = []
            for (const key in data[n]) {
                entry.push(`${key}:${data[n][key]}`)
            }
            console.log(entry.join(", "))
        },
    }

    input.forEach(x => {
        const [c, n, k, v] = x.split(" ")

        instr[c](n, k, v)
    })
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);