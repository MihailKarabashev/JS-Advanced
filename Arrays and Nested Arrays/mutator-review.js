//Mutator methods => Theese methods will mutate the array

//Pop -> Removes the last element from the array and returns that element (stack C#)
let nums = [10, 20, 30, 40]; //length - 4
nums.pop();  // returns 40 and the length is 3

//Push -> Adds one or more elements to the end of the array and returns the new length of the array
let arrayLength = nums.push(100); // array length is 5 and return value is 5

//Shift -> Removes the first element from the array and returns that removed element
nums.shift(); // Removes 10 and returns 10

//Unshift -> Adds one or more elements at the begining of the an array and returns new length
nums.unshift(200); // 200 is the first element now and the length is 5

//Splice -> Changes the contents of an array by removing or replacing exsisting elements and/or adding new elements
//Splice - Remove syntax
nums.splice(1, 1); // First parameter is from where to start. Secound parameter is the count to delete. Get first index and remove it
nums.splice(1, 2); // It will delete all from first to the secound index -> 10 20 will be deleted
// Splice - Add syntax
nums.splice(3, 0, 500);//First parameter is where to add. Secound is how much to be deleted. Third one is what value to add.

//Fill - Fills all the elements of an array from a start index to an end index with a static value
nums.fill(333, 3, 4);

//Reverse
nums.reverse();

//Sorting
nums.sort((a, b) => a - b); // sorting  numbers ASCENDING
nums.sort((a, b) => b - a); // sorting  numbers DESCENDING
['value1', 'value2', 'value3'].sort((a, b) => a.localeCompare(b)); //  sorting text 


function sum(array) {
    return Number(array.pop()) + Number(array.shift());
}

console.log(sum(['20', '30', '40']));
console.log(sum(['5', '10']));

function negativePositiveNumbers(array) {
    let arr = [];

    for (let index = 0; index < array.length; index++) {
        if (array[index] >= 0) {
            arr.push(array[index]);
        } else {
            arr.unshift(array[index]);
        }
    }

    console.log(arr.join(' '));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);

