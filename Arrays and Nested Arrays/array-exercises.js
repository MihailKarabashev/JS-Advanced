1
const myFunc = (arr, delimeter) => {
    return arr.join(delimeter);
}
console.log(myFunc(['One', 'Two', 'Three', 'Four', 'Five'], '-'));
console.log(myFunc(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_'));

2
const printNthElement = (array, step) => {
    let arr = [];
    for (let index = 0; index < array.length; index += step) {
        arr.push(array[index]);
    }

    return arr;
}
console.log(printNthElement(['5', '20', '31', '4', '20'], 2));
console.log(printNthElement(['dsa', 'asd', 'test', 'tset'], 2));
console.log(printNthElement(['1', '2', '3', '4', '5'], 6));

3
const addRemoveElement = (array) => {
    let count = 0;
    let arr = [];

    array.map(command => {
        count++;
        if (command == 'add') {
            arr.push(count);
        } else if (command == 'remove' && arr.length > 0) {
            arr.pop();
        }
    });
    ;
    return arr.length > 0 ? arr.join('\n') : 'Empty';
}


console.log(addRemoveElement(['add', 'add', 'add', 'add']));
console.log(addRemoveElement(['add', 'add', 'remove', 'add', 'add']));
console.log(addRemoveElement(['remove', 'remove', 'remove']));

4

let rotateArray = (array, rotationCount) => {
    for (let index = 0; index < rotationCount; index++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }
    return array;
}
console.log(rotateArray(['1', '2', '3', '4'], 2));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));

5
const increaseSubset = (array) => {
    let reducesArray = array.reduce((acc, value) => {

        if (acc.length == 0) {
            acc.push(value);
        }

        if (acc[acc.length - 1] < value) {
            acc.push(value);
        }

        return acc;

    }, []);

    return reducesArray;
}

console.log(increaseSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(increaseSubset([1, 2, 3, 4]));
console.log(increaseSubset([20, 3, 2, 15, 6, 1]));


6
const sortNames = (array) => {
    return array
        .sort((a, b) => a.localeCompare(b))
        .map((x, i) => `${i + 1}.${x}`)
        .join('\n');
}

console.log(sortNames(["John",
    "Bob",
    "Christina",
    "Ema"]));

7
const sortByTwoCriteria = (array) => {
    return array.sort((a, b) => a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase()));
}

console.log(sortByTwoCriteria(['alpha', 'beta', 'gamma']));
console.log(sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sortByTwoCriteria(['test', 'Deny', 'omen', 'Default']));

